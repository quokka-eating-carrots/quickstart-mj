import { TimeFormatEnum } from "./useClockTime";
import useClockTime from "./useClockTime";

const App10 = () => {
  const currentTime = useClockTime(1000, TimeFormatEnum.HHmmssKor);
  return (
    <div>
      <h2>현재 시각</h2>
      <br />
      <div>{currentTime}</div>
    </div>
  );
};

export default App10;
