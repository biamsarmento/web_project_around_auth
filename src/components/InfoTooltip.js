import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function InfoTooltip() {

    const isOpen = false;

    function isItOpen(isOpen) {
        if (isOpen) {
            return 'profile-popup profile-popup_opened';
        } else {
            return 'profile-popup'
        }
    }

    function closePopup() {
        console.log("Fechando Popup")

    }
    

    return (
        // <section className={`profile-popup ${isOpen ? 'profile-popup_opened' : ''}`} id='extra-popup'>
        <section className={isItOpen(isOpen)} id='extra-popup'>
            <div className='profile-popup__container'>
                <button className='profile-popup__close-button' onClick={closePopup}></button>
                <h2 className='profile-popup__title'>Login realizado com Sucesso!</h2>
                {/* <form className={`${props.name}__form form`} name={props.name} noValidate>
                <fieldset className="form__fieldset"> */}
                    {/* {props.children} */}
                {/* </fieldset>
                </form> */}
            </div>
        </section>
    )
}

export default InfoTooltip;

