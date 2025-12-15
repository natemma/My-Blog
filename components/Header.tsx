import Image from "next/image";
import {FiSearch, FiLogIn} from "react-icons/fi";


export default function Header(){
    return(
        <header className ="w-full bg-pinkMain font-istok flex items-center justify-between px-8 py-4 shadow-sm">

            {/* Logo and site's name */}
            <div className="flex items-center gap-3">
                <Image
                    src="/img/logooo.png"
                    alt="logo"
                    width={85}
                    height={85}
                    className="rounded-full"
                />
                <div className="text-cremeMain font-bold text-3xl leading-tight">
                    <div>MY</div>
                    <div>BLOG</div>
                </div>
            </div>

            {/*Navigation */}
            <nav className="flex items-center gap-10 text-cremeMain font-medium text-2xl">
                <a href="/">Home</a>
                <a href="/categories">Categories</a>
            </nav>

             {/*Search + LogIn */}
            <div className="flex items-center gap-6 text-xl">
            
                {/* Search Bar */}
                <div className="flex items-center bg-cremeMain text-pinkMain px-4 py-2 rounded-full shadow-sm">
                <input
                    type="text"
                    placeholder="Find"
                    className="bg-transparent outline-none placeholder-pinkMain text-pinkMain"
                />
                    <FiSearch className="ml-2" />
                </div>

                {/* Sign up */}
                <a
                    href="/register"
                    className="flex items-center gap-2 text-cremeMain hover:opacity-80"
                >
                    <FiLogIn />
                    <span>Log In / Sign Up</span>
                </a>
            </div>
        </header>
    );
}