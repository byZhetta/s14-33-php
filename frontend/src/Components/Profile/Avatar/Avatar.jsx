import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Avatar = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get('https://entrenaconmigo-api.vercel.app/api/api/profile', {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        const { data } = response.data;
        setUserName(data.name); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); 

  return (
    <section className="">
      <div className="avatar">
        <div className="w-32 -mr-3 lg:w-48 xl:w-64 rounded-xl">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt={userName} />
        </div>
        <p className="text-left ml-9 mt-24 font-medium text-xl text-white dark:text-black">{userName}</p>
      </div>
    </section>
  );
};

export default Avatar;