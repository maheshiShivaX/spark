import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/HomePage/index';
import AboutUsPage from './Components/AboutUsPage';
import OurProductsPage from './Components/OurProducts';
import ProductDetailsPage from './Components/ProductDetails';
import GetQuotePage from './Components/GetQuotePage';
import AddQuotationPage from './Components/AddQuotation';
import FinancingServicesPage from './Components/FinancingServicesPage';
import ThankYou from './Components/Shared/ThankYou';

import DashboardInnerPage from './Admin/DashboardInnerPage'; // Admin Dashboard Page
import History from './Admin/History';
import Settings from './Admin/Settings';
import LoginPage from './Components/Auth';
import SignUp from './Components/Auth/SignUp';
import ForgotPassowrd from './Components/Auth/ForgotPassowrd';
import ResetPassword from './Components/Auth/ResetPassword';
import Table from './Admin/Table';
import { ToastContainer } from 'react-toastify';
import Appointments from './Admin/Appointments';
import ClubMembership from './Components/HomePage/ClubMembership';
import ClubMembershipList from './Admin/ClubMembershipList';
import Enquiry from './Admin/Enquiry';
import QuotationList from './Admin/QuotationList';
import ProductCategory from './Admin/ProductCategory';
import ProductSubCategory from './Admin/ProductSubCategory';
import UserDashboard from './Admin/UserDashboard';
import UserAppointments from './Admin/UserAppointments';
import UserEnquiry from './Admin/UserEnquiry';
import Product from './Admin/Product';
import ProductSpecification from './Admin/ProductSpecification';

import ProductImages from './Admin/ProductImages';
import ProductDetail from './Admin/ProductDetail';
import ProductQuotation from './Admin/ProductQuotation';
import QuatationTemplate from './Admin/QuatationTemplate';
import UserClubMembership from './Admin/UserClubMembership';
import UserQuotation from './Admin/UserQuotation';
import UserProductQuotation from './Admin/UserProductQuotation';




function App() {
  return (
    <div className="App">
      <ToastContainer />
      <HashRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/our-product" element={<OurProductsPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailsPage />} />
          <Route path="/get-quote-step" element={<GetQuotePage />} />

          <Route path="/add-quotation" element={<AddQuotationPage />} />
          <Route path="/financing-services" element={<FinancingServicesPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassowrd />} />
          <Route path="/reset-password" element={<ResetPassword />} />


          {/* Admin Routes */}
          <Route path="/admin"  >
            <Route path="dashboard" element={<DashboardInnerPage />} />
            <Route path="history" element={<History />} />
            <Route path="settings" element={<Settings />} />
            <Route path="table" element={<Table />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="clubmembershiplist" element={<ClubMembershipList />} />
            <Route path="enquiry" element={<Enquiry />} />
            <Route path="quotationlist" element={<QuotationList />} />

            <Route path="productcategory" element={<ProductCategory />} />
            <Route path="productsubcategory" element={<ProductSubCategory />} />

            <Route path="userdashboard" element={<UserDashboard />} />
            <Route path="userappointments" element={<UserAppointments />} />
            <Route path="userenquiry" element={<UserEnquiry />} />
            <Route path="product" element={<Product />} />
            <Route path="productspecification" element={<ProductSpecification />} />
            <Route path="productimage" element={<ProductImages />} />
            <Route path="productdetail/:id" element={<ProductDetail />} />

            <Route path="productquotation" element={<ProductQuotation />} />
            
            <Route path="quatationtemplate/:id" element={<QuatationTemplate />} />
            <Route path="userclubmembership" element={<UserClubMembership />} />
            <Route path="userquotation" element={<UserQuotation />} />
            <Route path="userproductquotation" element={<UserProductQuotation />} />

            
            
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
