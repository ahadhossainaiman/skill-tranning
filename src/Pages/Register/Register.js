import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contex/AuthProvider/AuthProvider";


const Register = () => {
    const {createSignInUser} = useContext(AuthContext);
    const handleCreteSignIn = (event)=>{
      event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createSignInUser(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          form.reset();
          
        })
        .catch(error=>{
          console.error(error);
        })

    }
  return (
    <div className="hero min-h-screen">
      <div className="">
        <div className="lg:text-center ">
          <h1 className="text-5xl font-bold py-6">Please Login now!</h1>
        </div>
        <form onSubmit={handleCreteSignIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body max-sm:mx-12">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name='photoURL'
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already Have and account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div class="divider">OR</div> 
            <div className="form-control">
              <button className="btn btn-primary">Google</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
