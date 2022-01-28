import axios from 'axios';
import useAxiosErrors from '../utils/AxiosErrors.js';


const SignUpApi = async (email, password) => {
        
        try{
                const response = await axios.post('http://167.71.80.171:4010/api/v1/auth/user/sign-up', {email, password});
                console.log(response, "from api");
                return  response; 
                             
        }
        catch (error){
                throw useAxiosErrors(error);
        }
}


export default SignUpApi;