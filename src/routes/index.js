import routesConfig from '@/config/routes';

import CategoryPage from '@/pages/CategoryPage';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import ProductPage from '@/pages/ProductPage';
import SignupPage from '@/pages/SignupPage';
import OtpVerificationPage from '@/pages/SignupPage copy 2';

// Public routes
const publicRoutes = [
  { path: routesConfig.home, component: HomePage },
  { path: routesConfig.category, component: CategoryPage },
  { path: routesConfig.product, component: ProductPage },
  { path: routesConfig.signup, component: SignupPage, layout: null },
  {
    path: routesConfig.otpVerification,
    component: OtpVerificationPage,
    layout: null,
  },
  { path: routesConfig.login, component: LoginPage, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
