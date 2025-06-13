"use client"

import Footer from '@/components/Footer'
import ModalForm from '@/components/modal/ModalForm'
import axios from 'axios'
import { useState } from 'react'

export default function page() {

  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    ryb_name: "",
    ryb_lastname: "",
    ryb_event_title: "เนื่องในโอกาสวันเฉลิมพระชนมพรรษา 3 มิถุนายน 2568",
    ryb_royal_name: "สมเด็จพระนางเจ้าสุทิดา พัชรสุธาพิมลลักษณ พระบรมราชินี",
  })

  const [openModal, setOpenModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage("")

    const form = e.currentTarget

    try {

      const res = await axios.post('/wellwishes/api/wish', input)

      form.reset()
      setOpenModal(true)
    } catch (err) {
      console.log(err)
      setErrorMessage(err.response.data.message);
      setOpenModal(true)
    } finally {
      setLoading(false)
    }
  }

  const hdlChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-[url(/wellwishes/image/bg.webp)] bg-cover bg-center w-dvw h-dvh select-none">
      <div className="w-dvw h-dvh bg-black/20 flex flex-col justify-center items-center px-4">

        {/* แสดงหลังลงนามสำเร็จ */}
        <ModalForm openModal={openModal} setOpenModal={setOpenModal} errorMessage={errorMessage} />

        <div className='bg-gradient-to-b via-[#dea1ee] via-80% from-[#D6A1EE]/0 from-10% to-[#f5e9fb]/0 max-w-[450px] rounded-lg backdrop-blur-xs p-4 relative'> 
          <div className='max-w-[70%] mx-auto pointer-events-none'>
            <img src="https://www.skprivate.go.th/images/events/64-06-03/queen.png" alt="image" />
          </div>

          <div className='relative'>
            <h1 className='text-[160%] font-medium text-center -mt-2 mb-1 text-white'>ร่วมลงนามถวายพระพรชัยมงคล</h1>
          </div>

          <div className='text-center text-[85%] text-white'>
            <p>สมเด็จพระนางเจ้าสุทิดา พัชรสุธาพิมลลักษณ พระบรมราชินี</p>
            <p>เนื่องในโอกาสวันเฉลิมพระชนมพรรษา 3 มิถุนายน 2568</p>
          </div>

          <form onSubmit={handleSubmit} className='w-full my-2'>
            <div>
              <div className='px-0.5'>
                <p className='bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent'>ชื่อ <span className='text-red-600'>*</span></p>
                <input name="ryb_name" autoComplete='given-name' onChange={hdlChange} className='w-full border border-[#3F0449] ring-[#3F0449] mt-0 mb-1 rounded-md py-1.5 ' type="text" placeholder='ชื่อ' required readOnly={loading} />
              </div>
              <div className='px-0.5'>
                <p className='bg-gradient-to-b from-white to-gray-100 bg-clip-text text-transparent'>นามสกุล <span className='text-red-600'>*</span></p>
                <input name="ryb_lastname" autoComplete='family-name' onChange={hdlChange} className='w-full border border-[#3F0449] ring-[#3F0449] my-0 rounded-md py-1.5 ' type="text" placeholder='นามสกุล' required readOnly={loading} />
              </div>
            </div>

            <div className='px-4 my-5'>
              <hr className='border-[#3F0449]' />
            </div>

            <div className='px-1'>
              <button className='w-full bg-[#3F0449] rounded-md py-2 text-white cursor-pointer hover:bg-[#711282] ease-in-out duration-200 transition-all disabled:opacity-25 disabled:hover:cursor-not-allowed disabled:hover:bg-[#3F0449]' disabled={loading} >{loading ? "กำลังลงนาม..." : "ลงนามถวายพระพร"}</button>
            </div>
          </form>
        </div>
        <Footer textStyle={"text-white"} />
      </div>
    </div>
  )
}
