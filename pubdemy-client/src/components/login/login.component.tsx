import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { sagaActions } from "../../saga/sagaActions";
import { UserModel } from "../../models/user.model";
import { Link, useNavigate } from "react-router-dom";

type LoginFormValues = {
  email: string;
  password: string;
};



export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isAuthenticated = useSelector<RootState>(
    (store) => store.login.isUserAuthenticated
  );
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    if (isAuthenticated && token) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  const onSubmit = (data: LoginFormValues) => {
    dispatch({
      type: sagaActions.AUTHENTICATE_USER,
      payload: data,
    });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h4 className="mt-5">Log In to Your Pubdemy Account!</h4>
            <hr />
            <div className="card mt-3">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-grid gap-2 col-6 mx-auto mb-3 btn-block w-100">
                    <button type="button" className="btn shadow-sm border-secondary rounded-0 text-start">
                      <i className="fa-brands fa-facebook me-2 text-primary"></i> <span className="fw-bold">Continue with Facebook</span>
                    </button>
                    <button type="button" className="btn shadow-sm border-secondary rounded-0 text-start">
                      <i className="fa-brands fa-google me-2 text-danger"></i> <span className="fw-bold">Continue with Google</span>
                    </button>
                    <button className="btn shadow-sm border-secondary rounded-0 text-start" type="button">
                      <i className="fa-brands fa-apple me-2"></i><span className="fw-bold"> Continue with Apple</span>
                    </button>
                  </div>
                  <div className="mb-3">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-envelope"></i></span>
                      <input
                        type="text"
                        className={`form-control rounded-0 ${errors.email ? 'is-invalid' : ''}`}
                        id="login"
                        placeholder="Email"
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
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        className={`form-control rounded-0 ${errors.password ? 'is-invalid' : ''
                          }`}
                        id="password"
                        placeholder="Password"
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
                      <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              const passwordInput = document.getElementById("password");
              if (passwordInput) {
                const currentType = passwordInput.getAttribute("type");
                passwordInput.setAttribute(
                  "type",
                  currentType === "password" ? "text" : "password"
                );
              }
            }}
          >
            Show
          </button>
                    </div>
                    {errors.password && (
                      <div className="text-danger">{errors.password.message}</div>
                    )}
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary rounded-0" style={{ backgroundColor: "#8b3dff" }}>
                      Log In
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <span>Dont have an Account?  </span>
                  <Link to="/signup" className="fw-bold" style={{ color: "#8b3dff" }}>
                    Sign Up
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
