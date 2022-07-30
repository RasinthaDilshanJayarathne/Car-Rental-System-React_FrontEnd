import axios from "../axios";

class VehicleService {
    postVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchVehicle = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putVehicle = async (data) => {
         const promise = new Promise((resolve, reject) => {
            axios.put('vehicle', data)
            .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };
    
    deleteVehicle = async (params) => {
         const promise = new Promise((resolve, reject) => {
            axios.delete('vehicle', {params: params})
            .then((res) => {
                return resolve(res)
            }) 
            .catch((err) => {
                return resolve(err)
            })
         })
         return await promise;
    };

    addCarImage = async (data,carId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle/addCarImage?carId='+carId,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    getCarImage = async (carId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('vehicle/getCarImage?carId='+carId+'&view='+view, {
                responseType: 'blob',
            })
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    updateCarImage =async (data,carId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.post('vehicle/updateCarImage?carId='+carId+'&view='+view,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    deleteCarImages =async (carId) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('vehicle/deleteCarImage?vehicleId='+carId)

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
export default new VehicleService();