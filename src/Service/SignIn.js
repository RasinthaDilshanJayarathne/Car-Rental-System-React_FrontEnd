import axios from "../axios";

class SignIn{
    fetchUser = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('signin')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
}

export default new SignIn();