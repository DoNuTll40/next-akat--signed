import React from 'react'
import Footer from '../Footer'
import { motion, AnimatePresence } from 'framer-motion'

export default function ModalForm({ openModal, setOpenModal, errorMessage }) {
  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-10 backdrop-blur-sm bg-black/10 px-4 flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 60 }}
            transition={{ duration: 0.25 }}
            className='w-full max-w-[320px] bg-white p-2 rounded-2xl shadow-lg relative'>

            <div className='absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80px] rounded-full overflow-hidden shadow-lg border-6 border-white/20'>
              <img src="/image/bw.jpg" alt="logo" />
            </div>

            <div className='w-full text-center flex flex-col gap-2 mt-11'>
              <h1 className={`${errorMessage ? "text-red-700" : "text-[#a9881e]"} text-3xl font-medium`}>{errorMessage ? "ตรวจพบข้อผิดพลาด" : "ลงนามสำเร็จ"}</h1>
              <h1 className={`${errorMessage ? "text-red-700" : "text-gray-600"} text-base font-light`}>{errorMessage ? "Signing failed" : "Successfully signed"}</h1>
            </div>

            <div className='px-6 my-8'>
              <hr className='border-gray-300' />
            </div>

            <div className={`text-center font-light flex flex-col gap-2 text-lg ${errorMessage ? "text-red-700" : "text-gray-600"}`}>
              <p>{errorMessage ? errorMessage : "ระบบได้บันทึกการลงนามถวาย"}</p>
              {!errorMessage && <p>พระพรชัยของท่านเป็นที่เรียบร้อยแล้ว</p>}
            </div>

            <div className='flex justify-center'>
              <button onClick={() => setOpenModal(false)} className='px-4 p-2 w-full max-w-26 rounded-full bg-[#a9881e] text-white text-center my-6 hover:cursor-pointer hover:bg-[#a9881e]/70'>ปิด</button>
            </div>

            <div className='text-center'>
              <Footer textStyle={"text-black"} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
