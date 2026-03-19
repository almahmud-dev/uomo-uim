'use client';
import React from 'react'

const DashboardDownload = () => {
  const downloads = [
    {
      id: 1,
      product: "Colorful Jacket - Size M",
      date: "October 27, 2020",
      expires: "Never",
      file: "colorful-jacket-guide.pdf",
    },
    {
      id: 2,
      product: "Shirt In Botanical Cheetah Print",
      date: "November 12, 2020",
      expires: "December 31, 2024",
      file: "botanical-shirt-manual.pdf",
    },
    {
      id: 3,
      product: "Cotton Jersey T-Shirt",
      date: "January 5, 2021",
      expires: "Never",
      file: "cotton-tshirt-care.pdf",
    },
  ];

  return (
    <div className="w-full pt-8 sm:pt-14 lg:pt-25 px-4 sm:px-6 lg:px-0">

      {/* ===== DESKTOP TABLE (md and above) ===== */}
      <div className="hidden md:block w-full overflow-x-auto border border-[#E4E4E4]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#E4E4E4]">
              <th className="text-left px-4 lg:px-8 pt-4 pb-2.5 text-xs uppercase">Product</th>
              <th className="text-left px-4 lg:px-8 pt-4 pb-2.5 text-xs uppercase">Date</th>
              <th className="text-left px-4 lg:px-8 pt-4 pb-2.5 text-xs uppercase">Expires</th>
              <th className="text-left px-4 lg:px-8 pt-4 pb-2.5 text-xs uppercase">Download</th>
            </tr>
          </thead>
          <tbody>
            {downloads.map((item, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="pt-6 lg:pt-10 px-4 lg:px-8 pb-5 lg:pb-8 text-gray-800 text-sm font-medium">
                  {item.product}
                </td>
                <td className="pt-6 lg:pt-10 px-4 lg:px-8 pb-5 lg:pb-8 text-gray-500 text-sm">
                  {item.date}
                </td>
                <td className="pt-6 lg:pt-10 px-4 lg:px-8 pb-5 lg:pb-8 text-gray-500 text-sm">
                  {item.expires}
                </td>
                <td className="pt-6 lg:pt-10 px-4 lg:px-8 pb-5 lg:pb-8">
                  <button className="bg-black text-white text-xs font-semibold tracking-widest px-6 py-2.5 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                    DOWNLOAD
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== MOBILE CARDS (sm only) ===== */}
      <div className="block md:hidden space-y-3">
        {downloads.map((item, i) => (
          <div key={i} className="border border-gray-200 p-4 bg-white">
            <div className="flex justify-between items-start mb-2">
              <p className="text-gray-800 font-semibold text-sm">{item.product}</p>
            </div>
            <p className="text-gray-400 text-xs mb-1">Date: {item.date}</p>
            <p className="text-gray-400 text-xs mb-4">Expires: {item.expires}</p>
            <button className="w-full bg-black text-white text-xs font-semibold tracking-widest py-2.5 hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
              DOWNLOAD
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default DashboardDownload
