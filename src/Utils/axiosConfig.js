import axios from "axios";


export const instance = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com',
    baseURL:'http://ec2-3-232-242-150.compute-1.amazonaws.com:9090',
    headers: {
      "Content-Type" : "application/json", 
      "Access-Control-Allow-Origin" : '*',
      "X-AUTH-KEY" : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcm9udGRldkBnbWFpbC5jb20iLCJleHAiOjE2NTAwMDY3NjksImlhdCI6MTY1MDAwMzE2OX0.PY2ktEKlhW22bUW6hYRqiOtyT8N0QoNHO2f3_o2TKjVs3pVHmcSX1rjqJndtsB9d3v_JudfQnqOsfANmoCFp-w"
  },

  
  });  