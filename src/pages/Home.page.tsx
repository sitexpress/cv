import { useEffect } from 'react';
import { CryptoComponent } from '@/common/components/CryptoComponent/CryptoComponent';
import { Portfolio } from '@/common/components/Portfolio/Portfolio';
import { Header } from '@/common/components/Header/Header';
import { Hero } from '@/common/components/Hero/Hero';
import { useAppDispatch, useAppSelector } from '@/common/hooks/hooks';
import { setAppIsInitializedAC } from '@/features/appSlice';
import { LoaderComponent } from '@/common/components/Hero/Loader';
import { Vitae } from '@/common/components/Accordion/Vitae';
import { Footer } from '@/common/components/Footer/Footer';

export function HomePage() {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector((state) => state.app.isInitialized);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAppIsInitializedAC({ isInitialized: false }));
    }, 5000);
  }, []);

  return (
    <>
      {isInitialized ? (
        <LoaderComponent/>
      ) : (
        <>
          <Header />
          <Hero />
          <Portfolio />
          <Vitae/>
          <CryptoComponent />
          <Footer/>
        </>
      )}
    </>
  );
}
