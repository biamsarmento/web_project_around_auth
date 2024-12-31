import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentUserContext from '../contexts/CurrentUserContext';
import xisVermelho from '../images/xis_vermelho.png';
import checkPreto from '../images/check_preto.png';


function InfoTooltip({isOpen, onClose}) {

    // const [isOpen, setIsOpen] = useState(false);
    
    const { isLoginSuccess, setIsLoginSuccess, isLoggedIn } = useContext(CurrentUserContext);
    // console.log(isOpen);

    // if (isLoginSuccess) {
    //     setIsOpen(true);
    // }

    // function openWhichPopup(isLoginSuccess) {
    //     if (isLoginSuccess) {
    //         // return 'profile-popup profile-popup_opened';
    //         return (

    //         )
    //     } else {
    //         return 'profile-popup'
    //     }
    // }

    function closePopup() {
        console.log("Fechando Popup");
        // setIsOpen(false);
        // setIsLoginSuccess(false);
        onClose();
        // const redirectPath = location.state?.from?.pathname || "/";
        // navigate(redirectPath);
    }
    
    function renderPopup() {
        console.log("isloggedIn?", isLoggedIn);
        if(isLoggedIn) {
            return (
                <div className='extra-popup__container'>
                    <img className='extra-popup__image' src={checkPreto} alt="Um simbolo de sucesso preto"></img>
                    <h2 className='profile-popup__title extra-popup_title'>Operação realizada com Sucesso!</h2>
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
    }

    return (
        <section className={`profile-popup ${isOpen ? 'profile-popup_opened' : ''}`} id='extra-popup'>
        {/* <section className={openPopup(isLoginSuccess)} id='extra-popup'> */}
            <div className='profile-popup__container'>
                <button className='profile-popup__close-button' onClick={closePopup}></button>
                {renderPopup()}
                {/* <div className='extra-popup__container'>
                    <img className='extra-popup__image' src={checkPreto} alt="Um simbolo de sucesso preto"></img>
                    <h2 className='profile-popup__title extra-popup_title'>Operação realizada com Sucesso!</h2>
                </div> */}
                {/* <div className='extra-popup__container'>
                    <img className='extra-popup__image' src={xisVermelho} alt="Um simbolo de fracasso vermelho"></img>
                    <h2 className='profile-popup__title extra-popup_title'>Ops, algo saiu deu errado! Por favor, tente novamente.</h2>
                </div> */}
            </div>
        </section>
    )
}

export default InfoTooltip;

