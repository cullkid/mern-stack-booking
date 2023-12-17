import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <form className="register">
        <div className="formGroup">
          <label className="formLabel">First name</label>
          <input className="formField" type="text" placeholder="First name" />
        </div>

        <div className="formGroup">
          <label className="formLabel">Last name</label>
          <input className="formField" type="text" placeholder="Last name" />
        </div>

        <div className="formGroup">
          <label className="formLabel">Email</label>
          <input className="formField" type="text" placeholder="Email" />
        </div>

        <div className="formGroup">
          <label className="formLabel">Choose password</label>
          <input
            className="formField"
            type="password"
            placeholder="Choose password"
          />
        </div>

        <div className="formGroup">
          <label className="formLabel">Confirm Password</label>
          <input
            className="formField"
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <div className="formGroup">
          <input className="formBtn" type="submit" value="Register" />
        </div>

        <footer>
          Already have an account?{" "}
          <Link className="registerBtn" to="/login">
            Login
          </Link>
        </footer>
      </form>
    </>
  );
}
