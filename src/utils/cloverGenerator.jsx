import {ReactComponent as ThreeLeafClover} from '../assets/ThreeLeafClover.svg'
import {ReactComponent as FourLeafClover} from '../assets/FourLeafClover.svg'

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

export const cloverGenerator = (threeLeafCloverAmount, fourLeafCloverAmount) => {
    let cloverArr = []

    for (let i = 1; i <= threeLeafCloverAmount; i += 1) {
        cloverArr.push(<ThreeLeafClover translate={'20'} />)
        // cloverArr.push(<ThreeLeafClover translate={'rotate(20)'} />)
        // cloverArr.push(<ThreeLeafClover style={{ transform: [{ rotateX: `${Math.floor(Math.random() * 360)}deg` }] }} />)
    }

    for (let i = 1; i <= fourLeafCloverAmount; i += 1) {
        cloverArr.push(<FourLeafClover />)
    }

    console.log(cloverArr)
    return shuffle(cloverArr)
}