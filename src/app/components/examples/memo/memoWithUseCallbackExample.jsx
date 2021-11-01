import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button onClick={onLogOut} className="btn btn-primary">
            LogOut
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    return prevState.onLogOut === nextState.onLogOut;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                onClick={() => setState(!state)}
                className="btn btn-primary"
            >
                initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />;
        </>
    );
};

export default MemoWithUseCallbackExample;
