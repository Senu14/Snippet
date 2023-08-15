import React from 'react'; 
import { Route, Routes } from 'react-router-dom';

//import All Pages
import Home from '../Pages/Home/Home';
import Cards from '../Pages/Cards/Cards';
import Products from '../Pages/Products/Products';
import FormValidation from '../Pages/FormValidation/FormValidation';
import Login from '../Pages/Login/Login';

//Layouts that wrapped the other pages
import Navigation from '../Navigations/Navigation';


const AppRouter = () => {
     return(
          <Routes>
               <Route path= "/" element={<Navigation />} />
               <Route index path="/" element={<Home />} />
               <Route path="/cards" element={<Cards />} />
               <Route path="/products" element={<Products />} />
               <Route path="/formvalidation" element={<FormValidation />} />
               <Route path="/login" element={<Login/>} />

          </Routes>
     )
}

export default AppRouter;