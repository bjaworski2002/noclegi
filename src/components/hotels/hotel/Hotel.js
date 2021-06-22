import React from 'react'
import styles from './Hotel.module.css'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import hotelImg from '../../../assets/images/hotel.jpg'
function Hotel(props){
    return(
        <Card className={styles.element}>
            <CardBody>
                <CardImg top width="100%" src={hotelImg} alt="Card image cap" />
                <CardTitle style={{marginTop: "10px"}} tag="h5">{props.name}</CardTitle>
                <CardText>{props.description}</CardText>
                <Button className="btn btn-success">Zobacz!</Button>
            </CardBody>
        </Card>)
}

export default Hotel