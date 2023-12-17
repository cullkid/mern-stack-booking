import Header from "../../components/header/Header";
import Login from "../../components/login/Login";
import Navbar from "../../components/navBar/Navbar";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <Login />
    </div>
  );
};

export default LoginPage;
