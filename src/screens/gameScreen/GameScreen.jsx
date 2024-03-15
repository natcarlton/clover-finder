import currentScreenStore from "../../stores/currentScreenStore";
import {appStyles} from "../styles/appStyles";
import CloverScreen from "../cloverScreen/CloverScreen";
import {gameScreenStyles} from "./gameScreenStyles";


const GameScreen = () => {
    const style = appStyles()
    const gameStyles = gameScreenStyles()

    const { setCurrentScreen } = currentScreenStore(
        (state) => (state)
    )

    return (
        <div style={gameStyles.gameScreen}>
            <div style={gameStyles.cloverComponent}>
                <CloverScreen />
            </div>
            <div style={gameStyles.buttonComponent}>
                <button title={"Quit!"} style={style.buttonStyle} onClick={() => {
                    setCurrentScreen("title")
                }}>
                    Quit!
                </button>
            </div>
        </div>
    )
}

export default GameScreen