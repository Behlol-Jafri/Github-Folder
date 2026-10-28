import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDataContext } from './context'

const ThirdSubCategory = () => {
    const { id } = useParams()
    const { getSecondSubCategoryById, secondSubCategoryById, getThirdSubCategory, thirdSubCategory } = useDataContext()
    const navigate = useNavigate();

    useEffect(() => {
        getSecondSubCategoryById(id)
        getThirdSubCategory()
    }, [id])
    const filteredThirdSubCategory = thirdSubCategory.filter((item) => item?.second_sub_category_id === parseInt(id))
    return (
        <>
        <button className='bg-gray-200 border rounded-xl px-3 py-2 ms-3' onClick={()=>navigate(-1)}>Go Back</button>
            <h1 className='font-bold text-center text-2xl pt-3'>{secondSubCategoryById?.name}</h1>
            <div className="flex justify-center items-center flex-wrap  gap-20 mt-5 ">
                {
                    filteredThirdSubCategory?.map((item, index) => (
                        <>
                            <div className="flex flex-col justify-center items-center">
                                <div className="cursor-pointer">
                                    <img src={`http://127.0.0.1:8000/thirdsubcategories/${item?.image}`} alt="img" className='w-30 h-30 rounded-full my-2 object-cover' />
                                </div>
                                <div className="font-semibold">{item?.name}</div>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default ThirdSubCategory