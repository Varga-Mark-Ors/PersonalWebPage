import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 bg-[#ecfffe]'>
        <form method='POST' action="https://getform.io/f/bvrwwdwb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#1a1a1a] text-[#1a1a1a]'>Contact</p>
                <p className='text-[#1a1a1a] py-4'>Please fill out the form below or send me an email at varga.mark.ors@gmail.com</p>
            </div>
            <input className='my-4 p-2 bg-[#ffffff]  placeholder-[#1a1a1a] border border-gray-600 rounded-md 
            focus:outline-none focus:border-[#fe9f7f]' type="text" placeholder='Your name' name='name'/>
            <input className='my-4 p-2 bg-[#ffffff]  placeholder-[#1a1a1a] border border-gray-600 rounded-md 
            focus:outline-none focus:border-[#fe9f7f]' type="email" placeholder='Your email' name='email'/>
            <textarea className='my-4 p-2 bg-[#ffffff]  placeholder-[#1a1a1a] border border-gray-600 rounded-md 
            focus:outline-none focus:border-[#fe9f7f]' rows='10' placeholder='Your message' name='message'/>
            <button className='text-[#1a1a1a] border-[#ffffff] border-2 px-4 py-3 my-8 mx-auto flex items-center bg-[#ffffff]
            hover:bg-[#1a1a1a] hover:text-[#ffffff] rounded-lg'>Send a message</button>
        </form>
    </div>
  )
}

export default Contact