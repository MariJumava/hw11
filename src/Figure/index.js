import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const Figure = () => {
    const { form, color } = useParams()
    

    return (
        <div className='wrap'>
            { form === 'square' && <div className='square' style={{background: `${color}`}}> Square </div> }
            { form === 'circle' && <div className='circle' style={{background: `${color}`}}> Circle </div> }
        </div>
    )
}


export default Figure;