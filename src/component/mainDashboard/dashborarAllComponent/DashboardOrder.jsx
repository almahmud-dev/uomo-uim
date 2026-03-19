'use client';
import React, { useState } from 'react'

const DashboardOrder = () => {
  const orders = [
    { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65", items: 3 },
    { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65", items: 3 },
    { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65", items: 3 },
    { id: "#2418", date: "October 27, 2020", status: "On hold", total: "$1,200.65", items: 3 },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className='mt-6 sm:mt-10 lg:mt-25'>

      {/* ===== DESKTOP TABLE (md and above) ===== */}
      <div className='hidden md:block w-full overflow-x-auto border border-[#E4E4E4]'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-[#E4E4E4] table-head'>
              <th className='text-left px-4 lg:px-8 pt-4 pb-2.5 text-xs uppercase'>Order</th>
              <th className='text-left px-4 lg:px-8 pt-4 pb-2.5 text-xs uppercase'>Date</th>
              <th className='text-left px-4 lg:px-8 pt-4 pb-2.5 text-xs uppercase'>Status</th>
              <th className='text-left px-4 lg:px-8 pt-4 pb-2.5 text-xs uppercase'>Total</th>
              <th className='text-left px-4 lg:px-8 pt-4 pb-2.5 text-xs uppercase'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr
                key={i}
                className={`border-b border-gray-200 transition-colors duration-150 ${hovered === i ? 'bg-gray-50' : 'bg-white'}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <td className='pt-6 md:pt-8 lg:pt-12 px-4 lg:px-8 pb-5 lg:pb-9.5'>
                  <a href='#' className='text-gray-800 font-medium hover:underline text-sm'>{order.id}</a>
                </td>
                <td className='pt-6 md:pt-8 lg:pt-12 px-4 lg:px-8 pb-5 lg:pb-9.5 text-gray-500 text-sm'>{order.date}</td>
                <td className='pt-6 md:pt-8 lg:pt-12 px-4 lg:px-8 pb-5 lg:pb-9.5 text-gray-500 text-sm'>{order.status}</td>
                <td className='pt-6 md:pt-8 lg:pt-12 px-4 lg:px-8 pb-5 lg:pb-9.5 text-gray-500 text-sm'>{order.total} for {order.items} items</td>
                <td className='pt-6 md:pt-8 lg:pt-12 px-4 lg:px-8 pb-5 lg:pb-9.5'>
                  <button className='bg-black text-white text-xs font-semibold tracking-widest px-6 py-2.5 lg:pt-3.75 lg:pl-12.5 lg:pb-2.75 lg:pr-13.5 hover:bg-gray-800 transition-colors duration-200 cursor-pointer'>
                    VIEW
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== MOBILE CARDS (sm only) ===== */}
      <div className='block md:hidden space-y-3 px-4 sm:px-6'>
        {orders.map((order, i) => (
          <div key={i} className='border border-gray-200 p-4 bg-white'>
            <div className='flex justify-between items-center mb-2'>
              <a href='#' className='text-gray-800 font-semibold text-sm hover:underline'>{order.id}</a>
              <span className='text-gray-500 text-xs'>{order.status}</span>
            </div>
            <p className='text-gray-400 text-xs mb-1'>{order.date}</p>
            <p className='text-gray-500 text-sm mb-4'>{order.total} for {order.items} items</p>
            <button className='w-full bg-black text-white text-xs font-semibold tracking-widest py-2.5 hover:bg-gray-800 transition-colors duration-200 cursor-pointer'>
              VIEW
            </button>
          </div>
        ))}
      </div>

    </section>
  )
}

export default DashboardOrder