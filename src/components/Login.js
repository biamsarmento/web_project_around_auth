import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from "./Header";


function Login() {

    const { isLoggedIn } = useContext(CurrentUserContext);

    function handleSubmit() {
        console.log("Usuário Registrado!");
    }

    return (
        <>
        <Header></Header>
        <section className="login" id="login">
            <h1 className="login__title">Entrar</h1>
            <div className="login__form">
                <form className="login__form form" name="login__form" id="login__form" onSubmit={handleSubmit}>
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
                    <button type="submit" className="form__submit-button__login">Entrar</button>
                </fieldset>
                </form>
            </div>
            <div className="login__register-button">
                <Link to="/signup" className="login__register-button_link">
                    Ainda não é membro? Inscreva-se aqui!
                </Link>
            </div>
        </section>
        </>
    )
}

export default Login;