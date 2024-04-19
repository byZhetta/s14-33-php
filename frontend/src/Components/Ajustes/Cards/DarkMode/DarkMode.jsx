import React from 'react'

const DarkMode = () => {
  return (
    <section className="mt-5 ml-36">
        <div className="card flex w-[505PX] h-[83px] bg-[#232442] border border-[#9308E8] xl:w-[30%] shadow-xl relative">
            <div className="card-body">
                <h2 className="card-title ml-[50px]">MODO OSCURO</h2> 
                <label className="absolute top-2 right-2">
                  <input type="checkbox" className="toggle" checked />
                </label>
            </div>
        </div>
    </section>
  )
}

export default DarkMode;