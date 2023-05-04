import './Notepad.css';
import React from 'react';

//Meu componente
const Notepad = (props) => (
    <div className='Comp'>
        <div className='titulo'>{props.titulo}</div>
        <p className="nota">{props.children}</p>
        <p>{props.data.toString()}</p>
        <button onClick={props.onRemove}>&times;</button>
    </div>
);

export default Notepad; //exportando o componente