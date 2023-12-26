import Header from 'components/Header/Header';
import Section from 'components/Section/Section';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </>
  );
};

export default SharedLayout;
