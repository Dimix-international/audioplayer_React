import React, {useContext} from "react";
import playerContext from "../../context/playerContext";

export const Playlist = () => {
    const {songslist, currentSong, setCurrent} = useContext(playerContext);

    return (
        <div className={'playlist no_drag'}>
            <ul className="loi">
                {
                    songslist.map((song, i) => (
                        <li
                            key={song.fileUrl}
                            className={'songContainer ' + (currentSong === i ? 'selected' : '')}
                            onClick={() => setCurrent(i)}
                        >
                            <div className="tmbn_song">
                                <i className="fas fa-play"></i>
                            </div>
                            <div className="songmeta_playlist">
                                <span className="songname">{song.title}</span>
                                <span
                                    className="songauthors">{song.artistName}</span>
                            </div>
                            <div className="playlist_btns_group">
                                <button className="fav_song playlist_btn">
                                    <i className="far fa-heart fa-lg"></i>
                                </button>
                                <button className="options_song playlist_btn">
                                    <i className="fas fa-ellipsis-v fa-lg"></i>
                                </button>
                            </div>
                        </li>))
                }
            </ul>
        </div>
    )
}