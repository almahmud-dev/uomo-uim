"use client";
import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuthStore, { useLoginModalStore } from "../../../store/authSlice";

const RegiLog = () => {
  const router = useRouter();
  const { setUser, user, clearUser } = useAuthStore();
  const { showLoginModal, closeLoginModal } = useLoginModalStore();
  const [activeTab, setActiveTab] = useState("login");

  const handleLogout = async () => {
    await signOut(auth);
    clearUser();
    setTimeout(() => router.push("/"), 500);
  };

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showpassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [remember, setRemember] = useState(false);

  const loginInputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Username or email address",
    },
    {
      id: 2,
      name: "password",
      type: showpassword ? "text" : "password",
      placeholder: "Password",
    },
  ];

  const handleLoginChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const Validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Please Enter Your Email";
    if (!formData.password) newErrors.password = "Please Enter Your Password";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = () => {
    if (Validate()) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          setErrors({});
          setLoginSuccess(true);
          const u = userCredential.user;
          setUser({ uid: u.uid, email: u.email, displayName: u.displayName });
          setTimeout(() => {
            if (showLoginModal) closeLoginModal();
            else router.push("/");
          }, 1500);
        })
        .catch(() => setErrors({ firebase: "Invalid email or password" }));
    }
  };

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [Success, setSuccess] = useState(false);
  const [regErrors, setRegErrors] = useState({});

  const registerInputs = [
    { id: 1, name: "name", type: "text", placeholder: "Username" },
    { id: 2, name: "email", type: "text", placeholder: "Email address" },
    {
      id: 3,
      name: "password",
      type: showRegPassword ? "text" : "password",
      placeholder: "Password",
    },
    {
      id: 4,
      name: "confirmpassword",
      type: showConfirmPassword ? "text" : "password",
      placeholder: "Confirm Password",
    },
  ];

  const handleRegChange = (e) =>
    setFormdata({ ...formdata, [e.target.name]: e.target.value });

  const validate = () => {
    let newErrors = {};
    const gmailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|\\:;"'<>,.?\/])(?=.{8,}).*$/;
    if (!formdata.name) newErrors.name = "Please enter your name";
    if (!formdata.email) newErrors.email = "Please enter your email";
    else if (!gmailregex.test(formdata.email))
      newErrors.email = "Please enter a valid email";
    if (!formdata.password) newErrors.password = "Please enter your password";
    else if (!passregex.test(formdata.password))
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character";
    if (!formdata.confirmpassword)
      newErrors.confirmpassword = "Please enter confirm password";
    else if (
      !newErrors.password &&
      formdata.password !== formdata.confirmpassword
    )
      newErrors.confirmpassword = "Passwords do not match";
    setRegErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegSubmit = async () => {
    if (validate()) {
      createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, { displayName: formdata.name });
          setUser({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: formdata.name,
          });
          return userCredential;
        })
        .then(() => sendEmailVerification(auth.currentUser))
        .then(() => {
          setSuccess(true);
          setFormdata({
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use")
            setRegErrors({ email: "This email is already registered." });
          else
            setRegErrors({
              firebase: "Something went wrong. Please try again.",
            });
        });
    }
  };

  useEffect(() => {
    if (Success) {
      setTimeout(() => {
        setSuccess(false);
        if (showLoginModal) closeLoginModal();
        else router.push("/");
      }, 2000);
    }
  }, [Success]);

  const switchTab = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setRegErrors({});
    setLoginSuccess(false);
    setSuccess(false);
  };

  const formContent = (
    <div className="px-5 max-w-162.75 mx-auto">
      <div className="flex justify-center gap-10 mb-10">
        <button
          type="button"
          onClick={() => switchTab("login")}
          className={`texts_16_medium text-head tracking-widest transition-all relative after:absolute after:content-[''] after:h-0.5 after:bg-head after:-bottom-0.5 after:left-0 after:duration-500 after:ease-in-out cursor-pointer ${activeTab === "login" ? "after:w-full" : "opacity-40 after:w-0 hover:opacity-100 hover:after:w-full"}`}
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={() => switchTab("register")}
          className={`texts_16_medium text-head pb-0.5 tracking-widest transition-all relative after:absolute after:content-[''] after:h-0.5 after:bg-head after:-bottom-0.5 after:left-0 after:duration-500 after:ease-in-out cursor-pointer ${activeTab === "register" ? "after:w-full" : "opacity-40 after:w-0 hover:opacity-100 hover:after:w-full"}`}
        >
          REGISTER
        </button>
      </div>

      {activeTab === "login" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginSubmit();
          }}
          className="flex flex-col"
        >
          {loginSuccess && (
            <div className="bg-green-50 border border-footer text-green-700 px-4 py-3 text-sm mb-5">
              ✅ Login successful!
            </div>
          )}
          {loginInputs.map((input, index) => (
            <div
              key={input.id}
              className={`flex flex-col gap-1 ${index === 0 ? "mb-7.5" : "mb-4.25"}`}
            >
              <div className="relative border border-footer focus-within:border-black transition-colors">
                <label className="absolute -top-2.5 left-3 bg-white px-1 leading-6 text-[14px] text-head">
                  {input.placeholder} <span className="text-red-500">*</span>
                </label>
                <input
                  type={
                    input.name === "password"
                      ? showpassword
                        ? "text"
                        : "password"
                      : input.type
                  }
                  name={input.name}
                  placeholder=""
                  value={formData[input.name]}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-4 text-sm text-head outline-none placeholder-second bg-transparent"
                />
                {input.name === "password" && (
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(!showpassword)}
                  >
                    {showpassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                )}
              </div>
              {errors[input.name] && (
                <span className="text-xs text-red-500">
                  {errors[input.name]}
                </span>
              )}
            </div>
          ))}
          {errors.firebase && (
            <span className="text-xs text-red-500 mb-2">{errors.firebase}</span>
          )}
          <div className="flex justify-between items-center mb-6.5">
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
          <button
            type="submit"
            className="w-full bg-head text-white pt-5.5 pb-3.5 text-[14px] font-medium hover:bg-[#DB4444] transition-all leading-6 mb-6"
          >
            LOG IN
          </button>
          <p className="text-center text-sm text-gray-500">
            No account yet?{" "}
            <span
              onClick={() => switchTab("register")}
              className="text-black font-semibold underline cursor-pointer"
            >
              Create Account
            </span>
          </p>
        </form>
      )}

      {activeTab === "register" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegSubmit();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleRegSubmit();
            }
          }}
          className="flex flex-col"
        >
          {Success && (
            <div className="bg-green-50 border border-footer text-green-700 px-4 py-3 text-sm">
              ✅ Account created! Verification email sent.
            </div>
          )}
          {registerInputs.map((input, index) => (
            <div
              key={input.id}
              className={`flex flex-col gap-1 ${index === 0 ? "mb-7.25" : "mb-7.5"}`}
            >
              <div
                className={`relative ${input.name === "password" || input.name === "confirmpassword" ? "border border-footer focus-within:border-black transition-colors" : ""}`}
              >
                {(input.name === "password" ||
                  input.name === "confirmpassword") && (
                  <label className="absolute -top-2.5 left-3 bg-white px-1 leading-6 text-[14px] text-head">
                    {input.placeholder} <span className="text-red-500">*</span>
                  </label>
                )}
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={formdata[input.name]}
                  onChange={handleRegChange}
                  className={`w-full px-4 py-4 text-sm text-gray-700 outline-none placeholder-gray-400 transition-colors ${input.name === "password" || input.name === "confirmpassword" ? "bg-transparent border-0" : "border border-footer focus:border-black"}`}
                />
                {input.name === "password" && (
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                  >
                    {showRegPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                )}
                {input.name === "confirmpassword" && (
                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                )}
              </div>
              {regErrors[input.name] && (
                <span className="text-xs text-red-500">
                  {regErrors[input.name]}
                </span>
              )}
            </div>
          ))}
          {regErrors.firebase && (
            <span className="text-xs text-red-500">{regErrors.firebase}</span>
          )}
          <p className="text-sm text-gray-500 leading-relaxed">
            Your personal data will be used to support your experience
            throughout this website.{" "}
            <span
              onClick={() => router.push("/privacy-policy")}
              className="text-black underline cursor-pointer"
            >
              privacy policy
            </span>
            .
          </p>
          <button
            type="submit"
            className="w-full bg-head text-white pt-5.5 pb-3.5 text-[14px] font-medium hover:bg-[#DB4444] transition-all leading-6 mt-3.5 mb-6"
          >
            REGISTER
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => switchTab("login")}
              className="text-black font-semibold underline cursor-pointer"
            >
              Log In
            </span>
          </p>
        </form>
      )}
    </div>
  );

  if (user && !showLoginModal) {
    return (
      <section>
        <div className="container pt-43 pb-25">
          <div className="px-5 max-w-162.75 mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondbg flex items-center justify-center mx-auto mb-5 border border-footer">
              <span className="text-3xl font-medium text-head">
                {(user.displayName || user.email)?.[0]?.toUpperCase()}
              </span>
            </div>
            <h2 className="texts_16_medium text-head tracking-widest mb-2">
              {user.displayName || "My Account"}
            </h2>
            <p className="texts_14_regular text-second mb-10">{user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-head text-white pt-5.5 pb-3.5 text-[14px] font-medium hover:bg-[#DB4444] transition-all leading-6 tracking-widest"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (showLoginModal) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLoginModal();
        }}
      >
        <div className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto relative py-10">
          <button
            onClick={closeLoginModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl z-10 cursor-pointer"
          >
            ✕
          </button>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="container pt-43 pb-25">{formContent}</div>
    </section>
  );
};

export default RegiLog;
