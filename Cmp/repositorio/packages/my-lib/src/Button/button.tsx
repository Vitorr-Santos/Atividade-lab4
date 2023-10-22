
import { styles as sy } from "./button.styles";


const Button:React.FC<{caption:string}> = ({caption}) => {
    return (
        <sy.container>{caption}</sy.container>
    )
}

export {Button}

