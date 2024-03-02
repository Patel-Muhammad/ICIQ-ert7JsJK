import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import DashboardLayout from '../layouts/dashboard-layout';
import Headings from '../pages/design-reference/Headings';
import FormFields from '../pages/design-reference/FormFields';
import Buttons from '../pages/design-reference/Buttons';
import TableReference from '../pages/design-reference/TableReference';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout children={<Home />} />} />

      {/* Design References */}
      <Route
        path="/home"
        element={<DashboardLayout children={<Headings />} />}
      />
      <Route
        path="/form"
        element={<DashboardLayout children={<FormFields />} />}
      />
      <Route
        path="/buttons"
        element={<DashboardLayout children={<Buttons />} />}
      />
      <Route
        path="/table"
        element={<DashboardLayout children={<TableReference />} />}
      />
    </Routes>
  );
};

export default Router;
