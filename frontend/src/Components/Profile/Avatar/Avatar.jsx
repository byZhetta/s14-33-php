import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Avatar = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('No se encontró el token en el almacenamiento local.');
        }

        const response = await axios.get('https://entrenaconmigo-api.vercel.app/api/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setProfileData(response.data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <section className="ml-[250px]">
      <div className="avatar">
        {profileData && (
          <div className="w-32 -mr-3 lg:w-48 xl:w-64 rounded-xl">
            <img src={profileData.avatarUrl} alt="Avatar" />
          </div>
        )}
        {profileData && (
          <p className="text-left ml-9 mt-24 font-medium text-xl text-white dark:text-black">{profileData.name}</p>
        )}
      </div>
    </section>
  );
};

export default Avatar;