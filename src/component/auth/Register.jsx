'use client';
import allIcons from "@/helper/iconProvider";
import Link from 'next/link';
import React from "react";

const Register = () => {
  const { close } = allIcons;

  return (
    <div className="w-[420px] h-full bg-white p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <p className="texts_16_medium text-head">CREATE AN ACCOUNT</p>
        <span className="text-2xl cursor-pointer">{close}</span>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-y-5">
        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="w-full border-2 border-footer px-4 py-4 texts_14_regular text-second placeholder:text-second"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email address *"
          className="w-full border-2 border-footer px-4 py-4 texts_14_regular text-second placeholder:text-second"
        />

        {/* Password */}
        <fieldset className="border-2 border-head px-4 pt-1 pb-2">
          <legend className="texts_14_regular text-head px-1">
            Password *
          </legend>
          <input
            type="password"
            defaultValue="••••••••"
            className="w-full texts_14_regular text-head bg-transparent"
          />
        </fieldset>

        {/* Privacy Note */}
        <p className="texts_14_regular text-second leading-relaxed">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <Link
            href="/privacy-policy"
            className="text-head underline underline-offset-2"
          >
            privacy policy.
          </Link>
        </p>

        {/* Register Button */}
        <button className="w-full bg-head text-white texts_14_medium tracking-widest py-4 cursor-pointer">
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Register;
