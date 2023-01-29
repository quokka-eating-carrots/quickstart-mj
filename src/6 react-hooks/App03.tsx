import { useState } from "react";
import Clock from "./Clock";

const App03 = () => {
  const [formatString, setFormatString] = useState<string>("HH:mm:ss");
  const [clockVisible, setClockVisible] = useState<boolean>(false);
  return (
    <div>
      <h2>간단한 시계</h2>
      <button onClick={() => setClockVisible(!clockVisible)}>
        시계 토글하기
      </button>
      <hr />
      {clockVisible ? <Clock formatString={formatString} /> : null}
    </div>
  );
};

export default App03;
