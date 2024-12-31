import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import xisVermelho from '../images/xis_vermelho.png';
import checkPreto from '../images/check_preto.png';


function InfoTooltip({isLoginPopupOpen, onClose}) {
    
    const { isLoggedIn } = useContext(CurrentUserContext);

    function closePopup() {
        console.log("Fechando Popup");
        onClose();
    }
    
    function renderPopup() {
        if(isLoginPopupOpen) {
            console.log("isloggedIn?", isLoggedIn);
            if(!isLoggedIn) {

                return (
                    <div className='extra-popup__container'>
                        <img className='extra-popup__image' src={checkPreto} alt="Um simbolo de sucesso preto"></img>
                        <h2 className='profile-popup__title extra-popup_title'>Usuário não encontrado, realize o seu cadastro</h2>
                    </div> 
                )
            } else {
                return (
                    <div className='extra-popup__container'>
                        <img className='extra-popup__image' src={xisVermelho} alt="Um simbolo de fracasso vermelho"></img>
                        <h2 className='profile-popup__title extra-popup_title'>Ops, algo saiu deu errado! Por favor, tente novamente.</h2>
                    </div>
                )
            }   
        } else {
            return 
        }
    }

    return (
        <section className={`profile-popup ${isLoginPopupOpen ? 'profile-popup_opened' : ''}`} id='extra-popup'>
            <div className='profile-popup__container'>
                <button className='profile-popup__close-button' onClick={closePopup}></button>
                {isLoginPopupOpen && renderPopup()}
            </div>
        </section>
    )
}

export default InfoTooltip;

