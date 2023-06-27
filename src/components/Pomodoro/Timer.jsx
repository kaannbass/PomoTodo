function Timer({ time, isBreak }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-40 w-40 flex items-center justify-center relative m-auto">
      <span className="text-5xl font-bold">
        {isBreak ? formatTime(time.breakTime) : formatTime(time.pomodoroTime)}
      </span>
    </div>
  );
}

export default Timer