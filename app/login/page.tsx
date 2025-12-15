import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        
        {/* heading */}
         <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 font-istok">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-2">
            Sign in to your account
          </p>
        </div>

        {/* login form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <LoginForm />
          
          {/* link to register page */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link 
                href="/register" 
                className="text-pinkMain font-medium hover:text-pink-600"
              >
                Sign up
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