import React from 'react';

import whatssapIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/26096036?s=460&u=646df6230922902d6e60ff5a4f0a6db98a63e7a0&v=4" alt="Marcelo Kochiyama"/>
        <div>
          <strong>Marcelo Haruo Kochiyama</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Amo passar conhecimento das maneiras mais lógicas e compreensiveis possível.
        <br /><br />
        Mais de 300.000 alunos alavancados.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatssapIcon} alt="Whatssap"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;