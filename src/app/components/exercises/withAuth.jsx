import React from "react";
import CardWrapper from "../common/Card";

const withAuth = (Component) => (props) => {
    const isUser = localStorage.getItem("user");
    const handleAuth = () => {
        localStorage.setItem("user", "true");
    };
    const handleLogout = () => {
        localStorage.removeItem("user");
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isUser}
                onLogin={handleAuth}
                onLogout={handleLogout}
            />
        </CardWrapper>
    );
};

export default withAuth;
