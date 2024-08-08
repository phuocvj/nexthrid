// pages/forgot-password.js
export default function ForgotPassword() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-96">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Forgot Password</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 transition duration-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    );
  }
  