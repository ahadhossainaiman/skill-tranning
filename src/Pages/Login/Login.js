import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contex/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const Login = () => {
    const {googleSignIn,signInUser} = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname; //!important

    const handleGoogleSignIn = () =>{
        googleSignIn(googleAuthProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
            toast.error(`${error.message}`);
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            form.reset();
            if(user.emailVerified){
              navigate(from,{replace:true});
            }
            else{
              toast.error('Your email is not verified');
            }
        })
        .catch(error=>{
            console.error(error.message);
            toast.error(`${error.message}`);
        })


    }
  return (
    <div className="hero min-h-screen">
      <div className="">
        <div className="lg:text-center ">
          <h1 className="text-5xl font-bold py-6">Please Login now!</h1>
        </div>
        <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body max-sm:mx-12">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Don't have any account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div class="divider">OR</div>
            <div className="form-control">
              <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
