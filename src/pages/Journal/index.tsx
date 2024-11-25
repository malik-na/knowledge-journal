import { useState } from 'react';

interface JournalEntry {
    id: string;
    title: string;
    content: string;
    timestamp: Date;
    isPrivate: boolean;
}

const Journal = () => {
    const [entries] = useState<JournalEntry[]>([
        {
            id: '1',
            title: 'Learning React Hooks',
            content: 'Today I learned about useState and useEffect...',
            timestamp: new Date(),
            isPrivate: true,
        },
        {
            id: '2',
            title: 'CSS Grid Layout',
            content: 'Explored CSS Grid for responsive layouts...',
            timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
            isPrivate: false,
        },
    ]);

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-md border border-gray-200 p-4">
        <textarea
            placeholder="What did you learn today?"
            className="w-full h-20 resize-none border-0 focus:ring-0 placeholder-gray-400"
        />
            </div>

            <div className="space-y-4">
                {entries.map((entry) => (
                    <div
                        key={entry.id}
                        className="bg-white rounded-md border border-gray-200 p-4"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {entry.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{entry.content}</p>
                        <div className="text-sm text-gray-500">
                            {entry.timestamp.toLocaleDateString()} ·
                            {entry.isPrivate ? ' Private' : ' Public'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journal;