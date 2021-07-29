import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Figure = () => {
    const { form, color } = useParams()
    

    return (
        <div className='wrap'>
            <div className={form === '1' ? 'square' : 'circle'} style={{background: `${color}`}}> 
            {form === '2' ? 'CIRCLE' : 'SQUARE'} </div>
        </div>
    )
}


export default Figure;