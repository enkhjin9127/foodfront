"use client";
import { useState } from "react";
import Image from "next/image";
import signUpImage from "@/img/sign-up.png";
import { signInUser } from "@/controllers/api";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isPasswordWeak, setIsPasswordWeak] = useState(true);

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  const isStrongPassword = (pass: string) =>
    pass.length >= 8 && /[A-Z]/.test(pass) && /\d/.test(pass);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(emailRegex.test(value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordWeak(!isStrongPassword(value));
  };

  const handleLogin = async () => {
    if (isValidEmail && !isPasswordWeak) {
      try {
        const response = await signInUser(email, password);
        console.log("Login successful:", response);
        alert("Login successful!");

        localStorage.setItem("authToken", response.token);
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials and try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="text-2xl font-bold">Log in</h2>
        <p className="text-gray-500">Log in to enjoy your favorite dishes.</p>

        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 mt-4 border rounded-md"
        />
        {!isValidEmail && email.length > 0 && (
          <p className="text-red-500 text-sm mt-1">Invalid email format</p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-2 mt-4 border rounded-md"
        />
        {isPasswordWeak && password.length > 0 && (
          <p className="text-red-500 text-sm mt-1">
            Password must be at least 8 characters, include a number & uppercase
            letter
          </p>
        )}

        <a href="#" className="text-blue-500 mt-3 text-sm">
          Forgot password?
        </a>

        <button
          className={`w-full p-2 mt-4 rounded-md ${
            isValidEmail && !isPasswordWeak
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleLogin}
          disabled={!(isValidEmail && !isPasswordWeak)}
        >
          Lets Go
        </button>

        <p className="text-gray-500 mt-4">
          Don&apos;t have an account?{" "}
          <a href="/signUp" className="text-blue-500">
            Sign up
          </a>
        </p>
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
}
