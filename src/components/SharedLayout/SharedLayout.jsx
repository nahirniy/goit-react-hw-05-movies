import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

export default SharedLayout;
