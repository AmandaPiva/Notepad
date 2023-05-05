import './Notepad.css';
import React from 'react';
import { formatRelative} from 'date-fns'; //importando pacotes de formatação de datas

//Meu componente
const Notepad = (props) => (
    <div className='Comp'>
        <div className='titulo'>{props.titulo}</div>
        <p className="notaEscritas">{props.children}</p>
        <p className='data'>{formatRelative(props.data, new Date())}</p>
        <button onClick={props.onRemove} className='excluir'>&times;</button>
    </div>
);

export default Notepad; //exportando o componente