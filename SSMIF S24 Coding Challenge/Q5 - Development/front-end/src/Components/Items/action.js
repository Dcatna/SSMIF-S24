'use server';
//server functions go here
import { revalidatePath } from "next/cache";

export async function handleOnClick(previous, formData) {
    console.log(formData.get("id"))
    const res = await fetch(`http://localhost:5000/catalog/item/${formData.get('id')}`, {method:'DELETE'}) //delete funciton for the catalog
    
    revalidatePath("/") //revalidate the path so everything gets updated with the new items
    return true
}
  
export async function fetchData() {
  
    try {
        const response = await fetch("http://localhost:5000/catalog" , {cache:"no-cache"}); //no cache bc the data might change
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

export async function addToCatalog(item) {
    const res = await fetch(`http://localhost:5000/catalog/item`, { 
        method: "POST",
        headers: {
            'Content-Type': 'application/json', //we want to send json format
        },
        body: JSON.stringify(item), 
    });
    revalidatePath("/")
    return true
}
  