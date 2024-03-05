
import Navbar from '@/Components/Navbar';
import "./globals.css";
import ItemCard from '@/Components/Items/ItemCard';
import ItemHoriScroll from '@/Components/Items/ItemHoriScroll';
import GridItems from '@/Components/Items/GridItems';
import { Suspense } from 'react';

export default async function Home() {

  async function fetchData() {
    'use server'
    try {
        const response = await fetch("http://localhost:5000/catalog" , {cache:"no-cache"});
        if (!response.ok) {
        throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
        return []
    }
    }
  

  const items = await fetchData()

  return (
    <main className="bg-neutral-50">
      <Navbar/>
      <Suspense fallback={<div>Loading..</div>}>
        <div className='justify-center items-center flex mt-8'>
          <ItemHoriScroll items={items}/>
        </div>
        <span className='h-8 block w-full mt-5 mb-5 text-center font-semibold text-2xl'>Item Catalog</span>
        <div className='float-right'>
          <button className='mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>ADD ITEM</button>
        </div>
        <div className='ml-10'>
          <GridItems items={items}></GridItems>
        </div>
      </Suspense>
    </main>
  );
}

