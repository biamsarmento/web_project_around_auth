function Login() {
    return (
        <section className="login" id="login">
            <button className="profile__avatar_button" onClick={props.onEditAvatarClick}>
                <img src={editSign} alt="Edit Sign" className="profile__avatar_edit"></img>
                <img
                src={currentUser.avatar}
                alt="Avatar"
                className="profile__avatar"
                ></img>
            </button>
            <div className="profile__info">
                <h1 className="profile__info-title">{currentUser.name}</h1>
                <button className="profile__info-edit-button" onClick={props.onEditProfileClick}></button>
                <p className="profile__info-activity">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" onClick={props.onAddPlaceClick}></button>
        </section>
    )
}

export default Login;