import React, {useContext} from "react";
import playerContext from "../context/playerContext";

export const Header = () => {
    const {songslist, currentSong} = useContext(playerContext);
    return (
        <header>
            <h3>ReactWave - {songslist[currentSong].title}</h3>
        </header>
    )
}