import {ReactComponent as FourLeafClover} from '../../assets/FourLeafClover.svg'
import {ReactComponent as ThreeLeafClover} from '../../assets/ThreeLeafClover.svg'
import {cloverGenerator} from "../../utils/cloverGenerator";

const CloverScreen = () => {
    const clovers = cloverGenerator(30, 4)

    return (
        <div>
            {
                clovers.map((clover) => {
                    return clover
                })
            }
        </div>
    )
}

export default CloverScreen