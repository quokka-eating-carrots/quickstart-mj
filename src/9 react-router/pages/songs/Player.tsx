import React, { useEffect, useState } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Youtube from "react-youtube";
import { SongType } from "../../App";

type Props = { songs: Array<SongType> };
type SongIdParam = { id: string };
type ContextType = { songs: Array<SongType> };

const Player = (props: Props) => {
  const { songs } = useOutletContext<ContextType>();
  const params = useParams<SongIdParam>();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  useEffect(() => {
    const id = params.id ? parseInt(params.id, 10) : 0;
    // const song = props.songs.find((song) => song.id === id);
    const song = songs.find((song) => song.id === id);
    if (song) {
      setLink(song?.youtube_link ? song.youtube_link : "");
      setTitle(song?.title ? song.title : "");
    } else {
      navigate("/songs");
    }
  }, []);
  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link to="/songs" className="menu">
            <span className="float-start badge bg-secondary pointer">X</span>
          </Link>
          <span className="title">&nbsp;&nbsp;&nbsp;{title}</span>
        </div>
        <div className="player">
          <div>
            <Youtube
              videoId={link}
              opts={{
                width: "320",
                height: "240",
                playerVars: { autoplay: 1 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
