import React, { useEffect, useState } from 'react';
import FoodCard from '../foodCard/FoodCard';
import axios from 'axios';

const categories = [
    { name: 'Pizza', emoji: '🍕' },
    { name: 'Burgers', emoji: '🍔' },
    { name: 'Sushi', emoji: '🍣' },
    { name: 'Desserts', emoji: '🍰' },
    { name: 'Drinks', emoji: '🥤' },
    { name: 'Salads', emoji: '🥗' },
    { name: 'Seafood', emoji: '🦞' },
    { name: 'Curry', emoji: '🍛' },
];

const CategoriesSection = () => {
    const [selectedCategory, setselectedCategory] = useState("pizza")
    const [foods, setFoods] = useState([])
    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/foods-cat/', {
                    params: {
                        category: selectedCategory,
                    },
                })
                setFoods(res.data)
            } catch (err) {
                console.error('Error fetching foods:', err)
            }
        }

        fetchFoods()
    }, [selectedCategory])
    const onCategorySelect = (catName) => {
        setselectedCategory(catName)
    }
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">🎯 Explore by Categories</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 place-items-center">
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => onCategorySelect(cat.name)}
                        className="w-full flex flex-col items-center justify-center bg-white border rounded-xl px-4 py-6 shadow-sm hover:shadow-md transition-all hover:scale-105"
                    >
                        <span className="text-3xl mb-2">{cat.emoji}</span>
                        <span className="font-semibold text-gray-700">{cat.name}</span>
                    </button>
                ))}
            </div>
            <div className='mt-12'>
                <h2 className='text-center text-4xl font-semibold mb-5'>{selectedCategory.toUpperCase()}</h2>
                <div className='grid grid-cols-3 gap-5'>
                    {foods.length > 0 ? foods.map((item, idx) => (
                        <FoodCard key={idx} food={item} />
                    )) : <div className='text-center col-span-3 mb-2'>
                        <span>❗ ❗ ❗</span>
                        <h2 className='text-center mt-3 mb-5 text-2xl font-medium'>No foods available for this category</h2></div>}
                </div>
            </div>


        </section>
    );
};

export default CategoriesSection;
