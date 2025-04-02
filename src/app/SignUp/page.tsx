"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import signUpImage from "@/img/sign-up.png";
import { signUpUser } from "@/controllers/api";

const SignUp: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordWeak, setIsPasswordWeak] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const isStrongPassword = (password: string) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  useEffect(() => {
    setIsPasswordWeak(!isStrongPassword(password));
  }, [password]);

  const handleNext = () => {
    if (step === 1 && isEmailValid) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2 && password && password === confirmPassword) {
      try {
        const response = await signUpUser(email, password);
        console.log("Sign-up successful:", response);
        alert("Sign-up successful! Please log in.");
      } catch (error) {
        console.error("Sign-up failed:", error);
        alert("Sign-up failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <div className="pb-6">
          <h1 className="text-4xl font-bold">Create your account</h1>
          <h2 className="text-xl text-gray-500">
            Sign up to explore your favorite dishes.
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <div className="rounded-md border-[1px] min-w-[416px] min-h-9 flex items-center mb-6">
                <input
                  className="pl-2 w-full focus:outline-none"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <button
                className={`rounded-md min-w-[416px] min-h-9 ${
                  isEmailValid ? "bg-blue-500" : "bg-[#d1d1d1]"
                } text-[#FAFAFA] mb-2`}
                type="button"
                onClick={handleNext}
                disabled={!isEmailValid}
              >
                Lets Go
              </button>
              {!isEmailValid && email && (
                <p className="text-red-500 text-sm">
                  Invalid email. Use a format like example@email.com
                </p>
              )}
            </div>
          )}
          {step === 2 && (
            <div>
              <div className="rounded-md border-[1px] min-w-[416px] min-h-9 flex items-center mb-6">
                <input
                  className="pl-2 w-full focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              {isPasswordWeak && (
                <p className="text-red-500 text-sm">
                  Password is weak. Use at least 8 characters, including
                  uppercase, lowercase, numbers, and special characters.
                </p>
              )}
              <div className="rounded-md border-[1px] min-w-[416px] min-h-9 flex items-center mb-6">
                <input
                  className="pl-2 w-full focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              {password && confirmPassword && password !== confirmPassword && (
                <p className="text-red-500 text-sm">Passwords do not match.</p>
              )}
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="show-password"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="show-password" className="ml-2 text-gray-500">
                  Show Password
                </label>
              </div>
              <button
                className="rounded-md min-w-[416px] min-h-9 bg-gray-300 text-black mr-2"
                type="button"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className={`rounded-md min-w-[416px] min-h-9 ${
                  password && password === confirmPassword && !isPasswordWeak
                    ? "bg-blue-500"
                    : "bg-[#d1d1d1]"
                } text-[#FAFAFA]`}
                type="submit"
                disabled={
                  !password || password !== confirmPassword || isPasswordWeak
                }
              >
                Submit
              </button>
            </div>
          )}
        </form>
        <div className="flex items-center justify-center">
          <p className="text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>

      <div className="mr-5 my-5 pl-[48px]">
        <Image
          src={signUpImage}
          alt="Description of the image"
          width={856}
          height={904}
        />
      </div>
    </div>
  );
};

export default SignUp;
