import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="w-full bg-white font-istok py-8">
            <div className="container mx-auto px-8">
                <div className=" flex flex-col items-center justify-center text-pinkMain">

                    {/* site's name */}
                    <div className="text-center mb-6">
                        <div className="text-5xl font-bold leading-tight">
                            <div>MY</div>
                            <div>BLOG</div>
                        </div>
                    </div>

                    {/* social icons */}
                    <div className="flex items-center justify-center gap-6 mb-6">
                        <a
                        href="https://github.com/natemma"
                        >
                            <FiGithub className="text-3xl"/>
                        </a>
                    
                        <a
                        href="https://google.com"
                        >
                            <FcGoogle className="text-3xl"/>
                        </a>
                        <a
                        href="https://vk.com/nnatema"
                        >
                            <FaVk className="text-3xl"/>
                        </a>
                        <a
                        href="https://web.telegram.org/#@igviur"
                        >
                            <FaTelegramPlane className="text-3xl"/>
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-lg">© 2025</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}