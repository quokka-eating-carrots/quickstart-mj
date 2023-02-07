import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Bss from "../components/Bss";
import Loading from "../components/Loading";

type Props = { title: string };

const About = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const maxPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const strPage = searchParams.get("page");
    setPage(parseInt(strPage !== null ? strPage : "1", 10));
  }, [searchParams]);

  const goPrev = () => {
    if (page === 1) navigate(location.pathname + "?page=4");
    if (page > 1) navigate(location.pathname + "?page=" + (page - 1));
  };

  const goNext = () => {
    if (page === 4) navigate(location.pathname + "?page=1");
    if (page < 4) navigate(location.pathname + "?page=" + (page + 1));
  };

  const bss = () => {
    return (
      <div>
        <h3>5년만에 컴백한 부석순 폼 미쳤다 ㄷㄷ</h3>
        <img
          src="https://w.namu.la/s/2e4edd2dec8b638e5ff0547ed089d34c787e77164a5cf31f483f1c5213051783506b5f86e93bd60b86eeb09b484a0192e7f35b9d7a828a15c2bd07a911a81bc4f12757b1cdbc0064514c0b125759cd14338de7bc6b13cd4aca477653d526d0c20f349814a844f91da6ce3eebdee0bf8d"
          alt="부석순"
          style={{ width: "500px" }}
        />
      </div>
    );
  };

  const boo = () => {
    return (
      <div>
        <h3>관랑해 ς(⑉･̆-･̆⑉)🍊</h3>
        <img
          src="https://w.namu.la/s/f381b51105fa37b0bad6ad3e5bebedc0a93d69b1583a52aafaaf4681ef7422cc2f817c539df1baab75078f1e79ade40d65c4698da22ee901f98b3fce8b47d453e578bbd3340627f8e6c7215077c8fe514b12ba346582808a76511a4f9594d968f58c94ca06f2707ce5ed66100b154645"
          alt="승관"
          style={{ width: "375px" }}
        />
      </div>
    );
  };

  const dk = () => {
    return (
      <div>
        <h3>도아해 (｡•̀ᴗ-ღ)</h3>
        <img
          src="https://w.namu.la/s/d2bdc4f9e859312b6f8f6646e36b9d42fb7e30d356e4799c51fc4c3bb36e556ff368139d2412c7a988da7ac05001bd5bdfe210c94a388b14a5f14e336357d57f1954b7de92622b4852f0a1cb62cedf7658a5d0f59373b1496fd58c5adfa6a353103f1f4a023cb20a9790211417a5ccb4"
          alt="석민"
          style={{ width: "375px" }}
        />
      </div>
    );
  };

  const hoshi = () => {
    return (
      <div>
        <h3>호랑해 ఇ ◝‿◜ ఇ</h3>
        <img
          src="https://w.namu.la/s/d65cbbb909e601104ef3fa3c100abaaba8ec4f04aa318718ccec34c1f2ec61deda2393765436ef08ddb538da73873f672814726f765a3fc4c0689a1884ca9e2d90cf6cc9b49e33bbae0dba5fb789e079d0a01dcb81c706b61d6869653b5e1931f2f946e5f7bdeee96c6aa9cd5bd2de9e"
          alt="순영"
          style={{ width: "375px" }}
        />
      </div>
    );
  };
  return (
    <div className="card card-body">
      <h2>About {props.title}</h2>
      <React.Suspense fallback={<Loading />}>
        {page === 1 ? <Bss member={bss()} /> : null}
        {page === 2 ? <Bss member={boo()} /> : null}
        {page === 3 ? <Bss member={dk()} /> : null}
        {page === 4 ? <Bss member={hoshi()} /> : null}
      </React.Suspense>
      <div>
        <div className="m-2">현재 페이지: {page}</div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          prev
        </button>
        <button className="btn btn-secondary m=1" onClick={goNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default About;
