'use server';
//server functions go here
import { revalidatePath } from "next/cache";

export async function handleOnClick(previous, formData) {

    const res = await fetch(`http://localhost:5000/catalog/item/${formData.get('id')}`, {method:'DELETE'}) //delete funciton for the catalog
    
    revalidatePath("/")
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
    const res = await fetch(`http://localhost:5000/catalog/item`, { // Updated URL
        method: "POST",
        headers: {
            'Content-Type': 'application/json', // Indicate we're sending JSON data
        },
        body: JSON.stringify(item), // Send item as JSON in the body
    });
    revalidatePath("/")
    return true
}
  