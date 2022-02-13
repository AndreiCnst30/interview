import React, { useState } from "react";
import { Redirect } from "react-router-dom"

const Login =() => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState(null)

    function handleChangeUser(event) {
        setUser(event.target.value);
    }

    function handleChangePwd(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        if (user != "test" || password != "asd") {
            alert('Wrong user&pass combination');
        }
        else {
            fetch("/api/ping").then((response) => {
                if (response.status != 200) {
                    alert('Database is down');
                } else {
                    setState("/menu");
                }
            });
        }

        event.preventDefault();
    }

    if (state) {
        return <Redirect to = {state} />
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    User:
                    <input type="text" value={user} onChange={handleChangeUser} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handleChangePwd} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>

    );

}

export default Login;