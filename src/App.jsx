import HomePage from '@/pages/HomePage';
import GlobalStyles from './components/GlobalStyles';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <GlobalStyles>
        <Layout>
          <HomePage />
        </Layout>
      </GlobalStyles>
    </>
  );
}

export default App;
