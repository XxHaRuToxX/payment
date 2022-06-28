import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContextProvider';

export const Home = () => {

    const { user, logOut } = useUserAuth();

    console.log(user);

    const handleLogout = async()=>{

        try {
            await logOut();
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="p-4 box mt-3 text-center">
                Welcome<br/>
                {
                    user && user.email
                }
            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogout}>Log out</Button>
                <Link to={"/news"}>Go to News</Link>
            </div>
        </>
    )
}
