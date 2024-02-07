import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'812aa52f0a6f4ee6a53269050412bf26'
        }
})