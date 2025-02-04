import {
    SET_CURRENT_SONG,
    SET_SONGS_ARRAY, TOGGLE_PLAYING,
    TOGGLE_RANDOM,
    TOGGLE_REPEAT
} from "./types";

export const playerReducer = (state, action) => {
    switch (action.type) {
        case SET_SONGS_ARRAY: {
            return {
                ...state,
                songs: action.data
            }
        }
        case SET_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.data,
                playing: true,
            }
        case TOGGLE_RANDOM:
            return {
                ...state,
                random: action.data,
            }
        case TOGGLE_REPEAT:
            return {
                ...state,
                repeat: action.data,
            }
        case TOGGLE_PLAYING:
            return {
                ...state,
                playing: action.data,
            }
        default: {
            return state;
        }
    }
}