import { createContext, useContext, useState } from "react";
import { ViewCardData } from "./HomeData";
import axios from "axios";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [category, setCategory] = useState([])
    const [categoryById, setCategoryById] = useState([])
    const [subCategoryById, setSubCategoryById] = useState([])
    const [secondSubCategoryById, setSecondSubCategoryById] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [secondSubCategory, setSecondSubCategory] = useState([])
    const [thirdSubCategory, setThirdSubCategory] = useState([])
     const categoryUrl = 'http://127.0.0.1:8000/api/category'
     const subCategoryUrl = 'http://127.0.0.1:8000/api/subCategory'
     const secondSubCategoryUrl = 'http://127.0.0.1:8000/api/secondSubCategory'
     const thirdSubCategoryUrl = 'http://127.0.0.1:8000/api/thirdSubCategory'
    const getCategory = async () =>{
        const response = await axios.get(categoryUrl);
        setCategory(response.data)
    }
    const getCategoryById = async (id) =>{
        const response = await axios.get(`${categoryUrl}/${id}`);
        setCategoryById(response.data)
    }
    const getSubCategory = async () =>{
        const response = await axios.get(subCategoryUrl);
        setSubCategory(response.data)
    }
     const getSubCategoryById = async (id) =>{
        const response = await axios.get(`${subCategoryUrl}/${id}`);
        setSubCategoryById(response.data)
    }
    const getSecondSubCategory = async () =>{
        const response = await axios.get(secondSubCategoryUrl);
        setSecondSubCategory(response.data)
    }
     const getSecondSubCategoryById = async (id) =>{
        const response = await axios.get(`${secondSubCategoryUrl}/${id}`);
        setSecondSubCategoryById(response.data)
    }
    const getThirdSubCategory = async () =>{
        const response = await axios.get(thirdSubCategoryUrl);
        setThirdSubCategory(response.data)
    }
   

    const [count, setCount] = useState(0)
    // const onAdd = (quantity)=>{
    //     setCount(count + quantity)
    // }
     const onRemove = (viewQuantity)=>{
        setCount(count - viewQuantity)
    }
    const onAdd = ()=>{
         ViewCardData.map((item)=>{
        setCount(count + item?.quantity)
    })
}
    return (
        <Context.Provider value={{count,onAdd,onRemove,getCategory,getSubCategory,category,subCategory,getCategoryById,categoryById,getSecondSubCategory,secondSubCategory,getSubCategoryById,subCategoryById,getSecondSubCategoryById,secondSubCategoryById,getThirdSubCategory,thirdSubCategory}}>
            {children}
        </Context.Provider>
    )
}

export const useDataContext = () => {
    return useContext(Context)
}