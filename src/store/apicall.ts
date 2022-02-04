import { writable } from "svelte/store";

export const apiData = writable([])
const fetchApi = async () =>{
    const url = `https://jsonplaceholder.ir/users`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedData = data?.map((data,index) =>{
        return{
            data: data,
        }

    });
    apiData.set(loadedData);
    
};
fetchApi();