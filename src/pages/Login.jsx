import { BookOpen, GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/auth/login-form"
import { Link } from "react-router"
export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            to='/'
            className='flex items-center gap-2 font-bold text-xl text-gray-900'
          >
            <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white'>
              <BookOpen className='h-5 w-5' />
            </div>
            <span>PeerLearn</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/auth-img.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
