import axios from "../axios";

class SignUpService{
    postSignUpCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('signup/customer', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    postSignUpDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('signup/driver', data)    // 20s
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

export default new SignUpService();