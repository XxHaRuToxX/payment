import React from 'react';
import { Button, Card } from 'react-bootstrap';

import './contentCard.css';

export const ContentCard = ({changeContent}) => {
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Header className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <span className="price_soles me-3">S/.</span><h2 className="price_content">{changeContent ? "29" : "59"}</h2><span className="price_month ms-3"> /AL MES</span>
                </div>
                <strong className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam repellendus quasi atque?</strong>
            </Card.Header>
            <Card.Body>
                <ul className="list_icon">
                    <li className="mt-3"><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor ad! Repellendus? </Card.Text></li>
                    <li className="mt-3"><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, alias vitae? </Card.Text></li>
                    <li className="mt-3" style={{color:changeContent ? "#C7C7C7" : ""}}><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor ad! Repellendus? </Card.Text></li>
                    <li className="mt-3" style={{color:changeContent ? "#C7C7C7" : ""}}><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, alias vitae? </Card.Text></li>
                </ul>
            </Card.Body>
            <Button className="w-100 rounded-0 card_button">Suscribirme</Button>
        </Card>
    )
}
