import axios from "../axios";

class CustomerService {
    
    fetchCustomer = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('customer', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteCustomer = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('customer', { params: params })
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deletecustomerImages = async (id) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('customer/deleteCustomerImage?id=' + id)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    customerCount = async (count) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer/COUNT/count', { params: count })

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    fetchUser = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer',{params:params})    // 20s
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

 export default new CustomerService();