import { Link, NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
                <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    <Link to="/" className="p-6 bg-purple-100 rounded-lg hover:shadow">
                        <h2 className="text-xl font-semibold">Home</h2>
                        <p className="text-sm text-gray-600">Go back to the homepage.</p>
                    </Link>
                    <Link to="/all-products" className="p-6 bg-green-100 rounded-lg hover:shadow">
                        <h2 className="text-xl font-semibold">All Products</h2>
                        <NavLink to='/home'>
                            <p className="text-sm text-gray-600">View all available gadgets.</p>
                        </NavLink>
                    </Link>
                    <Link to="/profile" className="p-6 bg-yellow-100 rounded-lg hover:shadow">
                        <h2 className="text-xl font-semibold">Profile</h2>
                        <p className="text-sm text-gray-600">Manage your account.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
