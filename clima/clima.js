const axios = require('axios');

const getClima = async (lat, lng) => {
    
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f88eb337652a06f0715c96e29b2a29d1`);

    return resp.data.main.temp;
}

module.exports = {
    getClima,
}