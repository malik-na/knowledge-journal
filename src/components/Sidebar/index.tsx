import { Lock, Globe, Users } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
            <button className="w-full bg-blue-600 text-white rounded-md py-2 px-4 mb-6">
                New Entry
            </button>

            <div className="space-y-6">
                <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Categories
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                            <Lock className="w-4 h-4 mr-2" />
                            Private Notes
                        </li>
                        <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                            <Globe className="w-4 h-4 mr-2" />
                            Public Entries
                        </li>
                        <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                            <Users className="w-4 h-4 mr-2" />
                            Collaborative
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;