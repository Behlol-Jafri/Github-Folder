import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardData, ViewCardData } from './HomeData'
import { useDataContext } from '../component/context'

const VeiwCard = () => {
  const { id, quantity } = useParams()
  // const cardData = CardData.find((item) => item.id === parseInt(id));
  const [veiwQuantity, setVeiwQuantity] = useState(parseInt(quantity))
  // const [data, setData] = useState(true)
  const [visible, setVisible] = useState('hidden')
  const navigate = useNavigate()
  const { onRemove } = useDataContext()
  return (
    <>
      <div className='p-5'>
        <h1 className='text-center text-3xl font-semibold'>SHOPPING CARD</h1>
        <hr className='border border-gray-400 mx-auto w-60 mt-1' />
      </div>
      {
        ViewCardData.length > 0 ? (
          <div>
            {
              ViewCardData.map((item) => {
                return (
                  <div className='border border-gray-400 mx-10 my-2 rounded-xl flex justify-between relative'>
                    <div className='w-1/3 py-5 px-25'>
                      <img src={item?.image1} alt="" className='w-full rounded-xl cursor-pointer' />
                    </div>
                    <div className='w-1/3 py-5 flex justify-between flex-col'>
                      <div>
                        <h1 className='text-xl font-semibold'>{item?.title}</h1>
                      </div>
                      <div>
                        <p className='text-gray-500'>{item?.id}</p>
                      </div>
                      <div>
                        <span className='border py-1 rounded-s-xl'>
                          {
                            veiwQuantity <= 1 ? (
                              <button className=' px-3 py-1 text-gray-400 text-2xl font-semibold cursor-not-allowed'>-</button>

                            )
                              :
                              (
                                <button className=' px-3 py-1 text-2xl font-semibold cursor-pointer' onClick={() => setVeiwQuantity(veiwQuantity - 1)}>-</button>
                              )
                          }
                        </span>
                        <span className=' px-7 py-1 border'>{item?.quantity}</span>
                        <span className='border py-1 rounded-e-xl'>
                          {
                            veiwQuantity >= 10 ? (
                              <button className=' px-3 py-1 text-gray-400 text-xl font-semibold cursor-not-allowed'>+</button>

                            )
                              :
                              (
                                <button className=' px-3 py-1 text-xl font-semibold cursor-pointer' onClick={() => setVeiwQuantity(veiwQuantity + 1)}>+</button>
                              )
                          }
                        </span>
                      </div>
                      <div>
                        <h2 className='font-semibold'>Total Item ({item?.quantity})</h2>
                      </div>
                    </div>
                    <div className='w-1/3 py-5 text-center flex justify-between flex-col'>
                      <div>
                        <h2 className='text-xl font-semibold'>Rs. {item?.price}</h2>
                      </div>
                      <div>
                        <button className='bg-red-600 text-white font-semibold py-2 px-4 rounded-xl cursor-pointer' onClick={() => setVisible('visible')}>Delete</button>
                      </div>
                      <div>
                        <h2 className='text-xl font-semibold'>Rs. {item?.price * item?.quantity}</h2>
                      </div>
                    </div>

                  </div>
                )
              })
            }
            <div className={`absolute top-1/4 left-1/3 p-5 bg-black text-white rounded-xl max-w-100 ${visible}`}>
              <h1 className='text-2xl font-semibold pb-5'>Are You Sure? You Delete These Items.</h1>
              <div className='flex justify-between items-center gap-3 pt-5 pb-3'>
                <button className='bg-gray-300 text-black rounded-xl font-semibold border-0 text-xl w-1/2 cursor-pointer outline-0 px-5 py-2' onClick={() => setVisible('hidden')}>Cancle</button>
                <button className='bg-black outline-0 border text-xl rounded-xl font-semibold w-1/2 px-5 py-2 cursor-pointer' onClick={() => {
                  // setData(false)
                  onRemove(veiwQuantity)
                }}>Confirm</button>
              </div>
            </div>
          </div>
        )
          :
          (
            <div className='w-1/2 mx-auto text-center mt-30'>
              <h1 className='text-5xl font-semibold'>Your cart is empty</h1>
              <button className='bg-black text-white text-xl font-semibold rounded-xl text-center my-10 px-7 py-3  cursor-pointer' onClick={() => navigate('/')}>Continue Shopping</button>
              <h1 className='text-4xl font-semibold'>Have an account?</h1>
            </div>
          )
      }
    </>
  )
}

export default VeiwCard