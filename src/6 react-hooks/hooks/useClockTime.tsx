import { useState, useEffect } from "react";
import DateAndTime from "date-and-time";

export enum TimeFormatEnum {
  HHmmss = "HH:mm:ss",
  HHmm = "HH:mm",
  HHmmKor = "HH시 mm분",
  HHmmssKor = "HH시 mm분 ss초",
}

const useClockTime = (interval: number, timeFormat: TimeFormatEnum) => {
  const [currentTime, setCurrentTime] = useState(
    DateAndTime.format(new Date(), timeFormat)
  );

  useEffect(() => {
    const handle = setInterval(() => {
      setCurrentTime(DateAndTime.format(new Date(), timeFormat));
    }, interval);
    return () => {
      clearInterval(handle);
    };
  }, []);
  return currentTime;
};

export default useClockTime;
