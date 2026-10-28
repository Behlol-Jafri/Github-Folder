import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
const FormData = () => {
   const url = "https://fakestoreapi.com/products"
  const [visible, setVisible] = useState('hidden')
  const [formData, setFormData] = useState({
    id: '',
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
      id: '',
      title: '',
      category: '',
      price: '',
      description: '',
      image: '',
    })
  }
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
    console.log('result = ',result)
    handleClose()
  }
  return (
    <>
      <Link  to={`/admin`} className='bg-blue-700 mt-20 ms-5 text-white rounded-xl py-2 px-5'>Admin</Link>
      {/* <button className='bg-blue-700 mt-20 ms-5 text-white rounded-xl py-2 px-5' onClick={() => handleShow()}>Create Card</button> */}
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
              {/* {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>} */}
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
              {/* {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>} */}
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
              {/* {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>} */}
            </label>
            <label>
              <span className="text-sm font-medium">Id</span>
              <input
                name="id"
                type='number'
                value={formData.id}
                onChange={handleChange}
                className={`mt-1 w-full rounded-md px-3 py-2 outline focus:outline-blue-500`}
                placeholder="Your id"
              />
              {/* {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>} */}
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
              {/* {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>} */}
            </label>
            <input
              type='file'
              name="image"
              onChange={handleChange}
              className={`mt-1 w-full rounded-md px-3 py-2 outline focus:outline-blue-500`}
            />
            {/* {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>} */}

            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                // onClick={onClose}
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
    </>
  )
}

export default FormData