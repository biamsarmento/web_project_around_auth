import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from "./Header";

function Register() {

    const { isLoggedIn } = useContext(CurrentUserContext);

    function handleSubmit() {
        console.log("Usuário Registrado!");
    }

    return (
        <>
        <Header></Header>
        <section className="register" id="register">
            <h1 className="register__title">Inscrever-se</h1>
            <div className="register__form">
                <form className="register__form form" name="register__form" id="register__form" onSubmit={handleSubmit}>
                <fieldset className="form__fieldset">
                    <input 
                    type="url" 
                    className="form__input form__input_type_email" 
                    id="email" 
                    name="email"
                    minLength="2" 
                    maxLength="40" 
                    placeholder="E-mail"
                    // value={name} 
                    // onChange={handleNameChange} 
                    required />
                    <span className="form__input-error nome-error"></span>
                    <input 
                    type="password" 
                    className="form__input form__input_type_password" 
                    id="password" 
                    name="password" 
                    minLength="2" 
                    maxLength="200"
                    placeholder="Senha"
                    // value={description} 
                    // onChange={handleDescriptionChange} 
                    required />
                    <span className="form__input-error atividade-error"></span>
                    <button type="submit" className="form__submit-button__register">Inscrever-se</button>
                </fieldset>
                </form>
            </div>
            <div className="register__login-button">
                <Link to="/signin" className="register__login-button_link">
                    Já é um membro? Faça o login aqui!
                </Link>
            </div>
        </section>
        </>
    )
}

export default Register;