
'use client'
import { revalidatePath } from 'next/cache'
import React from 'react'
import { useFormState, useFormStatus} from "react-dom";
import { handleOnClick } from './action';

const ItemCard = ({catalogItem}, onClick) => {
  //console.log(catalogItem.image)
  const [state, formAction] = useFormState(handleOnClick, false)
  const pending = useFormStatus()
  return (
    <form action={formAction}>
      <input name='id' type='hidden' value={catalogItem.id} />
        <div className='justify-start group'>
        <div className='w-56 rounded-md hover:shadow-blue-600 shadow-md h-56 bg-white'>
            <img className=' object-scale-down w-full h-full' src={catalogItem.image} alt="Item Poster" />
        </div>
          <div className='text-black pt-4 flex-col'>
            <h1>
              {catalogItem.name} - ${catalogItem.price}
            </h1>
            <div className='group-hover:visible invisible'>
              <button type='submit' aria-disabled={pending} className='mt-1 text-blue-700 border-blue-700 border-2 hover:text-white bg-white hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-2 py-1 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>REMOVE</button>
            </div>
          </div>
        </div>
    </form>
  )
}

export default ItemCard