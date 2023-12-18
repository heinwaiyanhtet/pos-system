
import Image from 'next/image'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';

export default function index() {

  const [passwordVisible, setPasswordVisible] = useState(false);


  return (

    <div className="min-width-full w-[30%] mt-36 mx-auto bg-white p-8 rounded-md shadow-2xl">
    <h2 className="text-center text-lg font-medium mb-4">Login</h2>
    <form 
    // onSubmit={handleSubmit}
    >
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      
      <div className="mb-4">
        {/* <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Pasword
        </label> */}
{/* 
        <Input.Password
          placeholder="input password"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        /> */}
          
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"

      >
        Submit
      </button> 
    </form>
  </div>
  )
}
