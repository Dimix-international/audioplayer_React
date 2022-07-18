import {songList} from "../data/songs";
import {useCallback, useMemo, useReducer} from "react";
import {playerReducer} from "./playerReducer";
import playerContext from "./playerContext";
import {
    SET_CURRENT_SONG,
    SET_SONGS_ARRAY,
    TOGGLE_PLAYING, TOGGLE_RANDOM,
    TOGGLE_REPEAT
} from "./types";


export const PlayerState = (props) => {
    const initialState = {
        currentSong: 0,
        songslist: songList,
        repeat: false,
        random: false,
        playing: false,
        audio: null,
    };

    const [state, dispatch] = useReducer(playerReducer, initialState);

    const value = useMemo(() => ({state}), [state]);

    // Set current song
    const setCurrent = useCallback((id) => {
        dispatch({type: SET_CURRENT_SONG, data: id})
    },[]);

    // Set songs array
    const songsSet = useCallback((songs) => {
        dispatch({type: SET_SONGS_ARRAY, data: songs})
    }, []);

    // Set playing state
    const togglePlaying = useCallback(() => {
        dispatch({type: TOGGLE_PLAYING, data: !state.playing})
    },[state.playing]);

    // Prev song
    const prevSong = useCallback(() => {
        if(state.currentSong === 0) {
            setCurrent(state.songslist.length - 1); //turn on last song
            return;
        }
        setCurrent(state.currentSong - 1);
    },[setCurrent, state.currentSong, state.songslist.length]);

    // Next song
    const nextSong = useCallback(() => {
        if(state.currentSong === state.songslist.length - 1) {
            setCurrent(0); //turn on first song
            return;
        }
        setCurrent(state.currentSong + 1);
    },[setCurrent, state.currentSong, state.songslist.length]);
    
    //Repeat and random
    const toggleRepeat = useCallback(() => dispatch({
        type: TOGGLE_REPEAT,
        data: !state.repeat
    }), [state.repeat]);
    const toggleRandom = useCallback(() => dispatch({
        type: TOGGLE_RANDOM,
        data: !state.random
    }), [state.random]);

    // End of Song

    const handleEnd = useCallback(() => {
        if(state.random) {
            return dispatch({
                type: SET_CURRENT_SONG,
                data: ~~(Math.random() * state.songslist.length), //~~ - integer
            })
        } else {
            if (state.repeat) {
                nextSong()
            } else {
                if (state.currentSong === state.songslist.length - 1) return;
                nextSong()
            }
        }
    },[nextSong, state.currentSong, state.random, state.repeat, state.songslist.length])

    return <playerContext.Provider value={{
        ...value.state,
        setCurrent,
        songsSet,
        togglePlaying,
        prevSong,
        nextSong,
        toggleRepeat,
        toggleRandom,
        handleEnd,
    }}>
        {props.children}
    </playerContext.Provider>
}