import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="text-center">
                <div className="flex justify-center mb-6">
                    <Ghost className="w-20 h-20 text-gray-400" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
                <p className="text-lg text-gray-600 mb-4">Oops! Page not found.</p>
                <p className="text-gray-500 mb-6">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
