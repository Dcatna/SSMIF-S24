'use client'
import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { addToCatalog } from './Items/action';

const Pop = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const handleSubmit = () => {
        console.log('hi')
        addToCatalog({
            'name': name, 
            'price': price, 
            'image' : imageUrl})
    }
  return (
    <Popup modal nested trigger={<button className='mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>ADD ITEM</button>}>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input type="text" placeholder='image url' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
            <button type='submit'>ADD!</button>
        </form>
    </Popup>
  )
}

export default Pop