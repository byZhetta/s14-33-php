import React from 'react'

const Avatar = () => {
  return (
    <section className="ml-[250px]">
      <div className="avatar">
        <div className="w-32 -mr-3 lg:w-48 xl:w-64 rounded-xl">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        <p className="text-left ml-9 mt-24 font-medium text-xl text-white">Luciana Pérez</p>
      </div>
    </section>
    
  )
}

export default Avatar;