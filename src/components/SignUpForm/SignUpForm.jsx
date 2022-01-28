import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from '../../../styles/SignUpForm.module.scss'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useSignUp from '../../../hooks/SignUpHook';

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
          <main  className={styles.login_block}>
              <h1 className={styles.page_title}>First Step</h1>
              <h5 className={styles.title_span}>Personal Information</h5>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.LoginForm}>
              <div className={styles.input_container}>
                    <label className={styles.input_label}>Email Address</label>
                    <input
                    type="email"
                    className={styles.input_field}
                    placeholder='Enter your email'
                    name='email'
                    {...register("email",
                    {  required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })}
                    />
                    <i className="fas fa-envelope fa-lg"></i>
                {errors.email?.type === 'required' && <span>Email is required</span>}
                </div>
                <div className={styles.input_container}>
                    <label className={styles.input_label}>Email Address</label>
                    <input type="email"  className={styles.input_field} placeholder='Enter your email' name='email' {...register("email", {  required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })}/>
                    <i className="fas fa-envelope fa-lg"></i>
                {errors.email?.type === 'required' && <span>Email is required</span>}
                </div>
                <div className={styles.input_container}>
                        <label className={styles.input_label}>Password</label>
                        <input type={values.showPassword ? 'text' : 'password'}  className={styles.input_field} placeholder='Enter your password' name='password' {...register("password", {  required: true })}/>
                        <i className="fas fa-lock fa-lg"></i>
                        <div onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} className={styles.visibility_icon}>
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </div>
                {errors.password?.type === 'required' && <span>This field is required</span>}
                </div>
                <div className={styles.input_container}>
                      <label className={styles.input_label}>Confirm Password</label>
                      <input type={values.showPassword ? 'text' : 'password'}  className={styles.input_field} placeholder='Enter your password' name='password' {...register("confirmpassword", {  required: true, pattern: /^[A-Za-z]+$/i })}/>
                      <i className="fas fa-lock fa-lg"></i>
                      <div onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} className={styles.visibility_icon}>
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </div>
                {errors.password?.type === 'required' && <span>Please Confirm Your Password</span>}
                </div>
                  <button type="submit" className={styles.singin_button}>Continue</button>
            </form>
        </main>
        );
}
 
export default SignUpForm;