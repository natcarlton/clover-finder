import currentScreenStore from "../../stores/currentScreenStore";
import {appStyles} from "../styles/appStyles";


const TitleScreen = () => {
    const style = appStyles()

    const { setCurrentScreen } = currentScreenStore(
        (state) => (state)
    )

    return (
        <div style={style.titleScreenContainer}>
            <div style={style.title}>
                Four Leaf Clover Hunt!
            </div>
            <button title={"Play!"} style={style.buttonStyle} onClick={() => {setCurrentScreen("game")}}>
                Play!
            </button>
        </div>
    )
}

export default TitleScreen