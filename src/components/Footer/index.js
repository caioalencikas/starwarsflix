import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo-footer.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/caioalencikas">
        <img src={Logo} alt="Logo Star Wars" />
      </a>
      <p>
        May the force be with you. By
        {' '}
        <a href="https://www.linkedin.com/in/caioalencikas/">
          Caio Alencikas
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
