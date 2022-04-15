import { instance } from "./axiosConfig";
// const baseURL = "http://ec2-3-232-242-150.compute-1.amazonaws.com:9090/user"

export const ApiData = async ({ apiMethod, endPoints }) => {
    var response;
    return  response = await instance[apiMethod](endPoints)
}