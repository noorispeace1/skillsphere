"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSignOut = async () => {
        await authClient.signOut();
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => pathname === path;

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100" : "bg-transparent py-2"
        }`}>
            <nav className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto w-full">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-1">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                priority
                                width={32}
                                height={32}
                                className="object-cover bg-white rounded-lg p-1 group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                            SkillSphere
                        </h3>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Courses", path: "/courses" },
                        { name: "My Profile", path: "/profile" }
                    ].map((item) => (
                        <li key={item.path}>
                            <Link 
                                href={item.path} 
                                className={`text-sm font-semibold transition-all duration-200 hover:text-indigo-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full ${
                                    isActive(item.path) ? "text-indigo-600 after:w-full" : "text-gray-600"
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Auth Buttons / User Profile */}
                <div className="hidden md:flex items-center gap-4 min-w-[200px] justify-end">
                    {userData.isPending ? (
                        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    ) : !user ? (
                        <div className="flex items-center gap-3">
                            <Link href="/auth/login">
                                <Button 
                                    variant="light" 
                                    className="font-semibold text-gray-300 hover:text-white transition-colors"
                                >
                                    Sign In
                                </Button>
                            </Link>
                            <Link href="/auth/register">
                                <Button 
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                                    radius="full"
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <div className="flex-col items-end hidden lg:flex">
                                <span className="text-sm font-bold text-gray-200">{user?.name || "User"}</span>
                                <span className="text-xs text-gray-400 font-medium">{user?.email}</span>
                            </div>
                            <Link href="/profile">
                                <Avatar
                                    isBordered
                                    color="secondary"
                                    src={user?.image || undefined}
                                    name={user?.name?.charAt(0)?.toUpperCase() || "U"}
                                    className="cursor-pointer transition-transform hover:scale-105"
                                />
                            </Link>
                            <Button 
                                onClick={handleSignOut} 
                                className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white font-semibold transition-colors"
                                size="sm"
                                radius="full"
                            >
                                Sign Out
                            </Button>
                        </div>
                    )}
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={toggleMenu} 
                        className="text-gray-300 p-2 rounded-full hover:bg-gray-800 transition-colors focus:outline-none"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
                isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
            }`}>
                <div className="flex flex-col px-6 py-8 space-y-6">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Courses", path: "/courses" },
                        { name: "My Profile", path: "/profile" }
                    ].map((item) => (
                        <Link 
                            key={item.path}
                            href={item.path} 
                            onClick={closeMenu} 
                            className={`font-semibold text-xl transition-colors ${
                                isActive(item.path) ? "text-indigo-600" : "text-gray-800 hover:text-indigo-600"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="border-t border-gray-100 pt-6 mt-4">
                        {!user ? (
                            <div className="flex flex-col gap-4">
                                <Link href="/auth/login" onClick={closeMenu} className="w-full">
                                    <Button 
                                        variant="flat" 
                                        className="w-full justify-center font-semibold text-lg py-6"
                                        radius="full"
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href="/auth/register" onClick={closeMenu} className="w-full">
                                    <Button 
                                        className="w-full justify-center font-semibold text-lg py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                                        radius="full"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                                    <Avatar
                                        isBordered
                                        color="secondary"
                                        src={user?.image}
                                        name={user?.name?.charAt(0) || "U"}
                                        size="lg"
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-900 text-lg">{user?.name}</span>
                                        <span className="text-sm text-gray-500">{user?.email}</span>
                                    </div>
                                </div>
                                <Button 
                                    onClick={handleSignOut} 
                                    color="danger" 
                                    variant="flat" 
                                    className="w-full font-semibold py-6"
                                    radius="full"
                                >
                                    Sign Out
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;