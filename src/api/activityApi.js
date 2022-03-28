import axiosClient from "./axiosClient";

const activityApi = {
    getRandom: () => {
        const url = 'activity/';
        return axiosClient.get(url);
    },
    
}

export default activityApi;