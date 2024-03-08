'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ItemCard from './ItemCard';
const itemsIndex = (items, currItem) =>{
    for(let i = 0; i<items.length; i++) {
        if(items[i].id === currItem.id){
            return i
        }
    }
    return -1
}

const ItemHoriScroll = ({items}) => {
    //const [item, setItems] = useState<Result[]> = (])
    
    const [animationParent] = useAutoAnimate()
    const [arr, setArr] = useState([])
 

    //console.log(items);

    useEffect(() =>{
        setArr(items.slice(0, 5))

    }, [items])

    //if (isFetching && isFetchingNextPage) return <span>Loading...</span>;    
   // console.log(arr)
    const onLeftButtonClick = () => {
        const leftMost = itemsIndex(items, arr[0])
        if (leftMost !== -1 && items[leftMost - 1]) {
            setArr((prev) => [items[leftMost - 1], prev[0], prev[1], prev[2], prev[3]])
        }
    }

    const onRightButtonClick = () => {
        const last = itemsIndex(items, arr[4])

        //console.log(last !== -1)
        if (last !== -1 ) {
            if(items[last + 1]){
                setArr((prev) => [prev[1], prev[2], prev[3], prev[4], items[last + 1]])
            }
        }
  
    }

  return (
<div className="">
  <ul ref={animationParent} className="flex p-0 list-none overflow-x-hidden">
    <button
      className="slider-button-left px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 mr-2"
      onClick={() => { onLeftButtonClick(); }}
    >
      &lt;
    </button>
    {arr.map((item) => (
      <li key={item.id} className="mx-2 flex-shrink-0">
        <ItemCard key={item.id} catalogItem={item} />
      </li>
    ))}
    <button
      className="slider-button-right px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 ml-2"
      onClick={() => { onRightButtonClick(); }}
    >
      &gt;
    </button>
  </ul>
</div>
  )
}

export default ItemHoriScroll