import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SongList from "./pages/SongList";
import Members from "./pages/Members";
// import SongDetail from "./pages/SongDetail";
// import SongDetail2 from "./pages/SongDetail2";
import Player from "./pages/songs/Player";
import SongIndex from "./pages/songs/Index";

export type MemberType = { name: string; photo: string };
export type SongType = {
  id: number;
  title: string;
  youtube_link: string;
};

const App = () => {
  const [members] = useState<Array<MemberType>>([
    {
      name: "에스쿱스",
      photo:
        "https://w.namu.la/s/5225b2d9b7e04f26c0d9133e7e7ebdef34ea373980fa240f09b87dc4f2b72bce8204fc1c5c698b74aea6bccd10b74d4bbfe5165459a5407a14e80c31165a9e6093f801e9141729b382e989abc767d78834c4100797046e6e3977c171cc5a72c594e709e46403d32ac34813e80fb7efd3",
    },
    {
      name: "정한",
      photo:
        "https://w.namu.la/s/be01d6244b17ccb08ec876b791c10526f87e624878d3046874250825d52d6a17ccbf8906c06a6b24d5abf6afeb537e9a5ee8915d8bd6806a7ce090a9e1309bdc42155d8aa6fbc2de18ea40bc11941236d47e2f957c90daadefc1f0c9256ad33c680b35ccee3084118de6b1f1d14cf133",
    },
    {
      name: "조슈아",
      photo:
        "https://w.namu.la/s/dcf6cb35f42d38b21870e15d0d23eb0492cde9d98e1e9171b9c2fb92b1694fb41531e887eb91b0a47308aa5b7570a74513be882f92acb34e88c636aeb5cf6f730d3bf1fe1ed47722ba47a7927c98ff3dfd49b3e9e5d5e7f36050de8d034cd4c5",
    },
    {
      name: "준",
      photo:
        "https://w.namu.la/s/ea3e5226fe02d7e1694d2c5d79ec425f3e4cc242cca803600df4a8d4ad82449b24aec231d23c135a6fb09bb497338fcfb3a346b6da6e69482a566cf4c9d747b2d9e6519d7c491e3bf022fd68122ab915f3648a41f600158bd4fafcea4860db24",
    },
    {
      name: "호시",
      photo:
        "https://w.namu.la/s/4ca9c163ba124c51e6a27ccf77f1c4755711dab379916fb47a3efe0fc1bae14bc5d23553e45256904580e834478a38882bebd58c9f137cde0fa24405361178dad3c2c92602ec9f9750ec7f91c1c2b620a2eb114c65e9c9efcbd4434dc6c2ea778e6495d91bb97b2c3304eab5770a3295",
    },
    {
      name: "원우",
      photo:
        "https://w.namu.la/s/af5f77318def29deac35ea32aaa7b33a0ccb0aaa3e9b4ef701a5779e5a2a779c9f79bba91807e97daa21d0d8a9c66d2864f33c8243e9f05d678c21552ed9832f65064e4f0b8bf00b1dc0169e6170511acf831edb760f379b9e71496a61d5f4ac",
    },
    {
      name: "우지",
      photo:
        "https://w.namu.la/s/682efe72320e2a9470e5cc04b38808196d0b126f665d9ab2745542dd9cdbb293d902306922533ee2f96b76fa291c7a0851a4427d150cea6473fee26e8a211a689c08877c2d4b8093a2e99868ab51d859e4e9be4b013e5f1544243a2e0c015a77e897a04e3fed37337b076b787c2986e1",
    },
    {
      name: "디에잇",
      photo:
        "https://w.namu.la/s/31a920b42d3dfcb7edebf3afe8a12fb09153d2348df50a58268555f9769363a8925726f8c9b93e666df27fdeba7c4e988ee1b946ab0bf9853d95315aefa2f7c524789ce7ac438a1762d0d3f3237570867c7a360d3bd9db53db51c40ed23a03abb8c06a4c4d20c2470d1537fe581b66ad",
    },
    {
      name: "민규",
      photo:
        "https://w.namu.la/s/3549afb6f7584759331fcbb1f73cf00730ee92f9e7c4205681ac6a90597b4bcd4f49f2396592277c03ed14d5399250c9b9a6da647b0111f9e6572e1a26d704e17c96dd485cee8dc8d6acc3302a552984e4444387a85021837560f213667f4dfc0c8367bb70940f6bb58c443052467465",
    },
    {
      name: "도겸",
      photo:
        "https://w.namu.la/s/615346ae836e4029d5fc8482a684565186a3e5bd414ebc238ea95e5cbbe1be43cc3f142c0ea42a4d5fff36d2a2e7c95e5d4589d9713b1892dbf82b0a2849ed0926f06667b14da9929f6e90d542d21be29dbc6f51b90d6fb2a627a0eee3f4b52e",
    },
    {
      name: "승관",
      photo:
        "https://w.namu.la/s/4c6442c74acc8e33c35c85539cfd030851f1eef5acc867f0e81c59c82fb51ed5bea21bf21cdc3a2cdd74a0f1e1bbf05be6fc053c56429033d3fa62e24c99d1c0f32ce00029dc9f17db8a08e52c2b7c55e4ac819114655527d65a4a8b920466719c711ac5ad9018f17cd1c8a30e2ebfab",
    },
    {
      name: "버논",
      photo:
        "https://w.namu.la/s/f4a25ac53dfa5e28e41a4abe0ab41a0ea407a92aa2b6a0cbca4ec940aece57a6cdcaa471927a7726ea0c14d1285db1441207c67db9cfcca9cb45ed26f5fd6c4ddeaa5d00af87129160f5a4bb959d0e6c95fdf3b07462cca2d229cb17bdec10c1",
    },
    {
      name: "디노",
      photo:
        "https://w.namu.la/s/cc64cb6b9118fc91f891eb7b1f5f15c96eb72b1dc57fd0746388736309b0b4268a7578d690216d1da11ca87591c87dfba8eecc613024e5aeed46ee73958f9ae6fd112b7213bd0b8a289a4ff60eb6e7f981405a5746221610dc8876592044fde5efce4e162a66de2050295dd23150f45c",
    },
  ]);
  const [songs] = useState<Array<SongType>>([
    { id: 1, title: "아낀다", youtube_link: "9rUFQJrCT7M" },
    { id: 2, title: "만세", youtube_link: "9M7k9ZV67c0" },
    { id: 3, title: "예쁘다", youtube_link: "j59LLNMEOZk" },
    { id: 4, title: "아주 NICe", youtube_link: "J-wFp43XOrA" },
    { id: 5, title: "붐붐", youtube_link: "CNEeAaH3bFc" },
    { id: 6, title: "울고 싶지 않아", youtube_link: "zEkg4GBQumc" },
    { id: 7, title: "박수", youtube_link: "CyzEtbG-sxY" },
    { id: 8, title: "고맙다", youtube_link: "gZItyr1SNjU" },
    { id: 9, title: "어쩌나", youtube_link: "_5PELxP8Udg" },
    { id: 10, title: "Home", youtube_link: "R9VDPMk5ls0" },
    { id: 10, title: "독: Fear", youtube_link: "ap14O5-G7UA" },
    { id: 11, title: "Left & Right", youtube_link: "HdZdxocqzq4" },
    { id: 12, title: "HOME;RUN", youtube_link: "UB4FzllQCyc" },
    { id: 13, title: "Ready to love", youtube_link: "yCvSR4lSqTg" },
    { id: 14, title: "Rock with you", youtube_link: "WpuatuzSDK4" },
    { id: 15, title: "HOT", youtube_link: "gRnuFC4Ualw" },
    { id: 16, title: "_WORLD", youtube_link: "VCDWg0ljbFQ" },
  ]);
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title={"아주 NICE"} />} />
          <Route path="/members" element={<Members members={members} />} />
          <Route path="/songs" element={<SongList songs={songs} />}>
            <Route index element={<SongIndex />} />
            <Route path=":id" element={<Player songs={songs} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
