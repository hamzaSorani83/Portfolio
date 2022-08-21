import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

interface IData {
  user_name: string;
  user_email: string;
  message: string;
}

const initialData: IData = {
  user_name: '',
  user_email: '',
  message: '',
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<IData>(initialData)
  
  const changeHandler = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setData({
      ...data,
      [target.name]: target.value,
    })
  }
  
  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data.user_name.length === 0 || !regex.test(data.user_email) || data.message.length === 0) {
      setError(true);
      setDone(false);
    } else {
      setError(false);
      setData(initialData);
      if(form.current)
      emailjs.sendForm('service_z01jtpq', 'template_hxcbk42', form.current, '_rQIfwA5Po0qhzJv9')
        .then((result) => {
          console.log(result.text);
          setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
  };
  
  return (
    <div className='contact-form' id='contact'>
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" onChange={changeHandler} value={data.user_name} className='user' placeholder='Name' />
          <input type="email" name="user_email" onChange={changeHandler} value={data.user_email} className='user' placeholder='Email' />
          <textarea name="message" onChange={changeHandler} value={data.message} className='user' placeholder='Message' />
          <input type="submit" value="Send" className='button' />
          { done && <span className='alert alert-success'> Thanks for contacting me!</span> }
          { error && <span className='alert alert-danger'>Please enter your name, email address and message</span> }
          <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact