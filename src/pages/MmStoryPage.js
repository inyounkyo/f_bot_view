import React from 'react';
import { useState, useEffect } from 'react';

import MM_DATA from '../data/mock_mm_tj';

const MmStoryPage = () => {
    
    return (
        <div>
            안녕 매매일지 야~~~..
            {
                MM_DATA.map((d) =>{ 
                         return <h2 key={d.id}>{d.userName}</h2>
                })
            }
        </div>
    );
};

export default MmStoryPage;