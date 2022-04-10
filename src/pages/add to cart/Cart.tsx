import React from 'react'
import {useCart} from 'react-use-cart';

type Props = {}

const Cart = (props: Props) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItem,
    cartTotal,
    updateItemQuantoty,
    removeItem,
    emptyCart,
  } = useCart();
  if(isEmpty) return <h1>Your cart is Empty</h1>
  return (
    <div className='row justify-content-center'>
        <div className='col-12'>
            <h4>Cart ({totalUniqueItems}) total Item: ({totalItem})</h4>
            <table className='table table-light table-hover m-0'>
              <tbody>
                {items.map((item, index) => {
                    return(
                    <tr key={index}>
                      <td>
                        <img src="{item.img}" alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>Quantity ({item.quantity})</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default Cart;