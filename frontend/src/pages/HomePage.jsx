import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";

export const HomePage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/loginpage");
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            
            {/* Navbar Placeholder (Matches the 'Taskvive' and 'Menu' in your screenshot) */}
            {/* Main Split Layout */}
            <div className="flex flex-col md:flex-row h-screen">
                
                {/* --- LEFT SIDE: TEXT CONTENT --- */}
                <div className="w-full md:w-5/12 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20">
                    
                    {/* Elegant Serif Heading */}
                    <h1 className="font-serif text-5xl md:text-6xl text-indigo-500 mb-6 leading-tight">
                        Manage Your Tasks
                    </h1>
                    
                    {/* Description Text */}
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-10 max-w-xs">
                        Stay organized and boost productivity with Taskvive, 
                        your minimalist task management solution. 
                        Experience effortless planning and tracking with our intuitive interface.
                    </p>
                    
                    {/* Outline "Pill" Button */}
                    <button
                        onClick={handleStart}
                        className="w-fit px-8 py-3 border border-indigo-400 text-indigo-500 rounded-full hover:bg-indigo-50 transition-colors duration-200 text-sm font-medium"
                    >
                        Get Started
                    </button>
                    {/* Optional: Bottom left image hint (from your screenshot) */}
                    <div className="mt-12 w-full h-48 bg-gray-100 overflow-hidden rounded-t-xl">
                        <img src="/secondary.png" className="w-full object-cover" />
                    </div>
                </div>

                {/* --- RIGHT SIDE: LARGE HERO IMAGE --- */}
                <div className="w-full md:w-7/12 h-full bg-gray-100 relative">
                    {/* Replace src with your actual monitor image URL */}
                    <img 
                        src="taskvivehero.png" 
                        alt="Taskvive App on Monitor" x
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
};