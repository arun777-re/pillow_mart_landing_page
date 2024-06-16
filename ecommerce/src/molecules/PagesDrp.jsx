import React from 'react'
import { Link } from 'react-router-dom';

const PagesDrp = ({hover}) => {
  return (
    <div className={hover ?'pg-dropdown' : 'pg'}>
        <div className='dropdown'>

        <ul>
            <li>
                <Link to={'/login'}>
                Login
                </Link>
            </li>
            <li>
                <Link to={'/login'}>
                Product CheckOut
                </Link>
            </li>
            <li>
                <Link to={'/cart'}>
                Shopping Cart
                </Link>
            </li>
            <li>
                <Link to={'/login'}>
                Confirmation
                </Link>
            </li>
           
        </ul>
    </div>
    </div>

  )
}

export default PagesDrp;