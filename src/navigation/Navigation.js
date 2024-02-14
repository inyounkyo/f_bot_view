import { Routes, Route } from 'react-router-dom';

import SignalPage from '../pages/SignalPage';
import HistoryPage from '../pages/HistoryPage';
import InvestPage from '../pages/InvestPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/Layout';

const Navigation = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<SignalPage />} />
            <Route path='/history' element={<HistoryPage />} />
            <Route path='/invest' element={<InvestPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
);

export default Navigation;