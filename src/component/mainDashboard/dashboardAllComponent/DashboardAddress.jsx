'use client';
const DashboardAddress = () => {
  const addresses = [
    {
      id: 1,
      type: "BILLING ADDRESS",
      name: "Daniel Robinson",
      street: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
      country: "United States",
      email: "sale@uomo.com",
      phone: "+1 246-345-0695",
    },
    {
      id: 2,
      type: "SHIPPING ADDRESS",
      name: "Daniel Robinson",
      street: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
      country: "United States",
      email: "sale@uomo.com",
      phone: "+1 246-345-0695",
    },
  ];

  return (
    <section className="mt-6 sm:mt-10 lg:mt-25 px-4 sm:px-6 lg:ml-5 lg:px-0">
      <div className="w-full lg:w-216.75">

        {/* Heading */}
        <p className="texts_14_regular mb-8 sm:mb-10 lg:mb-15.25">
          The following addresses will be used on the checkout page by default.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-[91px]">
          {addresses.map((address) => (
            <div key={address.id} className="p-4 sm:p-5">

              {/* Card Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[13px] font-bold tracking-[0.08em]">
                  {address.type}
                </span>
                <span className="text-[12px] font-semibold tracking-[0.05em] border-b border-black cursor-pointer hover:opacity-60 transition-opacity">
                  EDIT
                </span>
              </div>

              {/* Card Body */}
              <p className="text-[14px] mb-1">{address.name}</p>
              <p className="text-[14px] mb-1">{address.street}</p>
              <p className="text-[14px] mb-4">{address.country}</p>
              <p className="text-[14px] mb-1">{address.email}</p>
              <p className="text-[14px]">{address.phone}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DashboardAddress;