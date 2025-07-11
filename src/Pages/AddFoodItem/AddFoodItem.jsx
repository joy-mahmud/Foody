import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const AddFoodItem = () =>  {
  const [preview, setPreview] = useState(null)
  const [message, setMessage] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    } else {
      setPreview(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData()

    data.append('title', form.title.value)
    data.append('description', form.description.value)
    data.append('price', form.price.value)
    data.append('quantity', form.quantity.value)
    data.append('origin', form.origin.value)
    data.append('category', form.category.value)
    data.append('rating', form.rating.value)
    data.append('image', form.image.files[0])

    try {
      const res = await axios.post(`${BASE_URL}/api/add-food/`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setMessage(res.data.message)
      form.reset()
      setPreview(null)
    } catch (err) {
      console.error(err)
      setMessage('Upload failed')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="my-5 max-w-xl mx-auto p-6 space-y-5 border border-gray-200 rounded-xl shadow-md bg-white"
    >
      <h2 className="text-2xl text-center font-semibold text-gray-800">Add new Food item</h2>

      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          name="title"
          id="title"
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
        ></textarea>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            name="price"
            id="price"
            type="number"
            step="0.01"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            name="quantity"
            id="quantity"
            type="number"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin</label>
          <input
            name="origin"
            id="origin"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            name="category"
            id="category"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
          />
        </div>
        <div className="space-y-2 col-span-2">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            name="rating"
            id="rating"
            type="number"
            step="0.1"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
        <input
          name="image"
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm"
        />
      </div>

      {preview && (
        <div className="mt-4">
          <img src={preview} alt="Preview" className="w-full max-h-64 object-cover rounded-md" />
        </div>
      )}

      <button
        type="submit"
        className="cursor-pointer w-full bg-slate-900 hover:bg-white hover:text-black border border-slate-900 text-white font-medium py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 transition-all duration-300"
      >
        Upload
      </button>

      {message && <p className="text-center text-green-600 mt-2 text-sm">{message}</p>}
    </form>
  )
}

export default AddFoodItem;
