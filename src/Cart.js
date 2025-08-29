import React from 'react';
import { useCart } from "react-use-cart";
import data from './Components/data.json';
import Swal from 'sweetalert2';


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className='emp'>Your Cart is Empty</h1>;
    return (
        <div>
            <section className='py-5 container mar car'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                        <table className='table table-light table-hover m-0'>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img}
                                                style={{ height: '6rem' }} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>Quantity({item.quantity})</td>
                                        <td>
                                            <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn btn-info ms-2' onClick={() => {
                                                removeItem(item.id)
                                                Swal.fire({
                                                    icon: 'info',
                                                    title: 'Removed',
                                                    text: `${item.name} has been removed from the cart.`,
                                                    timer: 1500,
                                                    showConfirmButton: false,
                                                });
                                            }}>Remove Item</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-auto ms-auto'>
                        <h2>Total Price : ${cartTotal}</h2>
                    </div>
                    <div className='col-auto'>
                        <button className='btn btn-danger m-2' onClick={() => emptyCart()} >Clear Cart</button>
                        <button className='btn btn-primary m-2'>Buy Now </button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Cart;
