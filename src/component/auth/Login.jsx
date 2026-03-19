'use client';
import allIcons from "@/helper/iconProvider";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuthStore from "../../store/authSlice";

const Login = ({ unMount }) => {
  const { close } = allIcons;
  const router = useRouter();
  const { setUser } = useAuthStore();
  //Containe er bahire click korle e cole jabe
  const navtabRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (navtabRef.current && !navtabRef.current.contains(event.target)) {
        unMount(null);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [unMount]);
  // ══ STATE ══
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  // ══ HANDLERS ══
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Please Enter Your Email";
    if (!formData.password) newErrors.password = "Please Enter Your Password";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          setErrors({});
          setLoginSuccess(true);
          const user = userCredential.user;
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          });
          setTimeout(() => {
            unMount(null);
            router.push("/");
          }, 1500);
        })
        .catch(() => setErrors({ firebase: "Invalid email or password" }));
    }
  };

  return (
    <div ref={navtabRef} className="w-105 h-full bg-white p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <p className="texts_16_medium text-head">LOGIN</p>
        <span className="text-2xl cursor-pointer" onClick={() => unMount(null)}>
          {close}
        </span>
      </div>

      {/* Success Message */}
      {loginSuccess && (
        <div className="bg-green-50 border border-footer text-green-700 px-4 py-3 text-sm mb-5">
          ✅ Login successful! Redirecting...
        </div>
      )}

      {/* Form */}
      <div className="flex flex-col gap-y-5">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Username or email address *"
            className="w-full border-2 border-footer px-4 py-4 texts_14_regular text-head placeholder:text-second"
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email}</span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <fieldset className="border-2 border-head px-4 pt-1 pb-2 relative">
            <legend className="texts_14_regular text-head px-1">
              Password *
            </legend>
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
          {errors.password && (
            <span className="text-xs text-red-500">{errors.password}</span>
          )}
          {errors.firebase && (
            <span className="text-xs text-red-500">{errors.firebase}</span>
          )}
        </div>

        {/* Remember & Lost password */}
        <div className="flex justify-between items-center">
          <label className="flex items-center gap-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="w-4 h-4 border border-footer accent-head cursor-pointer"
            />
            <span className="texts_14_regular text-head">Remember me</span>
          </label>
          <Link
            href="/lost-password"
            className="texts_14_regular text-head underline underline-offset-2"
          >
            Lost password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-head text-white pt-5.5 pb-3.5
          hover:bg-[#DB4444] transition-all leading-6 cursor-pointer texts_14_medium"
        >
          LOG IN
        </button>

        {/* Create Account */}
        <p className="texts_14_regular text-second text-center">
          No account yet?{" "}
          <Link
            href="/login-register"
            className="text-head underline underline-offset-2"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
