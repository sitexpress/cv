import { useEffect } from 'react';
import { Box, Divider, Loader } from '@mantine/core';
import { CryptoComponent } from '@/common/components/CryptoComponent/CryptoComponent';
import { GridLine } from '@/common/components/Grid/Grid';
import { Header } from '@/common/components/Header/Header';
import { Hero } from '@/common/components/Hero/Hero';
import { useAppDispatch, useAppSelector } from '@/common/hooks/hooks';
import { setAppIsInitializedAC } from '@/features/appSlice';
import { LoaderComponent } from '@/common/components/Hero/Loader';

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
          <Divider my="xs" label="portfolio" labelPosition="center" pt={100} mb={100}/>
          <GridLine />
          <Divider my="xs" label="crypto price's" labelPosition="center" pt={100} mb={100} />
          <CryptoComponent />
        </>
      )}
    </>
  );
}
