import { useState, useEffect } from "react";
import ProgressBar from './Progress'
import Timer from './Timer'

function PomodoroApp() {
    const [time, setTime] = useState({ pomodoroTime: 25 * 60 });
    const [isRunning, setIsRunning] = useState(false);
    const [completedPomodoros, setCompletedPomodoros] = useState(0);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        let interval = null;

        const decrementPomodoroTime = () => {
            setTime((prevTime) => ({ ...prevTime, pomodoroTime: prevTime.pomodoroTime - 1 }));
        };

        const decrementBreakTime = () => {

            setTime((prevTime) => ({ ...prevTime, breakTime: prevTime.breakTime - 1 }));
        };

        const resetPomodoro = () => {

            setCompletedPomodoros((prevCount) => prevCount + 1);
            setTime({
                pomodoroTime: 25 * 60,
                breakTime: 5 * 60
            });
            setProgress(100);
        };

        const startTimer = () => {
            interval = setInterval(() => {
                if (time.pomodoroTime > 0) {
                    decrementPomodoroTime();
                } else if (time.breakTime > 0) {
                    decrementBreakTime();
                } else {
                    resetPomodoro();
                }
            }, 1000);
        };

        const stopTimer = () => {
            clearInterval(interval);
        };

        if (isRunning) {
            startTimer();
        } else {
            stopTimer();
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        setProgress((time.pomodoroTime / (25 * 60)) * 100);
    }, [time.pomodoroTime]);

    useEffect(() => {
        if (completedPomodoros > 0) {
            console.log(`Congratulations! You have completed ${completedPomodoros} pomodoro(s).`);
        }
    }, [completedPomodoros]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);

        setCompletedPomodoros(0);
        setTime({
            pomodoroTime: 25 * 60,
            breakTime: 5 * 60
        });
        setProgress(100);
    };

    return (
        <div className="container mx-auto text-center">
            {!isRunning ? '' : <ProgressBar progress={progress} />}
            <Timer time={time} />
            <div className="flex justify-center mb-4">
                {!isRunning ? (
                    <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-7 py-5 text-center mr-2 mb-2" onClick={handleStart}>
                        Start
                    </button>
                ) : (
                    <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-7 py-5 text-center mr-2 mb-2" onClick={handleStop}>
                        Stop
                    </button>
                )}
                <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-7 py-5 text-center mr-2 mb-2" onClick={handleReset}>
                    Reset
                </button>
            </div>
            {!completedPomodoros ? '' : (
                <span className="text-xl">
                    Congratulations! You have completed {completedPomodoros} pomodoro(s).
                </span>
            )}
        </div>
    );
}

export default PomodoroApp;