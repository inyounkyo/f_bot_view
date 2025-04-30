import { Routes, Route } from 'react-router-dom';

import SignalPage from '../pages/SignalPage';
import HistoryPage from '../pages/HistoryPage';
import InvestPage from '../pages/InvestPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/Layout';

import MmStoryPage from '../pages/MmStoryPage'
import Z02 from '../pages/zeroCho/Z02';
import Z03 from '../pages/zeroCho/Z03';
import Signup from '../pages/zeroCho/Signup';

import ProfitAndLoss from '../pages/invest/ProfitAndLoss';

import Ludy_css_login from '../pages/study/Ludy_css_login';

const Navigation = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<SignalPage />} />
            <Route path='/history' element={<HistoryPage />} />
            <Route path='/invest' element={<InvestPage />} />
            <Route path='/mm' element={<MmStoryPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />

        <Route path='/invest/profit' element={<ProfitAndLoss />} />
        <Route path='/study/ludy_css' element={<Ludy_css_login />} />
        
        <Route path='/z02' element={<Z02 />} />
        <Route path='/z03' element={<Z03 />} />
        <Route path='/signup' element={<Signup />} />

    </Routes>
);

export default Navigation;