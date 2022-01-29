import axios from 'axios';


const SignUpApi = async (email, password) => {
        
        
        try{
                const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/user/sign-up`, {email, password});
                console.log(response, "from api");
                return  response; 
                             
        }
        catch (error){
                console.log(error);
        }
}


export default SignUpApi;