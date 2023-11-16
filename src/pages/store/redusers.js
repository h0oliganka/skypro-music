import { CREATE_TRACK_LIST, NEXT_TRACK, PAUSE, PLAY, PREV_TRACK, SET_CURRENT_TRACK, TOGGLE_SHUFFL } from './types';

const initialState = {
    trackList: [],
    currentTrack: [],
    playing: false,
    shuffled: false,
    shuffledTrackList: [],
};

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TRACK_LIST: {
            const { trackList } = action.payload;
            return {
                ...state,
                trackList,
            };
        }
        case SET_CURRENT_TRACK: {
            const { currentTrack } = action.payload;
            return {
                ...state,
                playing: true,
                currentTrack,
            };
        }
        case PLAY: {
            const { trackStatus } = action.payload;
            return {
                ...state,
                playing: trackStatus,
            };
        }
        case PAUSE: {
            const { trackStatus } = action.payload;
            return {
                ...state,
                playing: !trackStatus,
            };
        }

        case NEXT_TRACK: {
            const { track } = action.payload;
            return {
                ...state,
                currentTrack: track,
            };
        }

        case PREV_TRACK: {
            const { track } = action.payload;
            return {
                ...state,
                currentTrack: track,
            };
        }
        case TOGGLE_SHUFFL: {
            const { isShuffled, shuffledTrackList } = action.payload;
            return {
                ...state,
                shuffled: isShuffled,
                shuffledTrackList,
            };
        }
        default:
            return state;
    }
}
