import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};
type LoginResponse = {
    status: boolean,
    user: SignUpFormData
  }

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<SignUpFormData> = async(data) => {
    try {
        const response = await axios.post<LoginResponse>("http://127.0.0.1:4000/auth/signup", data);
        if(response?.status && response?.data?.user){
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }

  };

  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
        <h4 className="mt-5">Sign up and start learning</h4>
        <hr/>
          <div className="card mt-3">
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="mb-3">
                  <div className="input-group mb-3">
                  <input
                type="text"
                placeholder="Full Name"
                className={`form-control border-dark rounded-0 ${errors.name ? "is-invalid" : ""}`}
                id="name"
                {...register("name", { required: 'Name is required' })}
              />
                  </div>
                  {errors.name && <div className="text-danger">{errors.name.message}</div>}
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                  <input
                type="email"
                placeholder="Email"
                className={`form-control border-dark rounded-0 ${errors.email ? "is-invalid" : ""}`}
                id="email"
                {...register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format.',
                  },
                })}
              />
                  </div>
                  {errors.email && <div className="text-danger">{errors.email.message}</div>}
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                  <input
                type="password"
                placeholder="Password"
                className={`form-control border-dark rounded-0 ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                {...register('password', {
                  required: 'Password is required.',
                  // pattern: {
                  //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  //   message:
                  //     'Password must contain at least one numeric character and one alphanumeric character.',
                  // },
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long.',
                  },
                })}
              />
               </div>
                  {errors.password && <div className="text-danger">{errors.password.message}</div>}
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary rounded-0" style={{ backgroundColor: "#8b3dff" }}>
                    Sign Up
                  </button>
                </div>
              </form>
              <p className="text-center mt-2" style={{fontSize: "0.8rem"}}>
              <span className="text-sm">By signing up, you agree to our <a className="link-dark">Terms of use</a> and <a className="link-dark">Privacy policy</a></span>
              </p>
              <hr/>
              <div className="text-center mt-2">
              <span>Already have an Account?  </span>
                <Link to="/" className="fw-bold" style={{ color: "#8b3dff" }}>
                    Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
