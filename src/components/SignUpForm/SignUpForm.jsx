import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './SignUpForm.scss';
import useSignUp from '../../hooks/SignUpHook.js';

const SignUpForm = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUp } = useSignUp();
  
  const onSubmit = data => {
    localStorage.setItem("email", data.email);
    const {
      email,
      confirmemail,
      password,
      confirmpassword
    } = data;
    console.log(data);

    if (email === confirmemail && password === confirmpassword){
        signUp(email, password);
    }
    else {
          console.log("error password or email is not the same");
    }
  };


  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const [values1, setValues1] = useState({
    password1: '',
    showPassword: false,
  });
      
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
    setValues1({
      ...values1,
      showPassword: !values.showPassword,
    });
  };
      
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
          
        return ( 
          <main  className="login_block">
              <h1 className="page_title">Sign Up Form</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
              <div className="input_container">
                    <label className="input_label">Email Address</label>
                    <input
                    type="email"
                    className="input_field"
                    placeholder='Enter your email'
                    name='email'
                    {...register("email",
                    {  required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })}
                    />
                    <i className="fas fa-envelope fa-lg"></i>
                {errors.email?.type === 'required' && <span>Email is required</span>}
                </div>
                <div className="input_container">
                    <label className="input_label">Email Address</label>
                    <input type="email"  className="input_field" placeholder='Enter your email' name='email' {...register("confirmemail", {  required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })}/>
                    <i className="fas fa-envelope fa-lg"></i>
                {errors.email?.type === 'required' && <span>Email is required</span>}
                </div>
                <div className="input_container">
                        <label className="input_label">Password</label>
                        <input type={values.showPassword ? 'text' : 'password'}  className="input_field" placeholder='Enter your password' name='password' {...register("password", {  required: true })}/>
                        <i className="fas fa-lock fa-lg"></i>
                        <div onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} className="visibility_icon">
                          {values.showPassword ? <i class="fas fa-eye-slash"></i> : <i class="fas fa-eye"></i>}
                        </div>
                {errors.password?.type === 'required' && <span>This field is required</span>}
                </div>
                <div className="input_container">
                      <label className="input_label">Confirm Password</label>
                      <input type={values.showPassword ? 'text' : 'password'}  className="input_field" placeholder='Enter your password' name='password' {...register("confirmpassword", {  required: true, pattern: /^[A-Za-z]+$/i })}/>
                      <i className="fas fa-lock fa-lg"></i>
                      <div onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} className="visibility_icon">
                        {values.showPassword ? <i class="fas fa-eye-slash"></i> : <i class="fas fa-eye"></i>}
                      </div>
                {errors.password?.type === 'required' && <span>Please Confirm Your Password</span>}
                </div>
                  <button type="submit" className="singin_button">Continue</button>
            </form>
        </main>
        );
}
 
export default SignUpForm;