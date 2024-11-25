import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-xl font-semibold text-gray-800">
                    Knowledge Journal
                </Link>
                <div className="flex items-center space-x-6">
                    <Link to="/journal" className="text-gray-600 hover:text-gray-900">
                        Timeline
                    </Link>
                    <Link to="/journal" className="text-gray-600 hover:text-gray-900">
                        My Entries
                    </Link>
                    <Link to="/settings">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-600" />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;