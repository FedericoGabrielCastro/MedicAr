import {
    OPEN_SIDEBAR, 
    CLOSE_SIDEBAR
} from '../types/sidebarActionTypes'

// Sidebar => Open
export const openSidebar = (sidebarStatus) => {
    return {
        type: OPEN_SIDEBAR,
        payload: sidebarStatus
    }
} 

// Sidebar => close
export const closeSidebar = (sidebarStatus) => {
    return {
        type: CLOSE_SIDEBAR,
        payload: sidebarStatus
    }
}