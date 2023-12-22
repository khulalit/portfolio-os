'use client';
import { useEffect, useState } from "react";
export default function Timecomponent() {

    const [currentTime, setCurrentTime] = useState(getFormattedTime());

    function getFormattedTime() {
        const now = new Date();
        const day = now.toString();
        // const hours = now.getHours().toString().padStart(2, '0');
        // const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${day.toString().substring(0,21)}`.replace('2023', '');
      }

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(getFormattedTime());
      }, 1000*60);
  
      return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-white text-sm">
            {currentTime}
        </div>
    )
}
