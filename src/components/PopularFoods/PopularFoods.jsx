import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const PopularFoods = () => {
  const [foods, setFoods] = useState([]);
  const {user} = useContext(AuthContext)
  useEffect(() => {
    axios.get('http://localhost:8000/api/popular-foods/')
      .then(res => {
        setFoods(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch popular foods:', err);
      });
  }, []);

  const handleAddToCart = async(food_id)=>{
   try {
     const cartInfo = {food_id,user_email:user.email,quantity:1}
    const res = await axios.post(`${BASE_URL}/api/add-to-cart/`,{...cartInfo})
    if (res.status===201){
      toast.success("Food item added to cart successfully")
    }
   } catch (error) {
    toast.error("something went wrong")
   }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">🍽️ Popular Foods</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.length > 0 ? (
          foods.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden hover:-translate-y-1.5">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover hover:scale-110 transition duration-300" />
              <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 grow">{item.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>🍳 {item.category}</span>
                  <span>📍 {item.origin}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold text-orange-500">${item.price}</span>
                  <span className="text-yellow-500 font-medium">⭐ {item.rating}</span>
                </div>
                <button onClick={()=>handleAddToCart(item.id)} className="mt-4 w-full btn btn-neutral">Order Now</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No popular foods found.</p>
        )}
      </div>
    </section>
  );
};

export default PopularFoods;
