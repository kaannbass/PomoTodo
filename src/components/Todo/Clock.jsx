import { useState, useEffect } from "react";

const Clock = () => {
    const [clock, setClock] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const date = new Date();
            const hour = String(date.getHours()).padStart(2, '0');
            const min = String(date.getMinutes()).padStart(2, '0');
            const timeString = `${hour}:${min}`;
            setClock(timeString);
        };

        const interval = setInterval(updateClock, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <label htmlFor="">{clock}</label>;
};

export default Clock;