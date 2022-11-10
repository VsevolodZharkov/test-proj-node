import Footer from 'components/Footer/Footer';
import MainContainer from 'components/MainContainer/MainContainer';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <Outlet />
      </MainContainer>

      <Footer />
    </>
  );
};

export default Layout;
