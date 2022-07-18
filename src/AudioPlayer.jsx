import React from "react";
import './main.css'
import './input.css'
import {Header} from "./components/Header";
import {Actions} from "./components/playlist/Actions";
import {Playlist} from "./components/playlist/Playlist";
import {PlayerState} from "./context/PlayerState";
import {Controls} from "./components/playlist/Controls";

export const AudioPlayer = () => {
    return (
        <PlayerState>
            <div className='main'>
             <div className="top">
                <Header />
                <Actions />
                <Playlist />
             </div>
                <Controls />
            </div>
        </PlayerState>
    )
}