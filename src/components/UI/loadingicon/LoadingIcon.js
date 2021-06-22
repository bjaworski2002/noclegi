import React from 'react';
import { Spinner } from 'reactstrap';
import styles from './LoadingIcon.module.css'

export default function LoadingIcon(){
    return(<>
            <Spinner className={styles.spinner} color="primary" ><span className="sr-only"></span></Spinner>
            <p>Ladowanie danych</p>
    </>
    )
}