import {
    OPEN_SIDEBAR, 
    CLOSE_SIDEBAR
} from '../types/sidebarActionTypes'

const initialState = {
    sidebarStatus: true
}

// Sidebar => open/close
export const sidebarStatus = (state = initialState, {type, payload}) => {
    switch (type) {
        case OPEN_SIDEBAR:
            return {
                ...state,
                sidebarStatus: payload
            };
        case CLOSE_SIDEBAR:
            return {
                ...state,
                sidebarStatus: payload
            };
        default: 
            return state
    }
}  