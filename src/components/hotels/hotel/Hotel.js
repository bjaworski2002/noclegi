import React from 'react'
import styles from './Hotel.module.css'
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import hotelImg from '../../../assets/images/hotel.jpg'
import {ThemeContext} from "../../context/Context";
import useAuth from "../../hooks/useauth/useAuth";
import {Link} from 'react-router-dom'

function Hotel(props) {
    const theme = React.useContext(ThemeContext)
    const [auth] = useAuth()
    const clickHandler = e => {
        e.preventDefault()
        props.onOpen(props)
    }
    return (
        <Card className={styles.element}>
            <CardBody>
                <CardImg top width="100%" src={hotelImg} alt="Card image cap"/>
                <CardTitle style={{marginTop: "10px"}} tag="h5">{props.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.rank} &#9734;</CardSubtitle>
                <CardText>{props.description}</CardText>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Link className={`btn btn-${theme.theme}`} to={`/hotels/${props.id}`}>Pokaż!</Link>
                    {auth ? <Button color={theme.theme}>Zapisz!</Button> : ""}
                </div>
            </CardBody>
        </Card>
    )
}

export default Hotel