import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form className="login">
        <div className="formGroup">
          <label className="formLabel">Email</label>
          <input className="formField" type="text" placeholder="Email" />
        </div>

        <div className="formGroup">
          <label className="formLabel">Password</label>
          <input
            className="formField"
            type="password"
            placeholder="Choose password"
          />
        </div>

        <div className="formGroup">
          <input className="formBtn" type="submit" value="login" />
        </div>

        <footer>
          Do not have an account?
          <Link className="loginBtn" to="/register">
            Rgister
          </Link>
        </footer>
      </form>
    </>
  );
}
