import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login, signup } from "../features/authslice";
import { useNavigate } from "react-router-dom";
import buttonLoader from "./../assets/button-loader.gif";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing effect
      once: false, // Animation occurs only once
    });
  }, []);

  const handleLogin = async (data) => {
    try {
      const session = await dispatch(login(data)).unwrap();
      if (session) {
        navigate("/");
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  const handleSignup = async (data) => {
    try {
      const session = await dispatch(signup(data)).unwrap();
      if (session) {
        const loginResult = await dispatch(login(data)).unwrap();
        if (loginResult) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log("Error during signup or login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative flex h-[600px] w-[900px] bg-gradient-to-b from-purple-400 to-purple-600 bg-opacity-10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20">
        {/* Black Background Panel */}
        <div
          className={`absolute top-0 w-1/2 h-full bg-gradient-to-b from-purple-400 to-purple-800 transition-all duration-[2000ms] ease-in-out z-10
            ${isLogin ? 'translate-x-0 rotate-0 opacity-100 left-1/2' : 'opacity-100 rotate-180 left-0'}`}
        >
          <div data-aos="fade-left" className="h-full w-full flex flex-col items-center justify-center text-white p-8">
            <h2 className={`text-4xl font-bold mb-6"
              ${isLogin ? 'rotate-0' : 'text-[16px] font-normal rotate-180'}`}
            >
              {isLogin ? 'Welcome Back!' : 'Sign up and discover great opportunities!?'}
            </h2>
            <p className={`text-center mb-8
              ${isLogin ? 'rotate-0' : 'rotate-180 font-bold text-[34px]'}`}
            >
              {isLogin
                ? "Login to access your account and continue your journey!"
                : "New Here?"}
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className={`absolute top-28 w-[85%] ml-[3.7%] h-full transition-all duration-[2000ms] ease-in-out 
          ${isLogin ? "translate-x-0 rotate-0 opacity-100" : "-translate-x-[120%] -rotate-90 opacity-0"
          } transform`}>
          <div className="w-1/2 p-8 bg-white/10 rounded-lg shadow-lg">
            <h2 data-aos="fade-right" className="text-3xl font-extrabold text-white text-center mb-6">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
              <div>
                <input type="text" placeholder="Username" {...register("username", { required: "Username is required" })} data-aos="fade-right" className="w-full p-3 bg-white/20 text-white rounded-lg border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white" />
                {errors.username && <p className="text-red-400 text-sm">{errors.username.message}</p>}
              </div>
              <div>
                <input type="password" placeholder="Password" {...register("password", { required: "Password is required" })} data-aos="fade-right" className="w-full p-3 bg-white/20 text-white rounded-lg border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white" />
                {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
              </div>
              <div data-aos="fade-right">
                <button type="submit" className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                  {false ? <img src={buttonLoader} alt="Loading..." className="w-6 h-6 mx-auto" /> : "Login"}
                </button> 
              </div>
            </form>
            <p data-aos="fade-right" className="mt-4 text-center text-white text-sm">
              Don't have an account?
              <span onClick={() => setIsLogin(false)} className="text-blue-300 cursor-pointer hover:underline"> Sign Up</span>
            </p>
          </div>
        </div>

        {/* Signup Form */}
        <div className={`absolute top-0 w-[87%] ml-[31.5%] h-full flex items-center justify-center transition-all duration-[2000ms] ease-in-out
          ${!isLogin ? "translate-x-0 rotate-0 opacity-100" : "translate-x-[120%] rotate-90 opacity-0"
          } transform`}>
          <div className="w-1/2 p-8 bg-white/10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-extrabold text-white text-center mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignup)} className="space-y-6">
              <div>
                <input type="text" placeholder="Username" {...register("username", { required: "Username is required" })} className="w-full p-3 bg-white/20 text-white rounded-lg border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-white" />
                {errors.username && <p className="text-red-400 text-sm">{errors.username.message}</p>}
              </div>
              <div>
                <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} className="w-full p-3 bg-white/20 text-white rounded-lg border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-white" />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
              </div>
              <div>
                <input type="password" placeholder="Password" {...register("password", { required: "Password is required" })} className="w-full p-3 bg-white/20 text-white rounded-lg border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-white" />
                {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
              </div>
              <div>
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: "Confirm Password is required" })} className="w-full p-3 bg-white/20 text-white rounded-lg border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-white" />
                {errors.confirmPassword && <p className="text-red-400 text-sm">{errors.confirmPassword.message}</p>}
              </div>
              <button type="submit" className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-transform transform hover:scale-105">
                {false ? <img src={buttonLoader} alt="Loading..." className="w-6 h-6 mx-auto" /> : "Sign Up"}
              </button>
            </form>
            <p className="mt-4 text-center text-white text-sm">
              Already have an account?
              <span onClick={() => setIsLogin(true)} className="text-purple-300 cursor-pointer hover:underline"> Login</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
