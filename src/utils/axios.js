const axios = require('axios');

const instance = axios.create({
    baseURL:"https://handyman-cms.herokuapp.com/api",
    // params: {
    //     APPID:process.env.APPID,
    //     units:'metric'
    // }
})

module.exports = instance;