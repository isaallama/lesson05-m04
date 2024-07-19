import { useState, useEffect } from "react";

function TimerComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log('Timer foi zerado')
        }

    }, [])

    return <h1>{count}</h1>

}

export default TimerComponent;