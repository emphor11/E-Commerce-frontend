import React from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop';
import ShopCategory from './pages/shopCategory';
import Product from './pages/product';
import Cart from './pages/cart';
import LoginSignUp from './pages/loginSignUp';
import Profile from './pages/profile';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';
import ShopContextProvider from './context/ShopContext';
import AuthProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <main>
              <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/MENS' element={<ShopCategory banner={men_banner} category='men' />} />
                <Route path='/WOMENS' element={<ShopCategory banner={women_banner} category='women' />} />
                <Route path='/KIDS' element={<ShopCategory banner={kids_banner} category='kid' />} />
                <Route path='/product/:productId' element={<Product />} />
                <Route path=':productId' element={<Product />} />
                <Route 
                  path='/login' 
                  element={
                    <ProtectedRoute requireAuth={false}>
                      <LoginSignUp />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path='/cart' 
                  element={
                    <ProtectedRoute requireAuth={true}>
                      <Cart />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path='/profile' 
                  element={
                    <ProtectedRoute requireAuth={true}>
                      <Profile />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ShopContextProvider>
    </AuthProvider>
  );
}

export default App;
