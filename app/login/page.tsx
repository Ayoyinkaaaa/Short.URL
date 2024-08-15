"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { auth } from "@/app/firebase/config";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, form.email, form.password);
      if (res?.user) {
        router.push("/Dashboard");
      }
      console.log(res);
      console.log("login Successfully");
    } catch (error) {
      console.log("Error during sign up:", error);
      let errorMessage = "An error occurred while signing up";
    }
  };

  return (
    <main className="flex justify-center items-center h-screen ">
      <div className="w-[400px] bg-white shadow-lg rounded-xl p-8">
        <form>
          <p className="text-center font-extrabold mb-4 text-3xl text-gray-800">Welcome Back</p>
          <p className="text-center text-gray-600 mb-8">Login to your account</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700" htmlFor="Email">Email</label>
              <input
                value={form.email}
                onChange={handleChange}
                name="email"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700" htmlFor="Password">Password</label>
              <input
                value={form.password}
                onChange={handleChange}
                name="password"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              onClick={handleSignIn}
              className="w-full py-3 font-bold bg-blue-900 hover:bg-blue-900 text-white rounded-lg transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-900 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
