import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../ContentCardIndex/cardIndex.css';

export const ContentCardIndex = ({ changeContent, plan }) => {
    return (

        <main className='main-cards'>
            <div className='card1'>
                <Card style={{ width: '25rem', display: 'flex' }}>
                    <Card.Header className="d-flex flex-column justify-content-center align-items-center">
                        <h3>{plan.name}</h3>
                        <img src={plan.images[0]} alt="" className='h-auto w-50' />
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <span className="price_soles me-3">S/.</span>
                            <h2 className="price_content">
                                {plan.price.unit_amount / 100}
                            </h2>
                            <span className="price_month ms-3"> /AL MES</span>
                        </div>
                        <strong className="text-center">{plan.description}</strong>
                    </Card.Header>
                    <Card.Body>
                        <ul className="list_icon">
                            <li className="mt-3"><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor ad! Repellendus? </Card.Text></li>
                            <li className="mt-3"><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, alias vitae? </Card.Text></li>
                            <li className="mt-3" style={{ color: changeContent ? "#C7C7C7" : "" }}><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolor ad! Repellendus? </Card.Text></li>
                            <li className="mt-3" style={{ color: changeContent ? "#C7C7C7" : "" }}><Card.Text className="ms-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, alias vitae? </Card.Text></li>
                        </ul>
                    </Card.Body>
                    <Link to={`/news/${plan.id}`} className="text-decoration-none text-dark">
                        <Button className="w-100 rounded-0 card_button">Suscribirme</Button>
                    </Link>
                </Card>
            </div>
        </main >

    )
}
