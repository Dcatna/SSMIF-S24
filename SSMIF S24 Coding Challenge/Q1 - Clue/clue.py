import random

class Clue:

    def __init__(self,players,characters,weapons,rooms):
        self.players = players
        self.characters = characters
        self.weapons = weapons
        self.rooms = rooms
        self.scoring_sheets = {player: {} for player in self.players}
        self.player_locations = {player: {} for player in self.players}
    
    def make_solution(self):
        self.sol = {'character' : random.choice(self.characters), #randomly choose from characters, weapons, and rooms for the make the solution 
               'weapon' : random.choice(self.weapons),
               'room' : random.choice(self.rooms)}
    
    def distribute_cards(self):
        ind = 0
        self.player_cards = {}
        cards = self.characters + self.weapons + self.rooms
        cards.remove(self.sol['character'])#remove the solution
        cards.remove(self.sol['weapon'])
        cards.remove(self.sol['room'])
        random.shuffle(cards)
        for i in range(len(self.players)):
            self.player_cards += {f"Player {i+1}": []}#create a map of players with no cards
        while(cards):
            card = cards.pop()
            self.player_cards[f"Player {ind}"].append(card)#append cards to the players
            ind = (ind+1) % len(self.players)#making sure we reach the first player again
        
        return self.player_cards
    
    def move_player(self, player):
        amount_of_moves = random(1, len(self.rooms)) #assiging the amount of moves
        self.player_locations[player] = self.rooms[amount_of_moves % len(self.rooms)]#assigning a room based in the moves

    def make_suggestion(self,player,character,weapon,room):
        if(self.player_locations[player] != room):#player has to be in the same room 
            return "Player has to be in the room"
        sug = {#create suggestion
            'character' : character,
            'weapon' : weapon,
            'room' : room
        }

        res = {}
        for playerrr in self.players:#creating an empty map of the players
            if (playerrr != player):
                res += {playerrr : None}

        for play in self.players:#going through players to see if they have the same cards in the suggesti3e
            if(play == player):
                continue
            for playerr, cards in self.distribute_cards:
                for card in cards:
                    if card in sug.values:
                        res[playerr] = card
                        return sug, res
        return sug, res
    
    def make_accusation(self,player,character,weapon,room):
        if(self.rooms[player] != room):#player has to be in the same room as the accustion
            return "Player has to be in the same room"
        acc = {'characters' : character,#creat accusation
               'weapon' : weapon,
               'room' : room}
        
        if(acc == self.sol):#if the accusation is the solution return true else false
            return True
        else:

            return False
        
    def update_scoring_sheet(self,player,suggestion,response):
        self.scoring_sheets[player] += {suggestion, response} #updating the scoring sheet with the suggestion and response

    



