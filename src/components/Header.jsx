import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className="container navbar bg-base-100 mx-auto my-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <h2 className="text-xl lg:text-3xl font-bold whitespace-nowrap">Recipe Calories</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <label className="input flex items-center gap-2 rounded-full bg-[#150B2B0D] invisible lg:visible">
                    <CiSearch className="text-2xl" />
                    <input type="text" className="grow" placeholder="Search" />
                </label>
                <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 lg:w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;