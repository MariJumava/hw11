import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Figure = () => {
    const { form, color } = useParams()
    

    return (
        <div className='wrap'>
            <div className={form === 'square' ? 'square' : 'circle'} style={{background: `${color}`}}> 
            {form === 'square' ? 'SQUARE' : 'CIRCLE'} </div>
        </div>
    )
}


export default Figure;