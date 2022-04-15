import axios from "axios";


export const instance = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com',
    baseURL:'http://ec2-3-232-242-150.compute-1.amazonaws.com:9090',
    headers: {"Content-Type": "application/json", 
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With",
    "X-AUTH-KEY" : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcm9udGRldkBnbWFpbC5jb20iLCJleHAiOjE2NDk4NTk1NTUsImlhdCI6MTY0OTg1NTk1NX0.ka0DT-_ktpZ2IlIVQSFFordaKMHLnUGjS58RpI1j034bQwu8fA_TXBG-r9JkuXJzCqGsym_La9n8YQU7y4Ss8A"
  },

  
  });  