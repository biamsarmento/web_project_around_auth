import logo from '../images/Vector.svg';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { useContext } from 'react';

function Header() {

    const currentUser = useContext(CurrentUserContext);

    return (
        <header className="header">
            <div className="header__content">
            <nav className="nav">
                <a className="nav__logo-link" href="#">
                <img
                    src={logo}
                    alt="Logo Around The US"
                    className="nav__logo"
                /> 
                </a>
                <div className='nav__logged-in'>
                    <p className='nav__logged-in__email'>{currentUser.currentUser.name}</p>
                    <p className='nav__logged-in__sair'>Sair</p>
                </div>
            </nav>
            <div className="header__line"></div>
            </div>
        </header>
    )
}

export default Header;