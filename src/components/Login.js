import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PopupWithForm from "./PopupWithForm";
import InfoTooltip from "./InfoTooltip";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from "./Header";


function Login({handleLogin}) {

    const { isLoggedIn } = useContext(CurrentUserContext);

    // function handleSubmit() {
    //     console.log("Usuário Registrado!");
    //     return (
    //         <InfoTooltip></InfoTooltip>
    //     )
    // }

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(data);
    };

    return (
        <>
        <Header></Header>
        <section className="login" id="login">
            <h1 className="login__title">Entrar</h1>
            <div className="login__form">
                <form className="login__form form" name="login__form" id="login__form" onSubmit={handleSubmit}>
                <fieldset className="form__fieldset">
                    <input 
                    type="email" 
                    className="form__input form__input_type_email" 
                    id="email" 
                    name="email"
                    minLength="2" 
                    maxLength="40" 
                    placeholder="E-mail"
                    value={data.email} 
                    onChange={handleChange} 
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
                    value={data.password} 
                    onChange={handleChange} 
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
            <InfoTooltip></InfoTooltip>
        </section>
        </>
    )
}

export default Login;