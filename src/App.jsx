import {useEffect, useState} from 'react'
import './clock.css'

const humanReadableTime = (dateNow) => {
    dateNow = new Date(dateNow)

    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const seconds = dateNow.getSeconds();

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function App() {
    const [time, setTime] = useState(humanReadableTime(Date.now()));

    useEffect(() => {
        console.log("useEffect loaded");

        let animationFrame;

        const updateTime = () => {
            setTime(humanReadableTime(Date.now()))

            animationFrame = requestAnimationFrame(updateTime);
        }

        animationFrame = requestAnimationFrame(updateTime);

        return () => {
            cancelAnimationFrame(animationFrame);
        }
    }, [])

    return (
        <>
            <h1 className={"clock"}>{time}</h1>
        </>
    )
}

export default App
