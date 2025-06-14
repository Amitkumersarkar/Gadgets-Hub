import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-200 shadow-lg p-4">
            <h2 className="text-xl font-semibold border-b-1 border-y-cyan-700 mb-4">Filters</h2>
            <ul className="space-y-2">
                <NavLink to='/'><li><button className="text-gray-700 hover:text-blue-600">All Products</button></li></NavLink>
                <li><button className="text-gray-700 hover:text-blue-600">Laptops</button></li>
                <li><button className="text-gray-700 hover:text-blue-600">Phones</button></li>
                <li><button className="text-gray-700 hover:text-blue-600">Accessories</button></li>
                <li><button className="text-gray-700 hover:text-blue-600">Smart Watches</button></li>
                <li><button className="text-gray-700 hover:text-blue-600">MacBook</button></li>
                <li><button className="text-gray-700 hover:text-blue-600">Iphone</button></li>
            </ul>
        </aside>
    );
};

export default Sidebar;