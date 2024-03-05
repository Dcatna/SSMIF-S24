'use client'

import React, {useState, useEffect} from 'react'
import ItemCard from './ItemCard'

const GridItems = ({items}) => {

  return (
    <div className='w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-5'>
        {items.map(item => (
          <div className=''> <ItemCard key={item.id} catalogItem={item}></ItemCard></div>
        ))}
      </div>
  )
}

export default GridItems