"use client";
import { useState } from "react";
import { account } from "../appwrite";
import { ID } from "appwrite";

export default function Login() {
  const [signupFullName, setSignupFullName] = useState<string>("");
  const [signupEmail, setSignupEmail] = useState<string>("");
  const [signupPassword, setSignupPassword] = useState<string>("");
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [isSignup, setIsSignup] = useState<boolean>(false);

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await account.create(
        ID.unique(),
        signupEmail,
        signupPassword,
        signupFullName
      );
      console.log(response, "Account created successfully");
      window.location.href = "/dashboard";
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Something went wrong");
    }
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(loginEmail, loginPassword);
    try {
      const response = await account.createEmailPasswordSession(
        loginEmail,
        loginPassword
      );
      // console.log(response, "Logged in successfully");
      window.location.href = "/dashboard";
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Something went wrong");
    }
  }

  return (
    <main className="mainContainer">
      <div className="divContainer">
        {isSignup ? (
          <div>
            <h1 className="h1Container">Sign Up</h1>
            <form onSubmit={handleSignUp} className="space-y-4">
              <input
                className="inputContainer"
                type="fullName"
                name="fullName"
                placeholder="Full Name"
                value={signupFullName}
                onChange={(e) => setSignupFullName(e.target.value)}
              />
              <input
                className="inputContainer"
                type="email"
                name="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
              <input
                className="inputContainer"
                type="password"
                name="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <button className="buttonContainer" type="submit">
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                className="inputContainer"
                type="email"
                name="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input
                className="inputContainer"
                type="password"
                name="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button className="buttonContainer" type="submit">
                Log In
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
