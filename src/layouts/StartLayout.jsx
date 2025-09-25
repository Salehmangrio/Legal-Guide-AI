import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Scale } from 'lucide-react';
import Footer from '../pages/Footer';

const StartLayout = () => {
    return (
        <div>
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/">
                            <div className="flex items-center space-x-3">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                                    <Scale className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold text-gray-900">Legal Guide AI</span>
                            </div>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</Link>
                            <Link to="/stats" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Stats</Link>
                            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonials</Link>
                            <Link to="/cta" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all transform hover:scale-105 font-semibold">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Main Content */}
            <Outlet />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default StartLayout;
