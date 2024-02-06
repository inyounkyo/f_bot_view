import { Routes, Route } from 'react-router-dom';

import AssetPage from '../pages/AssetPage';
import HistoryPage from '../pages/HistoryPage';
import InvestPage from '../pages/InvestPage';

const Navigation = () => (
    <Routes>
        <Route path='/' element={<AssetPage />} />
        <Route path='/aa' element={<HistoryPage />} />
        <Route path='/bb' element={<InvestPage />} />
    </Routes>
);

export default Navigation;