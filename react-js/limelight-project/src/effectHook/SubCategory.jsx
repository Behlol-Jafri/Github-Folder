import React, { useEffect } from 'react'
import { useDataContext } from './context'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SubCategory = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const { getSubCategory, subCategory, getCategoryById, categoryById } = useDataContext()

    useEffect(() => {
        getCategoryById(id)
        getSubCategory()
    }, [id])
    const filteredSubCategory = subCategory.filter((item) => item?.category_id === parseInt(id))
    return (
        <>
        <button className='bg-gray-200 border rounded-xl px-3 py-2 ms-3' onClick={()=>navigate('/')}>Go Back</button>
            <h1 className='font-bold text-center text-2xl pt-3'>{categoryById?.name}</h1>
            <div className="flex justify-center items-center flex-wrap  gap-20 mt-5 ">
                {
                    filteredSubCategory?.map((item, index) => (
                        <>
                            <Link to={`/secondSubCategory/${item?.id}`} className="flex flex-col justify-center items-center">
                                <div className="cursor-pointer">
                                    <img src={`http://127.0.0.1:8000/subcategories/${item?.image}`} alt="img" className='w-30 h-30 rounded-full my-2 object-cover' />
                                </div>
                                <div className="font-semibold">{item?.name}</div>
                            </Link>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default SubCategory