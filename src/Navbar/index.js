
import React from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import './index.css';

const Navbar = () => {

    const types = ['square', 'cirle'];  
    const colors = ['red', 'gray', 'blue', 'cyan', 'yellow', 'orange'];

    const { form, color } = useParams();

    const changeColor = () => {
        if(!color) {
            return 'red'
        } else return color
    }

    return (
        <div> 
            <div className='type-wrap'>
                {types.map((item) => 
                <Link key={item} to={`/figure/${item}/${changeColor()}`}>
                    <div className='type'> {item} </div>
                </Link>)}
            </div>

            <div className='color-wrap'>
                {colors.map((item) =>
                <Link key={item} to={`/figure/${form}/${item}`}>
                    <div className='color'> {item} </div>
                </Link>)}
            </div>
        </div>
    )

}

export default Navbar;