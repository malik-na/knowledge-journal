const Settings = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-md border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Profile</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Display Name
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Preferences</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label className="ml-2 text-sm text-gray-700">
                                Make new entries private by default
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label className="ml-2 text-sm text-gray-700">
                                Enable email notifications
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;