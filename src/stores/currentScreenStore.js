import {create} from "zustand";

const initialScreen = 'title'

const currentScreenStore = create((set) => ({
    currentScreen: initialScreen,
    setCurrentScreen: (screen) => {set(() => ({currentScreen: screen}))},
}))

export default currentScreenStore
