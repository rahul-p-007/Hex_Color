import React from 'react'
import '../App.css'
export default function Navbar() {
  return (
    <>
    <nav>
        <div className="nav-center">
            <h4>Color Changer</h4>
            <ul className='nav-links'>
                <li>
                    <a href="#">Simple</a>
                </li>
                <li>
                    <a href="#">Hex</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
    )
}
