import React from 'react'
import { CardData } from '../component/HomeData'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (id)=>{
    navigate(`/card-detail/${id}`)
  }
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div className="min-w-[20%] flex justify-center items-center z-40">
          <h1 className='underline text-4xl font-[italic] font-bold'>NEW <br /> ARRIVALS</h1>
        </div>
        <div className="w-full h-screen overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar flex">
          <div className="flex gap-4 p-5">
            {
              CardData.map((item) => {
                return (
                  <div className="min-w-[38%] cursor-pointer" onClick={()=>handleNavigation(item.id)}>
                    <div className=' relative mb-1'>
                      <img src={item.image1} alt="" className='w-full rounded' />
                      <div className=' absolute bottom-2 right-2 text-3xl bg-white text-black p-2 rounded-full'>
                        <TbShoppingBagPlus />
                      </div>
                    </div>
                    <p className='text-sm text-gray-600'>{item.title}</p>
                    <h2 className='font-bold'>Rs. {item.price}</h2>
                  </div>
                )
              })
            }
            <div className="min-w-[40%] flex justify-center items-center z-40">
              <h1 className='underline text-3xl font-[italic]  text-center'>VIEW ALL <br /> 88 <br /> ARTICLES</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home