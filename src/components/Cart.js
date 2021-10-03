import { useState } from 'react'
import '../styles/Cart.css';

function Cart(props) {
	const { cart, updateCart } = props
	const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price, 0
  )

	return isOpen ? (
		<div className='jh-cart'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			{cart.length > 0 ? (
        <div>
          <h2>Cart</h2>
          <table className="invoice" cellSpacing="0">
            <tbody>
            {cart.map(({ name, price, amount }, index) => (
              <tr key={`${name}-${index}`}>
                <td>{name}</td>
                <td className="alignMiddle">€ {price}</td>
                <td className="alignRight">x {amount}</td>
              </tr>
            ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <h3>Total: {total}€</h3>
          <button onClick={() => updateCart([])}>Empty Cart</button>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
		</div>
	) : (
		<div className='jh-cart-closed'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
}

export default Cart;
