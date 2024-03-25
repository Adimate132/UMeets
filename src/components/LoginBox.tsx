import './LoginBox.css'
export default function LoginBox() {
    return (
        <>
            <form className="loginBox">
                <h1> Login </h1>
                <input type="text" id="username-field" placeholder='Username'/><br/>
                <input type="text" id="password-field" placeholder='Password'/><br/>
                <button type="submit"> Login </button>
                <p>No account? <a>Sign up!</a></p>
            </form>
        </>
    )
}