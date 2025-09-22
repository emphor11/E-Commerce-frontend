import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './CSS/loginSignUp.css';

function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const { signIn, signUp, loading, error, clearError, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated()) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear general error
    if (error) {
      clearError();
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!isLogin && !formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (!isLogin && formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      if (isLogin) {
        await signIn(formData.email, formData.password);
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      } else {
        await signUp(formData);
        // After successful signup, show success message and switch to login
        setIsLogin(true);
        setFormData({ name: '', email: '', password: '' });
      }
    } catch (error) {
      // Error is handled by the AuthContext
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className='loginSignuo'>
      <div className={`loginSignup-container ${loading ? 'loading' : ''}`}>
        <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="logimSignup-fields">
            {!isLogin && (
              <div className="input-group">
                <input 
                  type='text' 
                  name='name'
                  placeholder='Enter Your Name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className={formErrors.name ? 'error' : ''}
                  disabled={loading}
                />
                {formErrors.name && <span className="field-error">{formErrors.name}</span>}
              </div>
            )}
            
            <div className="input-group">
              <input 
                type='email' 
                name='email'
                placeholder='Enter Your Email'
                value={formData.email}
                onChange={handleInputChange}
                className={formErrors.email ? 'error' : ''}
                disabled={loading}
              />
              {formErrors.email && <span className="field-error">{formErrors.email}</span>}
            </div>
            
            <div className="input-group">
              <input 
                type='password' 
                name='password'
                placeholder='Enter Your Password'
                value={formData.password}
                onChange={handleInputChange}
                className={formErrors.password ? 'error' : ''}
                disabled={loading}
              />
              {formErrors.password && <span className="field-error">{formErrors.password}</span>}
            </div>
          </div>
          
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? (
              <>
                <div className="spinner"></div>
                Processing...
              </>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>
        
        <p className="loginSignup-login">
          {isLogin ? "Don't have an account? " : "Already have an Account? "}
          <span onClick={() => {
            if (!loading) {
              setIsLogin(!isLogin);
              setFormData({ name: '', email: '', password: '' });
              setFormErrors({});
              clearError();
            }
          }}>
            {isLogin ? 'Sign up here' : 'Login here'}
          </span>
        </p>
        
        {!isLogin && (
          <div className="loginSignup-agree">
            <input type='checkbox' name='agree' id='agree' required disabled={loading}/>
            <label htmlFor='agree'>By continuing, I agree to the terms of use and privacy policy.</label>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignUp;