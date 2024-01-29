import React from 'react'
import {checkToken} from '../utilities/users-services';

function OrderResourcePage() {
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken()
      console.log(expDate)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>OrderResourcePage</h1>
      <button onClick={handleCheckToken}>Check Log In Expiration</button>
    </div>
  )
}

export default OrderResourcePage