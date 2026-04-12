import React, { useState } from "react";
import Input from "../../../shared/components/Input";

import Button from "../../../shared/components/Button";
import { useAuth } from "../hooks/useAuth";


const RegisterPage = () => {


   let {register, handleSubmit, handleRegisterFormSubmit ,errors, navigate} =  useAuth()


  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 sm:p-8">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 space-y-6 relative overflow-hidden">
        {/* Subtle decorative blob in top-right */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-bl-full -mr-12 -mt-12" />

        {/* Header */}
        <div className="text-center space-y-3 pt-4 sm:pt-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm mx-auto px-2">
            Please enter your credentials to access the administrative
            dashboard.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegisterFormSubmit)} className="space-y-5 mb-5">
          {/* name Field */}


          <Input
            register={register}
            name={"name"}
            // rules={{ require: "email is requird" }}
            rules={{ required: "name is required" }}
            placeholder={"name"}
            type={"text"}
            label={"name"}
            error={errors.name}
          />


          {/* Email Field */}
          <Input
            register={register}
            name={"email"}
            // rules={{ require: "email is requird" }}
            rules={{ required: "Email is required" }}
            placeholder={"Email"}
            type={"email"}
            label={"Email"}
            error={errors.email}
          />

          {/* Password Field */}

          <Input
            register={register}
            name={"password"}
            rules={{
              required: "password is requird",
              minLength: {
                value: 6,
                message: "at least 6 char are required"
              }
            }}
            placeholder={"password"}
            type={"password"}
            label={"password"}
            error={errors.password}
          />

          {/* Sign In Button */}
          <Button text={'register as admin'} />
        </form>
        <div>
          <p>
            already have a account?{" "}
            <span onClick={() => navigate('/')} className="text-blue-600 cursor-pointer">login here</span>
          </p>
        </div>

        {/* SSL Indicator */}
        <div className="flex justify-center pt-6 pb-4 border-t border-gray-200/50">
          <div className="flex items-center space-x-1.5 text-xs text-green-600 font-medium">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>SSL Encrypted Session</span>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex justify-center space-x-8 pt-4">
          <a
            href="#"
            className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors duration-150 uppercase tracking-wider"
          >
            Help
          </a>
          <a
            href="#"
            className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors duration-150 uppercase tracking-wider"
          >
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
