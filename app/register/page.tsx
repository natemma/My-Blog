import RegisterForm from "@/components/auth/RegisterForm";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        
        {/* Логотип и заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 font-istok">
            Create account
          </h1>

        </div>

        {/* registration form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <RegisterForm />
          
          {/* link to login page */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link 
                href="/login" 
                className="text-pinkMain font-medium hover:text-pink-600"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* back to home button */}
        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-gray-700"
          >
            ← Back to home
          </Link>
        </div>

      </div>
    </div>
  );
}