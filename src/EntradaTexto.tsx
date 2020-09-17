import React, { ChangeEvent, useState } from 'react';

import {appSocket} from './appSocket'

export default function EntradaTexto() {
  const [message, setMessage] = useState("");

  function handleChange(element : ChangeEvent<HTMLTextAreaElement>) {
    const text = element.currentTarget.value;
    console.log(text);
    setMessage(text);
  }

  function handleClick(){
    console.log('Botão foi clicado!');

    appSocket.emit('nova-mensagem', {
      nome: 'Felipe Monteiro',
      mensagem: message,
    })

    setMessage('');
  }
  return (
    <div>
      <textarea onChange={handleChange} value={message}/>
      <div>
        <button onClick={handleClick}>Enviar</button>
      </div>
    </div>
  );
}