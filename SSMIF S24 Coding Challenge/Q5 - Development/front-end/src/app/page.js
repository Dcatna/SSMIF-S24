
import Navbar from '@/Components/Navbar';
import "./globals.css";
import ItemCard from '@/Components/Items/ItemCard';
import ItemHoriScroll from '@/Components/Items/ItemHoriScroll';
import GridItems from '@/Components/Items/GridItems';
import { Suspense } from 'react';
import { fetchData } from '@/Components/Items/action';
import Pop from '@/Components/Pop';

export default async function Home() {

  const items = await fetchData()
  //console.log(items)
  return (
    <main className="bg-neutral-50">

     
      <Suspense fallback={<div>Loading..</div>}>
        <div className='justify-center items-center flex mt-8'>
          <ItemHoriScroll items={items}/>
        </div>
        <span className='h-8 block w-full mt-5 mb-5 text-center font-semibold text-2xl'>Item Catalog</span>
        <div className='float-right'>
          <Pop></Pop>
        </div>
        <div className='ml-10 mt-4'>
          <GridItems items={items}></GridItems>
        </div>
      </Suspense>
    </main>
  );
}

