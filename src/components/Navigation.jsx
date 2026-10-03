import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center px-4 py-3 border-b w-full h-16 navigation">
            <Link to="/" className="flex items-center gap-2 w-10">
                <img src="/icon.svg" alt="Sniplink logo" />
                <h3 className="font-extrabold text-2xl font_oswald">Shortly</h3>
            </Link>

            <div className="flex items-center gap-3">
                <Link
                    to="/login"
                    className="px-4 py-1.5 font-medium text-sm hover:underline"
                >
                    Login
                </Link>
                <Link
                    to="/signup"
                    className="bg-black hover:bg-gray-800 px-5 py-1.5 rounded-full font-medium text-white text-sm transition"
                >
                    Sign up
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
