import '../css/login.css';
import '../css/melvin.css';
import LoginImg from '../img/undraw_login_re_4vu2.svg';

const LoginPage = () => {
    return ( 
        <div className="container" id="login-panel">
      <div className="row">
        <div className="col-md-6" id="login-image">
          <img src={LoginImg} alt="" />
        </div>
        <div className="col-md-6 blueContainer">
          <h1 className="text-light text-center my-5">A2s Talent Login</h1>
            <div className="d-flex flex-column">          
              <input type="email" id="e" placeholder="email" />
              <br />
              <input type="password" id="pw" placeholder="password" />
              <div id="Remember">
              <span><input type="checkbox" id="rem" /><label for="rem" className="text-light ms-1">Remember me</label></span>
              <a href="#" className="jobs-link">forgot?</a>
            </div>
          </div>

          <button type="button" id="loginbtn" >login</button>
          <p className="text-light">New User? <a className="jobs-link ms-2" href="#">Create an account for FREE!</a></p>



        </div>
      </div>
    </div>
     );
}
 
export default LoginPage;