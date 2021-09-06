import React from 'react';
import {Spinner} from 'reactstrap';
import styles from './LoadingIcon.module.css'
import {ThemeContext} from "../../context/Context";

export default function LoadingIcon(props) {
    const theme = React.useContext(ThemeContext)
    return (<>
            <Spinner className={styles.spinner} color={`${theme.theme}`} children={null}/>
            <p>Ladowanie danych</p>
        </>
    )
}