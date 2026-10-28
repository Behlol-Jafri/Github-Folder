import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const GetData = () => {
    const url = "https://fakestoreapi.com/products"
    const [data , setData] = useState([])
    const handleGetData = async ()=>{
        const response = await fetch(url);
        const result = await response.json(response);
        setData(result)
        console.log("result = ", result)
    }

    useEffect(()=>{
        handleGetData()
    },[])
const handleDelete = async (id)=>{
     await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    setData(data.filter((card) => card.id !== id));
}
    const [visible, setVisible] = useState('hidden')
      const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
        description: '',
        image: '',
      })
      const handleShow = () => {
        setVisible('visible')
      }
      const handleClose = () => {
        setVisible('hidden')
        setFormData({
          title: '',
          category: '',
          price: '',
          description: '',
          image: '',
        })
      }
      const handleImage = (e) => {
  const file = e.target.files[0];
   setFormData((prev) => ({
    ...prev,
    image: URL.createObjectURL(file),
  }));
};
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }))
    
      }
      const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
    
        const result = await response.json();

         setData([...data, result]);
         handleGetData()
        console.log('result = ',result)
        handleClose()
      }
  return (
    <>
    <button className='bg-blue-700 mt-20 ms-5 text-white rounded-xl py-2 px-5' onClick={() => handleShow()}>Create Card</button>
      <div className={`bg-black/50 z-50 fixed inset-0 h-screen w-full p-5 overflow-y-auto ${visible}`}>
        <form onSubmit={handleSubmit} className="px-6 py-5 border w-1/2 mx-auto rounded-md bg-white">
          <div className='bg-blue-600 text-white rounded-md py-2 px-3 mb-3 flex justify-between items-center'>
            <h1 className='text-xl font-semibold'>Create Cards</h1>
            <RxCross2 className='text-3xl cursor-pointer' onClick={() => handleClose()} />
          </div>
          <div className="grid gap-4">
            <label>
              <span className="text-sm font-medium">Title</span>
              <input
                name="title"
                type='text'
                value={formData.title}
                onChange={handleChange}
                className={`mt-1 w-full rounded-md px-3 py-2 outline focus:outline-blue-500`}
                placeholder="Your title"
              />
            </label>
            <label>
              <span className="text-sm font-medium">Category</span>
              <input
                name="category"
                type='text'
                value={formData.category}
                onChange={handleChange}
                className={`mt-1 w-full rounded-md px-3 py-2 outline focus:outline-blue-500`}
                placeholder="Your category"
              />
            </label>
            <label>
              <span className="text-sm font-medium">Price</span>
              <input
                name="price"
                type='number'
                value={formData.price}
                onChange={handleChange}
                className={`mt-1 w-full rounded-md px-3 py-2 outline focus:outline-blue-500`}
                placeholder="Your price"
              />
            </label>

            <label>
              <span className="text-sm font-medium">Description</span>
              <textarea
                name="description"
                type='text'
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className={`mt-1 w-full rounded-md px-3 py-2 outline focus:outline-blue-500`}
                placeholder="Write a description..."
              />
            </label>
            <input
              type='file'
              name="image"
              onChange={handleImage}
              className={`mt-1 w-full rounded-md px-3 py-2 outline focus:outline-blue-500`}
            />

            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleClose()}
                className="px-4 py-2 rounded-md border hover:bg-gray-100 w-full"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 rounded-md w-full bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
<h1 className='text-center text-2xl font-semibold py-4 bg-black text-white top-0 fixed w-full'>FETCH DATA {data.length}</h1>

    <div className='grid grid-cols-3 gap-5 p-5'>
        {
            [...data].reverse().map((item, index)=>{
                return(
                    <div className='border rounded-xl p-5'>
                        <div>
                            <img src={item?.image} alt="" className='w-full h-75 rounded-xl object-cover' />
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold my-2 line-clamp-1 '>{item?.title}</h1>
                            <h2 className='text-md text-red-500 font-semibold my-2 '>{item?.category}</h2>
                            <p className='my-2 line-clamp-1'>{item?.description}</p>
                            <h2 className='text-md font-semibold my-2'>Rs. {item?.price}</h2>
                            <button className='bg-red-600 text-white font-semibold rounded-xl border-0 outline-0 py-2 px-5 my-2' onClick={()=>handleDelete(item.id)}>Delete</button>
                        </div>

                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default GetData

