import Input from '../reuseable-components/input'
import Button from '../reuseable-components/button'
import { useState } from 'react'

const Form = () => {
  const [data , setData] = useState({name:"" ,email:"", password:"", confirmPassword:"", role:""})
  const [validation , setValidation] = useState({name:"" ,email:"", password:"", confirmPassword:"", role:""})
  const handleInputChange = (e)=>{
    const { name,value} = e.target;
    setData((prev)=>({
      ...prev,
      [name] : value,
    }))
    console.log('name =', name);
    console.log('value =', value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(data.name && data.email && data.password && data.confirmPassword && data.role){
      
      console.log(data)
    }else{
      setValidation((prev)=>({
        ...prev,
        name:"Name is require",
        email:"Email is require",
        password:"Password is require",
        confirmPassword:"Confirm Password is require",
        role:"Role is require",
      }))
    }
  }
  return (
    <>
      <div className='flex flex-col p-3 mx-auto h-screen w-125 '>
        <form className='border-2 border-gray-400 p-2 rounded-xl'>
          <h1 className='bg-blue-600 text-white font-bold text-3xl p-2 rounded-xl mb-2'>Form Validation</h1>
          <Input inputType='text' inputPlaceholder='Name' inputName='name' inputValue={data.name} handleChange={handleInputChange}/>
          <p className='text-red-600 text-sm ps-2'>{validation.name}</p>
          <Input inputType='email' inputPlaceholder='Email' inputName='email' inputValue={data.email} handleChange={handleInputChange}/>
          <p className='text-red-600 text-sm ps-2'>{validation.email}</p>
          <Input inputType='password' inputPlaceholder='Password' inputName='password' inputValue={data.password} handleChange={handleInputChange}/>
          <p className='text-red-600 text-sm ps-2'>{validation.password}</p>
          <Input inputType='password' inputPlaceholder='Confirm Password' inputName='confirmPassword' inputValue={data.confirmPassword} handleChange={handleInputChange}/>
          <p className='text-red-600 text-sm ps-2'>{validation.confirmPassword}</p>
          <Input inputType='radio' inputPlaceholder='Role' inputName='role' inputValue={data.role} handleChange={handleInputChange}/>
          <p className='text-red-600 text-sm ps-2 pb-2'>{validation.role}</p>
          <div className='flex gap-2'>
          <Button name='Cancle' style='bg-gray-300 !text-black'/>
          <Button name='Submit' handleClick={handleSubmit}/>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form