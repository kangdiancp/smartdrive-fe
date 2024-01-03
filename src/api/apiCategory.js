import axios from "axios"
import config from '../config/config'

const list = async()=>{
    try {
        const result = await axios.get(`${config.smartdrive}/category`);
        return result.data;
    } catch (error) {
        return await error.message
    }
}


const createRow = async(payload)=>{
    try {
        const result = await axios.post(`${config.smartdrive}/category`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}

const findRow = async(id)=>{
    try {
        const result = await axios.get(`${config.smartdrive}/category/${id}`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const findRowByDesc = async(name)=>{
    try {
        const result = await axios.get(`${config.smartdrive}/category/search?description=${name}`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const updateRow = async(payload)=>{
    try {
        const result = await axios.put(`${config.smartdrive}/category/${payload.categoryId}`,
        payload);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.smartdrive}/category/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
}



export default {
    list,
    createRow,
    findRow,
    updateRow,
    deleteRow,
    findRowByDesc
}