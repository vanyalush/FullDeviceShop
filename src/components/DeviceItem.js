import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import './styles/DeviceItem.css'

const DeviceItem = ({device}) => {
    const history = useNavigate();
    return (
        <Col md={3} className='colCard' onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
            <Card className='cardDevice'>
                <Image width={215} height={200} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="cardBody">
                    <div>brand</div>
                    <div>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
                <div>От {device.price} руб</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;