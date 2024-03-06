'use client'
import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { addToCatalog } from './Items/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons'


const Pop = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const handleSubmit = () => {
        if(name!="" && price!="" && imageUrl!=""){
            addToCatalog({
                'name': name, 
                'price': price, 
                'image' : imageUrl})
        }
    }
  return (
    <Popup modal nested trigger={<button className='mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>ADD ITEM</button>}>
        <div className='flex justify-center items-center'>
            <div className='p-10 bg-white rounded shadow-md w-full min-w-sm'>
                <h1 className='text-xl font-bold text-center mb-5'>Add Item to Catalog!</h1>
                <div className='flex mb-5 group'>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <p className='group-hover:visible invisible'>Image URL comes from right clicking on an image from google and copying the address</p>
                </div>
                <form action="" onSubmit={handleSubmit} className='flex items-center justify-center'>
                    <input type="text" placeholder='name' className='mx-2 border-2 border-blue-700 hover:border-blue-800 rounded-md' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder='price' className='mx-2 border-2 border-blue-700 hover:border-blue-800 rounded-md' value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <input type="text" placeholder='image url' className='mx-2 border-2 border-blue-700 hover:border-blue-800 rounded-md' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                    <button type='submit' className='bg-blue-700 hover:bg-blue-800 px-8 py-2 rounded-md text-white'>ADD!</button>
                </form>
            </div>
        </div>
    </Popup>
  )
}

export default Pop