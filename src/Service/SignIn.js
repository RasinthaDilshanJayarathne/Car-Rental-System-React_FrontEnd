import axios from "../axios";

class SignIn{
    fetchUser = async (params) => {
        
        const promise = new Promise((resolve, reject) => {
            axios.get('signin',{params:params})    
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }
}

export default new SignIn();