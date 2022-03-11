import React from 'react'
import './Button.css'

export default props => {
    return (
        <button 
            onClick={e => props.click()}
            className='button'>
            {props.label}
        </button>
    )
}


   