'use client'
import Link from "next/link";
import { FcManager } from "react-icons/fc";
import usePostData from "@/hooks/usePostData";
import { useEffect } from "react";
import { toast } from "react-toast";
import Loader from "@/lib/Loader";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/userSlice";

const Login = () => {
  const { postData, loading, error } = usePostData();
  const dispatch = useDispatch();

  if(loading) {
    <Loader/>
  }
    useEffect(() => {
      if (error) {
        toast(error);
      }
    }, [error]);
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    try {
      const user = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      }
      // Then send user data to your backend
      const registerRes = await postData("/api/v1/login", user);
      if (registerRes) {
        dispatch(loginUser({
          user: registerRes.data,
          token: registerRes.token,
        }));
        localStorage.setItem("user", JSON.stringify(registerRes.data));
        localStorage.setItem("token", registerRes.token);
        toast("User Login successfully");
        form.reset();
      }
    } catch (err) {
      if(err instanceof Error) {
        console.log(err.message)
      }
    }
  }
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F7F7F7]">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg relative">
          
  
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign in</h2>
  
          <form onSubmit={handleLogin} className="space-y-5">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Username or email address <span className="text-red-500">*</span>
    </label>
    <input
      name="email"
      type="text"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Password <span className="text-red-500">*</span>
    </label>
    <div className="relative">
      <input
        name="password"
        type="password"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button type="button" className="absolute right-2 top-2.5 text-gray-400 hover:text-black">
        👁️
      </button>
    </div>
  </div>

  <button
    type="submit"
    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded"
  >
    SIGN IN
  </button>

  
            <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
              <a href="#" className="hover:underline text-pink-600">Lost your password?</a>
            </div>
          </form>
  
          <div className="text-center mt-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-gray-200 mb-2">
            <FcManager className='w-12 h-12 rounded-full' />

            </div>
            <p className="text-sm text-gray-600">No account yet?</p>
            <Link href="/register" className="text-sm font-semibold text-gray-800 hover:text-pink-600 underline">
              CREATE AN ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Login;