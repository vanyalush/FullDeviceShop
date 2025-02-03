import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Container} from "react-bootstrap";
import './styles/BrandBar.css'

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Container className='brandCont'>
            {device.brands.map(brand => <Card
                    className="card"
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                    border={brand.id === device.selectedBrand.id ? 'success' : 'light'}
                >
                    {brand.name}
            </Card>
            )}
        </Container>
    );
});

export default BrandBar;