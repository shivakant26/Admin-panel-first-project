import { instance } from "./axiosConfig";
const baseURL = "https://jsonplaceholder.typicode.com"

export const ApiData = async ({ apiMethod, endPoints }) => {
    var response;
    return  response = await instance[apiMethod](endPoints)
}