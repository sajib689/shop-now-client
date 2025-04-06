import { FcManager } from "react-icons/fc";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#F7F7F7]">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg relative">
          
  
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign in</h2>
  
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username or email address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
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
              LOG IN
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
            <a href="#" className="text-sm font-semibold text-gray-800 hover:text-pink-600 underline">
              CREATE AN ACCOUNT
            </a>
          </div>
        </div>
      </div>
    );
};

export default Login;