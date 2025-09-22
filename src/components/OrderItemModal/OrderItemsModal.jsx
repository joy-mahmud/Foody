import React from 'react'

const OrderItemsModal = ({ data, idx }) => {

    return (
        <div>
            <dialog id={`my_modal_${idx}`} className="modal">
                <div className="modal-box ">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qunatity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.map((item, index) => (
                                        <tr key={index}>
                                            <td><img src={item.food_item.image} className='h-10 w-14 rounded-sm ' /></td>
                                            <td>{item.food_item.name}</td>
                                            <td>${item.food_item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>${item.subtotal}</td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default OrderItemsModal