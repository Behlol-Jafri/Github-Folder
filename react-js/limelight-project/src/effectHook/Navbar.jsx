import { FaShoppingBag, FaUser } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDataContext } from './context'

const Navbar = () => {
  const {count, getCategory, category} = useDataContext();
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    getCategory()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={`w-full z-50 transition-all duration-300 ease-in-out ${isFixed ? 'fixed top-0 left-0 translate-y-0' : 'relative -translate-y-2 opacity-95'}`}>
        <nav className='flex justify-between items-center px-10 py-5 bg-black text-white'>
          <div className='flex justify-center items-center gap-5'>
            <LuPhoneCall className='text-2xl cursor-pointer' />
            <IoLogoWhatsapp className='text-green-600 text-3xl cursor-pointer' />
          </div>
          <div className='cursor-pointer'>
            <h1 className='text-3xl italic text-green-700 '>LIME<span className='text-amber-300'>LIGHT</span></h1>
          </div>
          <div className='flex justify-center items-center gap-5'>
            <FaMagnifyingGlass className='text-xl cursor-pointer' />
            <FaUser className='text-xl cursor-pointer' />
            {
              count === 0 ? (
                <FaShoppingBag className='text-xl cursor-pointer' />
              )
                :
                (
                  <div className=' relative'>
                    <FaShoppingBag className='text-xl cursor-pointer' />
                    <div className=' absolute top-[-5px] left-3 text-white  bg-red-600 font-semibold rounded-full w-full h-full flex justify-center items-center'>
                      <p className=''>{count}</p>
                    </div>
                  </div>
                )
            }
          </div>
        </nav>
        <div className="flex justify-center items-center bg-black text-white gap-20 mt-1 py-3">
          {
            category?.map((item, index) => (
              <Link to={`/subCategory/${item?.id}`} className="font-semibold cursor-pointer">{item?.name}</Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Navbar