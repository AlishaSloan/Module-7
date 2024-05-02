import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import DashboardPage from '../components/DashboardPage';
import AboutPage from '../components/AboutPage';
import PageNotFound from '../components/PageNotFound';
import BitcoinRates from '../components/BitcoinRates';


function AppRoutes() {
return (
<Routes>

  <Route path="/" element={<Homepage />} />

  <Route path="/BitcoinRates" element={<BitcoinRates/>}>

    <Route path="messages" element={<DashboardMessages />} />


  </Route>

  <Route path="/about" element={<AboutPage />} />

  <Route path="*" element={<PageNotFound />} />

</Routes>
);
}
export default AppRoutes;