import './Notepad.css';
import React from 'react';

//Meu componente
const Notepad = (props) => (
    <div className='Comp'>
        <div>{props.titulo}</div>
        <p>{props.data.toString()}</p>
    </div>
);

export default Notepad; //exportando o componente