import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Container, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import './styles/DeviceList.css'

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Container className='deviceList'>
            <Row>
                {device.devices.map(device =>
                    <DeviceItem key={device.id} device={device}/>
                )}
            </Row>
        </Container>
    );
});

export default DeviceList;