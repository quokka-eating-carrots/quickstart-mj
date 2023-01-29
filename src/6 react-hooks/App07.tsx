import React, { useRef } from "react";

const App07 = () => {
  const elName: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  const goFirstInputElement = () => {
    if (elName.current) elName.current.focus();
  };
  return (
    <div className="boxStyle">
      이름: <input type="text" ref={elName} defaultValue="케로" />
      <br />
      전화: <input type="text" defaultValue={"010-1234-1234"} />
      <br />
      주소: <input type="text" defaultValue={"의정부"} />
      <br />
      <button onClick={goFirstInputElement}>첫 번째 필드로 포커스 이동</button>
    </div>
  );
};

export default App07;
