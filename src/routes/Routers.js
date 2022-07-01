import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { UserAuthContextProvider } from '../context/UserAuthContextProvider';
import { News } from '../pages/News';
import { NewsDetails } from '../pages/NewsDetails';
import { PrivateRoute } from './PrivateRoute';
import Carrito from '../pages/Carrito';
import { Perfil } from '../pages/Perfil';

export const Routers = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <UserAuthContextProvider>
                        <Routes>
                            <Route element={<PrivateRoute />} >
                                <Route path="/home" element={<Home />} />
                                <Route path="/news" element={<News />} />
                                <Route path="/news/:id" element={<NewsDetails />} />
                                <Route path="/carrito" element={<Carrito />} />
                                <Route path="/perfil" element={<Perfil />} />
                            </Route>
                            <Route path="/" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="*" element={<Navigate to={"/"} />} />
                        </Routes>
                    </UserAuthContextProvider>
                </Col>
            </Row>
        </Container>
    )
}
