import {ThemeContext} from "../context/Context";
import {useContext} from 'react'

export default function Footer(props) {
    const theme = useContext(ThemeContext)

    return (
        <div className={`text-${theme.theme}`}>stopka</div>
    )
}