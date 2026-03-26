'use client';
import allIcons from "@/helper/iconProvider";
import Link from 'next/link';
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuthStore from "../../store/authSlice";
import { useRouter } from "next/navigation";

const Register = ({ unMount }) => {
  const { close } = allIcons;
  const router = useRouter();
  const { setUser } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "Please enter a username";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (userCredential) => {
          await updateProfile(userCredential.user, { displayName: formData.username });
          setErrors({});
          setRegisterSuccess(true);
          const user = userCredential.user;
          setUser({ uid: user.uid, email: user.email, displayName: formData.username });
          setTimeout(() => {
            if (unMount) unMount(null);
            router.push("/");
          }, 1500);
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            setErrors({ firebase: "Email already in use" });
          } else {
            setErrors({ firebase: "Registration failed. Please try again." });
          }
        });
    }
  };

  return (
    <div className="w-105 h-full bg-white p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <p className="texts_16_medium text-head">CREATE AN ACCOUNT</p>
        <span className="text-2xl cursor-pointer" onClick={() => unMount && unMount(null)}>
          {close}
        </span>
      </div>

      {/* Success Message */}
      {registerSuccess && (
        <div className="bg-green-50 border border-footer text-green-700 px-4 py-3 text-sm mb-5">
          ✅ Account created! Redirecting...
        </div>
      )}

      {/* Form */}
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="flex flex-col gap-y-5">
        {/* Username */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username *"
            className="w-full border-2 border-footer px-4 py-4 texts_14_regular text-head placeholder:text-second"
          />
          {errors.username && <span className="text-xs text-red-500">{errors.username}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address *"
            className="w-full border-2 border-footer px-4 py-4 texts_14_regular text-head placeholder:text-second"
          />
          {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <fieldset className="border-2 border-head px-4 pt-1 pb-2 relative">
            <legend className="texts_14_regular text-head px-1">Password *</legend>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full texts_14_regular text-head bg-transparent"
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </fieldset>
          {errors.password && <span className="text-xs text-red-500">{errors.password}</span>}
          {errors.firebase && <span className="text-xs text-red-500">{errors.firebase}</span>}
        </div>

        {/* Privacy Note */}
        <p className="texts_14_regular text-second leading-relaxed">
          Your personal data will be used to support your experience throughout this website. See our{" "}
          <Link href="/privacy-policy" className="text-head underline underline-offset-2">
            privacy policy.
          </Link>
        </p>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-head text-white pt-5.5 pb-3.5 hover:bg-[#DB4444] transition-all leading-6 cursor-pointer texts_14_medium"
        >
          REGISTER
        </button>

        {/* Login link */}
        <p className="texts_14_regular text-second text-center">
          Already have an account?{" "}
          <Link href="/login-register" className="text-head underline underline-offset-2">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
