import React from "react";
import PropTypes from "prop-types";

function SimpleComponent({ onLogin, onLogout, isAuth }) {
    return !isAuth ? (
        <button onClick={onLogin}>Войти</button>
    ) : (
        <button onClick={onLogout}>Выйти из системы</button>
    );
}

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;
