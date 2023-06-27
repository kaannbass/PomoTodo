function ProgressBar({ progress }) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
            <div className="bg-blue-300 h-1.5 rounded-full dark:bg-blue-500" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar