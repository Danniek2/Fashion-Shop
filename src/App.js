import logo from './logo.svg';
import './styles/login.css';
import './styles/register.css';
import './styles/forgot.css';
import LoginPage from './pages/Login';
import RegisterPage from './pages/register';
import ForgotPage from './pages/Forgot';

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      {/* <RegisterPage/> */}
      <ForgotPage/>
    </div>
  );
}

export default App;
