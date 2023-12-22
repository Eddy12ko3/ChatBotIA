const axios = require("axios");

const getUsers = async (celular) =>{
        try {
            const data = {
                celular: celular
            }
            const config = {
                method: "get",
                url: `http://localhost:5000/trabajadores/load/cellnumber`,
                data: data
            }
            
            console.log(config);
            const response = await axios(config);
            return response.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    };
  
module.exports = {getUsers}