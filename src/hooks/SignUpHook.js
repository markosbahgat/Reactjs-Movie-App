import React, { useState } from 'react';
import SignUpApi from '../api/signUpApi.js';
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
    let navigate = useNavigate();
    const [ error, setError ] = useState(null);
    const signUp = async (email, password) => {
            try{
                const data = await SignUpApi(email, password);
                const response = await data.data;
                localStorage.setItem("token", response.accessToken)
                localStorage.setItem("otp", response.user.otp)
                localStorage.setItem("id", response.user._id)
                localStorage.setItem("createdAt", response.user.createdAt)
                localStorage.setItem("userEmail", response.user.email)
                localStorage.setItem("userPassword", response.user.password)
                if (data.status === 201) {
                    navigate("/", { replace: true });
                }
                
                
            }
            catch (error){
                setError(error);
            }

        }
    return {
        signUp,
        error
    };
}
 
export default useSignUp;