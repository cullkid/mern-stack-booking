import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/Navbar";
import Register from "../../components/register/Register";
import "./registerPage.css";

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <Register />
    </div>
  );
};

export default RegisterPage;
