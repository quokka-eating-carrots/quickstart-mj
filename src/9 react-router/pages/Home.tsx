import React from "react";
import { useLocation } from "react-router";
import Youtube from "react-youtube";

type Props = {};
type LocationStateType = {
  from: string;
};

const Home = (props: Props) => {
  const location = useLocation();
  const state = location.state as LocationStateType;
  const from = state ? state.from : "";
  return (
    <div className="card card-body">
      <h2>부석순 - 파이팅 해야지 많관부 ૮ .◜◡◝ ა</h2>
      <Youtube
        videoId={"mBXBOLG06Wc"}
        opts={{ width: "1080", height: "720", playerVars: { autoplay: 1 } }}
      />
      {from !== "" ? <h4>state.from: {from}</h4> : ""}
    </div>
  );
};

export default Home;
