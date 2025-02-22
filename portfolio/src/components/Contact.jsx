import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 bg-[#ecfffe]'>
        <form method='POST' action="https://getform.io/f/bvrwwdwb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fe9f7f] text-[#1a1a1a]'>Contact</p>
                <p className='text-[#1a1a1a] py-4'>Please fill out the form below or send me an email at mark.ors.varga@gmail.com</p>
            </div>
            <input className='my-4 p-2 bg-[#1a1a1a]  placeholder-[#fe9f7f] border border-gray-600 rounded-md 
            focus:outline-none focus:border-[#fe9f7f]' type="text" placeholder='Your name' name='name'/>
            <input className='my-4 p-2 bg-[#1a1a1a]  placeholder-[#fe9f7f] border border-gray-600 rounded-md 
            focus:outline-none focus:border-[#fe9f7f]' type="email" placeholder='Your email' name='email'/>
            <textarea className='my-4 p-2 bg-[#1a1a1a]  placeholder-[#fe9f7f] border border-gray-600 rounded-md 
            focus:outline-none focus:border-[#fe9f7f]' rows='10' placeholder='Your message' name='message'/>
            <button className='text-[#fe9f7f] border-[#1a1a1a] border-2 px-4 py-3 my-8 mx-auto flex items-center bg-[#1a1a1a]
            hover:bg-[#3c3c3c] rounded-lg'>Send a message</button>
        </form>
    </div>
  )
}

export default Contact