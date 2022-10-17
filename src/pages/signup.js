import signupImg from '../img/jobseeker-sign-up-form.svg';
import '../css/melvin.css';
import '../css/login.css';
// import  SignupTalent  from './img/signup-talent-seeker.png';
// import SignUp from './pages/signup';


const SignUp = () => {
    return ( 
        
        <div className="container">
        <h1 className="text-center">Create your A2S jobseeker account</h1>
        <div className="row mt-5">
          <div className="col-md-6 blueContainer">
            <h2 className="text-center mt-5 text-light">Find your dream job.</h2>
            <h2 className="text-center text-light">Sign up NOW!</h2>
            <br /><br />
            <form action="">
              <input 
                className="form-control"
                type="text"
                required
                id="fName"
                placeholder="First Name"
              />
              <br />
              <input 
                className="form-control"
                type="text"
                required
                id="lName"
                placeholder="Last Name"
              />
              <br />
              <input 
                className="form-control"
                type="email"
                required
                id="email"
                placeholder="Email address"
              />
              <br />
              <input 
                className="form-control"
                type="password"
                required
                id="password"
                placeholder="Enter password"
              />
              <br />
              <input 
                className="form-control"
                type="password"
                required
                id="password2"
                placeholder="Confirm password"
              />
            </form>
            <br />
            <div className="d-flex justify-content-center">
                <button className="greenbutton">Create account</button>
            </div>
          </div>
          <div className="col-md-6">
              <img className="img-fluid" src={signupImg} alt="" />
          </div>
        </div>

      </div>

     );
}
 
export default SignUp;