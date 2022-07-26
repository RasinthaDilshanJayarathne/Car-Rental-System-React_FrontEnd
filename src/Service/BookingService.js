import axios from "../axios";

class BookingService {
    fetchBooking = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('rent')
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

export default new BookingService();