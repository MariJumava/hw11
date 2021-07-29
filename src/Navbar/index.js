
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './index.css';

const Navbar = () => {

    const types = ['square', 'cirle'];  
    const colors = ['red', 'gray', 'blue', 'cyan', 'yellow', 'orange'];

    const [selectedType, setSelectedType] = useState(1)
    const getSelectedType = (item) => {
        setSelectedType(item)
    }

    const [selectedColor, setSelectedColor] = useState('red')
    const getSelectedColor = (item) => {
        setSelectedColor(item)
    }

    return (
        <div> 
            <div className='type-wrap'>
                {types.map((item) => 
                <Link key={item} to={`/figure/${item}/${selectedColor}`}>
                    <div className='type' onClick={() => getSelectedType(item)}> {item} </div>
                </Link>)}
            </div>

            <div className='color-wrap'>
                {colors.map((item) =>
                <Link key={item} to={`/figure/${selectedType}/${item}`}>
                    <div className='color' onClick={() => getSelectedColor(item)}> {item} </div>
                </Link>)}
            </div>
        </div>
    )

}

export default Navbar;