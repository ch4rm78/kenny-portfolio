import React from 'react'
import RevealOnScroll from '../RevealOnScroll'
import {useState} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      await emailjs.sendForm(service_id, template_id, e.target, public_key)
      alert("Message Sent!");
      setFormData({
      name: '',
      email: '',
      message: ''
    });
    }
    catch{
      alert(`There was an error sending your message`);
    }
    
    
  }

  return (
    <section id="contact" className='min-h-screen flex items-center justify-center py-20px'>
      <RevealOnScroll>
        <div className="px-4 w-screen max-w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-cyan-300 text-transparent bg-clip-text text-center">
            Get In Touch</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className="relative">
                <input type="text" 
                        value={formData.name}
                        name="name" 
                        id="name"
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        required 
                        className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                                                    focus:border-blue-500 focus:bg-blue-500/5'
                          placeholder='Name'/>
              </div>

              <div className="relative">
                <input type="email" 
                        value={formData.email} 
                        name="email" 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        id="email" 
                        required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                                                    focus:border-blue-500 focus:bg-blue-500/5'
                          placeholder='Email'/>
              </div>

              <div className="relative">
                <textarea  name="message" 
                            id="message" 
                            required 
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            rows={5}
                            value={formData.message}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
                                                                    focus:border-blue-500 focus:bg-blue-500/5'
                          placeholder='Write Your Message To Me Here'/>
              </div>
              <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition
                                              relative overflow-hidden hover:translate-y-0.5 cursor-pointer hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>Send Message</button>
            </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Contact