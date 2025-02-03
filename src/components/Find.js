import React from 'react';
import './styles/Find.css'
import 'boxicons'
import {Container} from "react-bootstrap";

const Find = () => {
    return (
        <Container className='findCont'>
            <div className='Find'>
                <input className='find' placeholder="Поиск по сайту..."/>
            </div>
            <div className="NavForClient">
                <div className="likes">
                    <box-icon size='md' name='heart'></box-icon>
                    <a>Избранное</a>
                </div>
                <div className="basket">
                    <box-icon size='md' name='basket'></box-icon>
                    <a>Корзина</a>
                </div>
                <div className="profil">
                    <box-icon size='md' name='user'></box-icon>
                    <a>Профиль</a>
                </div>
            </div>

        </Container>

    );
};

export default Find;