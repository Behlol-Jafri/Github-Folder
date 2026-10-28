import { useState } from 'react'
import { cardsArray } from './data'
const Cards = () => {
  const [data, setData] = useState('')
  const [cards, setCards] = useState(cardsArray)
  const handleChange = (e) => {
    setData(e.target.value);
  }
  const handleDelete = (id)=>{
    const updatedArray = cards.filter((item)=> item?.id !== id)
    setCards(updatedArray);
  }
    const filteredArray = cards?.filter((item)=> item?.category?.toLowerCase()?.includes(data?.toLowerCase()))
  
  return (
    <>
      <div className='my-20 text-center'>
        <input type="search" name='data' placeholder='Search' className='border-2 border-gray-300 w-[50%] focus:border-amber-200 outline-0 p-4' value={data} onChange={handleChange} />
      </div>

      <div className='grid grid-cols-3 gap-5 mx-5'>
        {
          filteredArray.length > 0 ?
          filteredArray?.map((item) => {
            return(
            <div key={item.id} className='p-4 bg-white border border-gray-300'>
              <div>
                <img src={item.image} alt={item.category} className='w-full' />
              </div>
              <div>
                <h2 className='font-semibold pt-4 text-xl font-[italic] text-gray-500'>{item.category}</h2>
                <h1 className='text-3xl my-2 font-[italic]'>{item.title}</h1>
                <p className='font-[italic] text-gray-500'>{item.date} | By <span className='font-semibold'>{item.author}</span></p>
                <button className='bg-red-600 my-4 w-full text-center text-white font-semibold py-2 px-5 border-0 outline-0 rounded-xl' onClick={()=>{handleDelete(item.id)}}>DELETE</button>
              </div>
            </div>
          )
          })
          :
          <div>
            <h1 className='text-red-600 text-2xl font-bold'>NO RESULT FOUND</h1>
          </div>
        } 

      </div>

    </>
  )
}

export default Cards