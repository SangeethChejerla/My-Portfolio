'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';



export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Assume dark mode is enabled by default

  function onSubmit(data: FormData) {
    sendEmail(data);
    reset(); // Reset the form values to empty after submission
  }

  return (
    <div className={`bg-${isDarkMode ? 'gray-900' : 'gray-100'} p-8`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium text-white'
          >
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('name', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-white'
          >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('email', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-white'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <div className='flex justify-center'>
          <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
            
            Submit
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
