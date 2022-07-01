import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { ContentCard } from '../ContentCard';
import { ContentCardIndex } from '../ContentCardIndex'

import './input.css';
import getActivePlanes from '../../../functions/getActivePlanes';

export const Input = () => {
    const [inputLabel, setInputLabel] = useState(false);

    const [planes, setPlanes] = useState(null);

    useEffect(() => {
        async function getPlanes() {
            const planes = await getActivePlanes();
            setPlanes(planes);
        }

        getPlanes();
    }, []);

    return (
        <>
            <ul className='d-flex'>
                {planes ? planes.map((p) =>
                    <li key={p.id} className="list-unstyled m-5">
                        <ContentCardIndex changeContent={!inputLabel} plan={p} />
                    </li>
                ) : null}
            </ul>
        </>
    )
}
