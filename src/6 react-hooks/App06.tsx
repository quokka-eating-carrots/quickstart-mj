import { useRef, useState } from "react";

const App06 = () => {
  const [name, setName] = useState("케로");
  const refTel = useRef("010-1234-1234");
  return (
    <div className="boxStyle">
      <h2>상태 데이터</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <div>상태(name): {name}</div>
      <hr />
      <input type="text" onChange={(e) => (refTel.current = e.target.value)} />
      <br />
      <div>refTel 값: {refTel.current}</div>
    </div>
  );
};

export default App06;
