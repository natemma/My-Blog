'use client';
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import {FiSearch, FiLogIn, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { GetAllCategories } from '@/lib/api';


export default function Header(){
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
     useEffect(() => {
  async function fetchCategories() {
    const res = await fetch('/api/categories');
    const data = await res.json();
    setCategories(data);
  }

  fetchCategories();
}, []);
    // close menu 
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsCategoriesOpen(false);
        }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


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
                 {/* Categories Dropdown */}
                <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    Categories
                    <FiChevronDown className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isCategoriesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-bold text-gray-800">All Categories</h3>
                    </div>
                    
                    <div className="max-h-80 overflow-y-auto">
                        {categories.map((category: Category ) => (
                        <Link
                            key={category.id}
                            href={`/categories/${category.slug}`}
                            onClick={() => setIsCategoriesOpen(false)}
                            className="flex items-center justify-between px-4 py-3 hover:bg-pinkMain/10 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-pinkMain group-hover:scale-125 transition-transform"></div>
                            <span className="text-gray-700 group-hover:text-pinkMain font-medium">
                                {category.name}
                            </span>
                            </div>
                            <span className="text-gray-400 text-sm bg-gray-100 px-2 py-1 rounded-full">
                            {category.postsCount}
                            </span>
                        </Link>
                        ))}
                    </div>
                    
                    </div>
                )}
                </div>
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