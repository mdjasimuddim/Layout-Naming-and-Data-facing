import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/profile'}>Profile</Link>
            </li>
            <li>
                <Link href={'/product/man'}>Product Men</Link>
            </li>
            <li>
                <Link href={{pathname:'/product/woman', query:{name:'jasim', age:25}}}>Product Women</Link>
            </li>
            <li>
                 <Link href={'/country'}>Country</Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu