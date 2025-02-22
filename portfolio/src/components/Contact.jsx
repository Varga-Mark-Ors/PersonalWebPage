import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 bg-[#00a6a6]'>
        <form method='POST' action="https://getform.io/f/bvrwwdwb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#EFE9D5] text-[#EFE9D5]'>Contact</p>
                <p className='text-[#EFE9D5] py-4'>Please fill out the form below or send me an email at mark.ors.varga@gmail.com</p>
            </div>
            <input className='my-4 p-2 bg-[#EFE9D5]' type="text" placeholder='Your name' name='name' />
            <input className='my-4 p-2 bg-[#EFE9D5]' type="email" placeholder='Your email' name='email' />
            <textarea className='my-4 p-2 bg-[#EFE9D5]' name='message' rows='10' placeholder='Your message'/>
            <button className='text-[#EFE9D5] border-[#EFE9D5] border-2 px-4 py-3 my-8 mx-auto flex items-center
                hover:text-[#00a6a6] hover:bg-[#EFE9D5]'>Send a message</button>
        </form>
    </div>
  )
}

export default Contact