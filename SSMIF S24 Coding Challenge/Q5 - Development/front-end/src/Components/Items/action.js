'use server';
import { revalidatePath } from "next/cache";
export async function handleOnClick(previous, formData) {

    const res = await fetch(`http://localhost:5000/catalog/item/${formData.get('id')}`, {method:'DELETE'})
    
    revalidatePath("/")
    return true
}
  