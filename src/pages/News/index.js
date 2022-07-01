import React, { useState } from 'react';
import { ContentCard } from '../../components/ui/ContentCard';
/* import React from 'react'; */

import getActivePlanes from '../../functions/getActivePlanes';

export const News = () => {

    const [planes, setPlanes] = useState(null);

    getActivePlanes();

    return (
        <div className="p-4 box mt-3 text-center">
            <ContentCard />
            <ContentCard />
        </div>
    )
}
