import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../../utils/constants'
import toast from 'react-hot-toast'

const AddFoodItem = () => {
    const [preview, setPreview] = useState(null)
    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
        } else {
            setPreview(null)
        }
    }
    const handleAddFoodItem = async (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData()
        data.append('title', form.title.value)
        data.append('description', form.description.value)
        data.append('price', form.price.value)
        data.append('quantity', form.quantity.value)
        data.append('origin', form.origin.value)
        data.append('category', form.category.value)
        data.append('image', form.image.files[0])

        try {
            const res = await axios.post(`${BASE_URL}/api/add-food/`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
            if (res.status == 200) {
                toast.success("Food item added successfully")
                form.reset()
                setPreview(null)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='my-5'>
            <form onSubmit={handleAddFoodItem} encType='multipart/form-data'

                className='max-w-xl mx-auto space-y-5 p-6 border border-gray-200 rounded-xl shadow-md bg-white'>
                <h2 className='text-2xl text-center font-semibold text-gray-800'>Add new food item</h2>
                <div>
                    <label htmlFor="title" className='bolck text-sm font-medium text-gray-800'>Title</label>
                    <input type="text" name='title' id="title" required className='w-full px-3 py-2 border rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                </div>
                <div>
                    <label htmlFor="description" className='bolck text-sm font-medium text-gray-800'>Description</label>
                    <textarea rows="3" name='description' id="description" required className='w-full px-3 py-2 border rounded-md  shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="category" className='bolck text-sm font-medium text-gray-800'>Category</label>
                        <input type="text" name='category' id="category" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                    </div>
                    <div>
                        <label htmlFor="price" className='bolck text-sm font-medium text-gray-800'>Price</label>
                        <input type="number" step="0.01" name='price' id="price" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                    </div>
                    <div>
                        <label htmlFor="origin" className='bolck text-sm font-medium text-gray-800'>Origin</label>
                        <input type="text" name='origin' id="origin" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                    </div>
                    <div>
                        <label htmlFor="quantity" className='bolck text-sm font-medium text-gray-800'>Quantity</label>
                        <input type="number" name='quantity' id="quantity" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                    </div>
                </div>
                <div>
                    <label htmlFor="image" className='bolck text-sm font-medium text-gray-800'>Image</label>
                    <input onChange={handleImageChange} type="file" accept='image/*' name='image' id="image" required className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm' />
                </div>
                {preview && (
                    <div className='mt-4'>
                        <img src={preview} alt="preview" className='w-full max-h-64 object-cover rounded-md' />
                    </div>
                )
                }
                <button type='submit' className='cursor-pointer font-semibold w-full bg-slate-950 hover:bg-white hover:text-black border border-slate-950 text-white py-2 px-4 rounded-md transition-all duration-500 focus:ring-2 focus:ring-slate-400 focus:ring-offset-1'>Add Food</button>
            </form>
        </div>
    )
}

export default AddFoodItem