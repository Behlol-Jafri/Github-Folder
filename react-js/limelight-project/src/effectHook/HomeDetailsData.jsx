import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardData, ViewCardData } from './HomeData';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useDataContext } from '../component/context';

const HomeDetailsData = () => { 
  const { id } = useParams();
  const navigate = useNavigate()
  const cardDetail = CardData.find((item) => item?.id === parseInt(id))
  const [image, setImage] = useState(cardDetail.image1);
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('hidden');
  const [disclaimer, setDisclaimer] = useState('hidden');
  const [addCard, setAddCard] = useState('hidden');
  const {onAdd} = useDataContext()
  const updatedCardDetail = {
    ...cardDetail,
    quantity : quantity,
  }
  return (
    <>
    <div className='flex justify-between items-center p-5 '>
      <p className='flex justify-start items-center'>Home <IoMdArrowDropdown className=' transform rotate-270' /> {cardDetail.title}</p>
      <button className='border-2 cursor-pointer border-gray-400 text-black bg-gray-300 outline-0 px-3 py-1 rounded-xl' onClick={()=>navigate('/')}>Go Back</button>
    </div>
      <div className='flex justify-between gap-5 p-3 relative'>
        <div className='w-[33%]'>
          <div className=' grid grid-cols-4 gap-2'>
            <div>
              <img src={cardDetail.image1} alt="" onClick={() => setImage(cardDetail.image1)} className='w-full rounded-xl cursor-pointer ' />
            </div>
            <div>
              <img src={cardDetail.image2} alt="" onClick={() => setImage(cardDetail.image2)} className='w-full rounded-xl cursor-pointer' />
            </div>
            <div>
              <img src={cardDetail.image3} alt="" onClick={() => setImage(cardDetail.image3)} className='w-full rounded-xl cursor-pointer' />
            </div>
            <div>
              <img src={cardDetail.image4} alt="" onClick={() => setImage(cardDetail.image4)} className='w-full rounded-xl cursor-pointer' />
            </div>
            <div>
              <img src={cardDetail.image5} alt="" onClick={() => setImage(cardDetail.image5)} className='w-full rounded-xl cursor-pointer' />
            </div>
            <div>
              <img src={cardDetail.image6} alt="" onClick={() => setImage(cardDetail.image6)} className='w-full rounded-xl cursor-pointer' />
            </div>
          </div>
          <h1 className='underline text-2xl font-semibold py-2'>Description</h1>
          <h2 className='text-xl font-semibold py-1'>Shirt</h2>
          <p className='text-xl text-gray-500 py-1'>{cardDetail.shirt}</p>
          <h2 className='text-xl font-semibold py-1'>Shawl</h2>
          <p className='text-xl text-gray-500 py-1'>{cardDetail.shawl}</p>
          <h2 className='text-xl font-semibold py-1'>Trouser</h2>
          <p className='text-xl text-gray-500 py-1'>{cardDetail.trouser}</p>
          <h2 className='text-xl font-semibold py-1'>Fabric: <span className='text-gray-500 font-light'>{cardDetail.fabric}</span></h2>
          <h2 className='text-xl font-semibold py-1'>Color: <span className='text-gray-500 font-light'>{cardDetail.color}</span></h2>
          <h2 className='text-xl font-semibold py-1'>Code: <span className='text-gray-500 font-light'>{cardDetail.id}</span></h2>
        </div>
        <div className='w-[33%]'>
          <img src={image} alt="" className='w-full h-full cursor-pointer rounded-xl' />
        </div>
        <div className='w-[33%]'>
          <p className='text-3xl'>{cardDetail.title}</p>
          <div className='flex justify-between items-center py-3'>
            <div className='text-xl font-semibold'>Rs. {cardDetail.price}</div>
            <div className='text-red-700 text-sm pe-3'>FREE DELIVERY</div>
          </div>
          <p className='font-semibold text-gray-500'>Quantity</p>
          <div className='py-1'>
        <span className='border py-1 rounded-s-xl'>
            {
              quantity <= 1 ? (
                <button className=' px-3 py-1 text-gray-400 text-2xl font-semibold cursor-not-allowed'>-</button>

              )
                :
                (
                  <button className=' px-3 py-1 text-2xl font-semibold cursor-pointer' onClick={() => setQuantity(quantity - 1)}>-</button>
                )
            }
            </span>
            <span className=' px-7 py-1 border'>{quantity}</span>
            <span className='border py-1 rounded-e-xl'>
             {
              quantity >=10 ? (
                <button className=' px-3 py-1 text-gray-400 text-xl font-semibold cursor-not-allowed'>+</button>

              )
                :
                (
                  <button className=' px-3 py-1 text-xl font-semibold cursor-pointer' onClick={() => setQuantity(quantity + 1)}>+</button>
                )
            }
          </span>
          </div>
          <button className='bg-black cursor-pointer text-white font-semibold text-center p-3 rounded-xl outline-0 border-0 block w-full mt-10 mb-5' onClick={()=>setAddCard('visible')}>ADD TO CART</button>
          <hr className='border border-gray-200' />
          <div className='flex justify-between items-center py-3'>
            <h2 className='text-xl font-semibold'>Care Instructions</h2>
            {
              instructions === 'hidden' ? (
                <IoMdArrowDropdown className=' cursor-pointer text-2xl text-gray-400' onClick={()=>setInstructions('visible')} />
              )
              :
              (
                <IoMdArrowDropdown className=' transform rotate-180 cursor-pointer text-2xl text-gray-400' onClick={()=>setInstructions('hidden')} />
              )
            }
          </div>
          <div className={`${instructions} text-gray-500 ps-10 pb-5`}>
              <li className='py-1'>Wash light and bright clothes separately.</li>
              <li className='py-1'>Don't use bleach.</li>
              <li className='py-1'>Don't twist or squeeze clothes with embellishments.</li>
              <li className='py-1'>Iron on low heat if needed, but not on shiny or embellished areas.</li>
              <li className='py-1'>Dry clothes in the shade.</li>
          </div>
          <hr className='border border-gray-200' />
          <div className='flex justify-between items-center py-3'>
            <h2 className='text-xl font-semibold'>Disclaimer</h2>
            {
              disclaimer === 'hidden' ? (
                <IoMdArrowDropdown className=' cursor-pointer text-2xl text-gray-400' onClick={()=>setDisclaimer('visible')} />
              )
              :
              (
                <IoMdArrowDropdown className=' transform rotate-180 cursor-pointer text-2xl text-gray-400' onClick={()=>setDisclaimer('hidden')} />
              )
            }
          </div>
          <div className={`${disclaimer} text-gray-500 ps-10 pb-5`}>
              <p>Colors on your screen may not exactly match real life due to display settings and lighting.</p>
          </div>
          <hr className='border border-gray-200' />
        </div>
            <div className={`absolute top-10 left-1/4 w-1/2 bg-black text-white rounded-xl p-5 ${addCard}`}>
              <div className='flex justify-between items-center'>
                <h1 className=' font-semibold text-2xl'>ADD CARD</h1>
                <p className=' font-semibold text-2xl cursor-pointer' onClick={()=>setAddCard('hidden')}>X</p>
              </div>
                <div className='flex justify-between gap-3 py-3'>
                  <div className='w-1/3'>
                    <img src={cardDetail.image1} alt="" className='w-full rounded-xl cursor-pointer' />
                  </div>
                  <div className='w-1/3'>
                    <h1 className='text-xl font-semibold'>{cardDetail.title}</h1>
                    <h2 className='text-xl font-semibold pt-5'>Rs. {cardDetail.price}</h2>
                  </div>
                  <div className='w-1/3'>
                    {
                      quantity < 1 ? (
                        <button className='w-full bg-white text-black text-xl text-center py-3 rounded-xl font-semibold my-2 cursor-pointer'>VEIW CARD (0)</button>
                      )
                      :
                      (
                        <button className='w-full bg-white text-black text-xl text-center py-3 rounded-xl font-semibold my-2 cursor-pointer' onClick={()=>{
                          navigate(`/veiwCard/${cardDetail.id}/${quantity}`)
                          ViewCardData.push(updatedCardDetail)
                          onAdd(quantity)
                        }}>VEIW CARD ({quantity})</button>
                      )
                    }
                    <button className='w-full bg-white text-black text-xl text-center py-3 rounded-xl font-semibold my-2 cursor-pointer'>Checkout</button>
                  </div>
                </div>
              <div className='flex justify-between items-center'>
                <button className='bg-white text-black font-semibold px-5 py-3 mt-2 rounded-xl text-xl cursor-pointer' onClick={()=>setAddCard('hidden')}>Continue Shopping</button>
                <button className='bg-white text-black font-semibold px-5 py-3 mt-2 rounded-xl text-xl cursor-pointer' onClick={()=>setAddCard('hidden')}>Cancle</button>
              </div>
            </div>
      </div>
    </>
  )
}

export default HomeDetailsData