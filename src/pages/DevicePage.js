import React, {useEffect, useState} from 'react';
import { Card, Col, Container, Image, Row} from "react-bootstrap";
import 'boxicons'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import '../components/styles/DevicePage.css'

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="devicePage">
            <Row>
                <Col className='deviceCol'>
                    <h2 >{device.name}</h2>
                    <Image width={340} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4} className="infoCol">
                    <Row>
                        <h2>Характеристики</h2>
                        {device.info.map((info, index) =>
                            <Row key={info.id}
                                 style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                {info.title}: {info.description}
                            </Row>
                        )}
                    </Row>
                    <Row className='rating'>
                        <div>0</div>
                        <box-icon type='solid' name='star'></box-icon>
                    </Row>
                    <Card className='cardPrice'>
                        <h4>От: {device.price} руб</h4>
                    </Card>
                    <Row className='btnBuyLike'>
                        <div className="likes">
                            <box-icon size='md' name='heart'></box-icon>
                            <a>Избранное</a>
                        </div>
                        <div className="basket">
                            <box-icon size='md' name='basket'></box-icon>
                            <a>Корзина</a>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;