import { Link } from "react-router-dom";

export const Navbar = () => {
    const scroll = () => {
        window.scrollTo({ top:0, behavior: "smooth" });
    };

    return (
        <nav className="flex items-center bg-brand-blue justify-between px-6 py-3">
        <Link to="/"> <img src="/logo.png" alt="Taskvive" className="h-14 w-36 cursor-pointer"/> </Link   >

            <ul className="flex gap-6">
                <li className="hover:border-b-2 border-black">
                    <Link to="/">About Us</Link>
                </li>

                <li className="hover:border-b-2 border-black">
                    <Link to="/">Contact us</Link>
                </li>

                <li className="hover:border-b-2 border-black">
                    <Link to="/" onClick={scroll}>
                        Features
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
