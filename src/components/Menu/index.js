
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logosw2.png';
import './Menu.css';
import Button from '../Button';
import { MenuWrapper, LogoImage } from './style';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage className="Logo" src={Logo} alt="AluraFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
      </Button>
        </MenuWrapper>
    );
}

export default Menu;