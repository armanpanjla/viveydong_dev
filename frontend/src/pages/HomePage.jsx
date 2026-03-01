import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Zap, LayoutGrid, BarChart3 } from "lucide-react";
import { Footer } from '../components/layout/Footer'
import { Navbar } from "../components/layout/Navbar";

export const HomePage = () => {
    const navigate = useNavigate();

    const [isExpanded, setisExpanded] = useState(false);

    const handleStart = () => {
        navigate("/login");
    };

    return (

        <div className="min-h-screen bg-brand-blue text-indigo-500 font-sans">

            {/* Navbar Placeholder (Matches the 'Taskvive' and 'Menu' in your screenshot) */}
            {/* Main Split Layout */}
            <Navbar />

            <div className="flex flex-col md:flex-row h-screen">

                {/* --- LEFT SIDE: TEXT CONTENT --- */}
                <div className="w-full md:w-5/12 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20">

                    {/* Elegant Serif Heading */}
                    <h1 className="font-serif text-5xl md:text-6xl text-indigo-500 mb-6 leading-tight">
                        Manage Your Tasks
                    </h1>

                    {/* Description Text */}
                    <p className="text-sm md:text-base text-indigo-500 leading-relaxed mb-10 max-w-xs">
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
                    <div className="mt-24  h-full bg-gray-100 overflow-hidden rounded-t-xl">
                        <img src="/secondary.png" className="mt-28  object-cover bg-brand-blue" />
                    </div>
                </div>

                {/* --- RIGHT SIDE: LARGE HERO IMAGE --- */}
                <div className="w-full md:w-8/12 h-full bg-gray-100 relative">
                    {/* Replace src with your actual monitor image URL */}
                    <img
                        src="taskvivehero.png"
                        alt="Taskvive App on Monitor" x
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>

            {/*vision section*/}

            <div className="flex  items-start gap-8 font-sans justify-between w-auto mb-10 mt-18 ml-24">

                <span className="mr-28 text-indigo-500 leading-relaxed text-5xl font-serif whitespace-nowrap">Vision</span>

                <p className={`items-center  text-base text-center  mt-3 md:text-base max-h-3/6  max-w-md text-gray-500 leading-relaxed  ${isExpanded ? "" : "line-clamp-2"}`}>

                    TaskVive is more than just a checklist; it is a comprehensive productivity ecosystem designed for modern workflows.
                    We combine intuitive task management with powerful tracking tools to help individuals and teams streamline their operations.
                    By centralizing your goals, deadlines, and collaboration in one secure platform, TaskVive eliminates the friction of switching between apps,
                    allowing you to reclaim your time and maximize your output.
                </p>
                <button onClick={() => setisExpanded(!isExpanded)} className="whitespace-nowrap h-fit self-start border border-indigo-400 text-indigo-500  rounded-full hover:bg-indigo-50 w-fit mr-8  px-6 py-2">{isExpanded ? "show less" : "show more"}</button>

            </div>

            {/*img */}
            <div className="mt-28">
                <img src="bigimg.jpg"
                    alt="taskviveoncomputer"
                    className="w-full g-full object-center" />
            </div>

            {/*function section*/}
            <section className="bg-indigo-100 font-serif text-indigo-600 ">
                <div>
                    <h2 className="font-serif text-4xl px-11 pt-9 text-indigo-400">Why TaskVive?</h2>
                    <h2 className="text-indigo-400  m-11 ">Everything you need to stay organized, without the clutter.</h2>
                </div>
                <div className="flex flex-col ml-auto w-1/2 ">
                    <div className="flex gap-3 p-8">
                        <div>
                            <Zap size={24} className="mt-1 " />
                        </div>
                        <div>
                            <h2>Lightning Fast</h2>
                            <p className="pt-6">Add tasks in seconds. Our minimalist interface is built for speed, so you spend less time managing and more time doing.</p>
                        </div>
                    </div>

                    <div className="flex gap-3 p-8">
                        <div className="mt-1 ">
                            <LayoutGrid size={24} />
                        </div>
                        <div>
                            <h2>Smart Organization</h2>
                            <p className="pt-6">Automatically sort tasks by priority or deadline. Group your work into projects to keep your personal and work life separate.</p>
                        </div>
                    </div>

                    <div className="flex gap-3 p-8">
                        <div className="mt-1 ">
                            <BarChart3 size={24} />
                        </div>
                        <div>
                            <h2>Insightful Analytics</h2>
                            <p className="pt-6">Visualize your productivity. See your completion rates and peak performance hours with beautiful, simple charts.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};
