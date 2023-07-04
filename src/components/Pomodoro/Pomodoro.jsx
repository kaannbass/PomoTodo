import React, { useState, useEffect } from 'react';
import ProgressBar from './Progress';
import Timer from './Timer';

function PomodoroApp() {
    const value = 0.1 * 60;
    const [time, setTime] = useState({ pomodoroTime: value });
    const [isRunning, setIsRunning] = useState(false);
    const [completedPomodoros, setCompletedPomodoros] = useState(0);
    const [progress, setProgress] = useState(100);
    const [alertCount, setAlertCount] = useState(0);

    const decrementPomodoroTime = () => {
        setTime((prevTime) => ({ ...prevTime, pomodoroTime: prevTime.pomodoroTime - 1 }));
    };

    useEffect(() => {
        let interval = null;
        const startTimer = () => {
            interval = setInterval(() => {
                if (time.pomodoroTime > 0) {
                    decrementPomodoroTime();
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
    }, [isRunning, time.pomodoroTime]);

    useEffect(() => {
        setProgress((time.pomodoroTime / value) * 100);
    }, [time, value]);


    useEffect(() => {
        if (time.pomodoroTime === 0) {
            if (alertCount === 0) {
                setAlertCount((prevCount) => prevCount + 1);
                setCompletedPomodoros(i => i + 1);
                alert('Pomodoro time is up! You can take a break.');
            }

        }
    }, [time.pomodoroTime, alertCount]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime({ pomodoroTime: value });
        setAlertCount(0);
    };

    return (
        <div className="container mx-auto text-center">
            {!isRunning ? null : <ProgressBar progress={progress} />}
            <Timer time={time} />
            <div className="flex justify-center mb-4">
                {!isRunning ? (
                    <button
                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-7 py-5 text-center mr-2 mb-2"
                        onClick={handleStart}
                    >
                        Start
                    </button>
                ) : (
                    <button
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-7 py-5 text-center mr-2 mb-2"
                        onClick={handleStop}
                    >
                        Stop
                    </button>
                )}
                <button
                    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-7 py-5 text-center mr-2 mb-2"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
            {!completedPomodoros ? null : (
                <span className="text-xl text-white">
                    Congratulations! You have completed {completedPomodoros} pomodoro(s).
                </span>
            )}
        </div>
    );
}

export default PomodoroApp;
