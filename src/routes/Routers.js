import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
// import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { UserAuthContextProvider } from '../context/UserAuthContextProvider';
// import { ProtectedRoute } from './ProtectedRoute';
import { News } from '../pages/News';
import { PrivateRoute } from './PrivateRoute';
import { Card } from '../components/Card';

export const Routers = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <UserAuthContextProvider>
                        <Routes>
                            <Route element={<PrivateRoute/>} >
                                <Route path="/home" element={<Home/>} />
                                <Route path="/news" element={<News/>} />
                            </Route>
                            {/* <Route 
                                path="/home" 
                                element={
                                    <ProtectedRoute>
                                        <Home/>
                                    </ProtectedRoute>
                                } 
                            />
                            <Route 
                                path="/news" 
                                element={
                                    <ProtectedRoute>
                                        <News/>
                                    </ProtectedRoute>
                                } 
                            /> */}
                            
                            <Route path="/" element={<Card/>} />
                            {/* <Route path="/" element={<Login/>} /> */}
                            <Route path="/signup" element={<Signup/>} />
                            <Route path="*" element={<Navigate to={"/"} />} />
                        </Routes>
                    </UserAuthContextProvider>
                </Col>
            </Row>
        </Container>
    )
}
