import axios from "../axios";

class DriverService {
    postDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('driver', data)  
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchDriver = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('driver')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putDriver = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('driver', data)
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
    
    deleteDriver = async (params) => {
         const promise = new Promise((resolve, reject) => {
            axios.delete('driver', {params: params})
            .then((res) => {
                return resolve(res)
            }) 
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };

    driverCount = async (count) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('driver/COUNT/count', { params: count })

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteDriverImages = async (id) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('driver/deleteDriverImage?id=' + id)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    fetchDriverData = async (paramsDriver) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('driver',{params:paramsDriver})
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
export default new DriverService();