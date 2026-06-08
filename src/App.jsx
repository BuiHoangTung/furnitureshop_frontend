import GlobalStyles from './components/GlobalStyles';
import { DefaultLayout } from '@/components/Layout';
import { getCategories } from '@/services/categoryService';
import { publicRoutes } from '@/routes';

import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    getCategories('Furniture');
  }, []);

  return (
    <>
      <Router>
        <GlobalStyles>
          <Routes>
            {publicRoutes.map((route, idx) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </GlobalStyles>
      </Router>
    </>
  );
}

export default App;
