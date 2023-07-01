import React from "react";

const LoginForm = () => {
    return (
        <div id="login">
            <h3>Log In</h3>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Log In</button>
            </form>
        </div>
    );
}

export default LoginForm