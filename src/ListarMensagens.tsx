import React, { useEffect, useState } from 'react';

import {appSocket} from './appSocket';

interface MensagemPayload {
  nome: string;
  mensagem: string;
}

export default function ListarMensagens(){
  const [mensagens, setMensagens] = useState<MensagemPayload[]>([{ nome: 'Felipe Monteiro', mensagem: 'Teste'}]);

  useEffect(() => {
    appSocket.on('mensagens', (mensagens: MensagemPayload[]) => {
      setMensagens(mensagens);
    })
  }, [mensagens]);

  return(
    <>
    <h3>Mensagens</h3>
    <ul>
      {mensagens.map(mensagem => (
        <li>
          <p>
            {mensagem.mensagem} - 
            <small>
              <i>{mensagem.nome}</i>
            </small>
          </p>
        </li>
      ))}
    </ul>
    </>
  )
}