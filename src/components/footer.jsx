import Link from "next/link";

// Custom SVGs since Lucide removed brand icons
const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8 border-b border-gray-800 pb-8">
                    
                    {/* Brand and Description */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                                S
                            </div>
                            <span className="text-white font-bold text-xl tracking-tight">SkillSphere</span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Empowering learners worldwide to achieve their goals through premium online education and community building.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
                            <li><Link href="/all-photos" className="hover:text-indigo-400 transition-colors">Explore Courses</Link></li>
                            <li><Link href="/profile" className="hover:text-indigo-400 transition-colors">My Profile</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/privacy-policy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookie-policy" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 hover:text-white transition-all text-gray-400">
                                <Facebook size={18} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 hover:text-white transition-all text-gray-400">
                                <Twitter size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 hover:text-white transition-all text-gray-400">
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 hover:text-white transition-all text-gray-400">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed with ❤️ for learners everywhere.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
