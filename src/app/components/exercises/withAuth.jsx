import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withAuth = (Component) => (props) => {
    const [isLogin, setIsLogin] = useState();
    const handleAuth = () => {
        localStorage.setItem("user", "true");
        setIsLogin(localStorage.getItem("user"));
    };
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLogin(localStorage.getItem("user"));
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isLogin}
                onLogin={handleAuth}
                onLogout={handleLogout}
            />
        </CardWrapper>
    );
};

export default withAuth;
