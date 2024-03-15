import logo from './logo.svg';
import './App.css';
import TitleScreen from "./screens/titleScreen/TitleScreen";
import currentScreenStore from "./stores/currentScreenStore";
import GameScreen from "./screens/gameScreen/GameScreen";

function App() {
    const { currentScreen } = currentScreenStore(
        (state) => (state)
    )

  return (
    <div className="App">
        {
            (() => {
                switch (currentScreen) {
                    case 'title':
                        return <TitleScreen/>
                    case 'game':
                        return <GameScreen/>
                    default:
                        return <TitleScreen/>
                }
            })()
        }
    </div>
  );
}

export default App;
