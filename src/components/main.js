import React from 'react'
import '../App.css'
export default function MainCom(props){
  
    return(
        <>
        <main>
            <div className="container">
                <h2>Background color : <span className='color'>{props.color}</span></h2>
        <button className='btn btn-hero' id='btn'>
            Click me
        </button>
            </div>
        </main>
        </>
    )
}