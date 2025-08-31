import { Carousel } from '@mantine/carousel';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  LoadingOverlay,
  NumberFormatter,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/common/hooks/hooks';
import { SetAnAvatarByTokenName } from '@/common/utils/setAnAvatarByTokenName';
import { fetchCryptolistsTC } from '@/features/cryptoSlice';

import '@mantine/carousel/styles.css';

import { memo, useEffect, useMemo, useState } from 'react';
import classes from './CryptoComponent.module.css';

// Выносим отдельный элемент карусели в мемоизированный компонент
const CryptoItem = memo(({ item, appStatus }: { item: any; appStatus: string }) => (
  <Carousel.Slide pr={5} pl={1} pb={20}>
    <Paper withBorder shadow="lg" radius={30} w={180}>
      <Box pos="relative" p="xl">
        <LoadingOverlay
          visible={appStatus === 'loading'}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 10 }}
          style={{ borderRadius: 30 }}
        />
        <Flex direction="column" justify="center" align="center">
          <Avatar src={SetAnAvatarByTokenName(item.TOKEN_SYMBOL)} size={50} radius="md" />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed" pt={20}>
              {item.TOKEN_NAME}
            </Text>
            <Text fz="md" c="dimmed">
              {item.TOKEN_SYMBOL.toUpperCase()}
            </Text>

            <Text fz="lg" fw={500} className={classes.name}>
              <NumberFormatter prefix="$ " value={item.CURRENT_PRICE} thousandSeparator />
            </Text>
          </div>
        </Flex>
      </Box>
    </Paper>
  </Carousel.Slide>
));

CryptoItem.displayName = 'CryptoItem';

// Выносим карусель в отдельный мемоизированный компонент
const MemoizedCarousel = memo(({ cryptos, appStatus }: { cryptos: any[]; appStatus: string }) => {
  const cryptosElements = useMemo(
    () => cryptos.map((item, i) => <CryptoItem key={i} item={item} appStatus={appStatus} />),
    [cryptos, appStatus]
  );

  return (
    <Carousel
      classNames={classes}
      withControls={false}
      withIndicators
      slideSize={{ base: '20%' }}
      slideGap={{ base: 0, sm: 'xs' }}
      emblaOptions={{ loop: true, align: 'start' }}
      pb={50}
      controlsOffset={0}
    >
      {cryptosElements}
    </Carousel>
  );
});

MemoizedCarousel.displayName = 'MemoizedCarousel';

export function CryptoComponent() {
  const [btnTimer, setBtnTimer] = useState<number | null>(null);
  const [refreshTimer, setRefreshTimer] = useState<number>(60);
  const dispatch = useAppDispatch();
  const cryptos = useAppSelector((state) => state.crypto.cryptos);
  const appStatus = useAppSelector((state) => state.app.status);

  const refreshPrice = () => {
    if (btnTimer === null || btnTimer === 0) {
      setBtnTimer(20);
      dispatch(fetchCryptolistsTC());
    }
  };

  useEffect(() => {
    if (btnTimer !== null && btnTimer > 0) {
      const timeoutId = setTimeout(() => {
        setBtnTimer(btnTimer - 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [btnTimer]);

  useEffect(() => {
    if (refreshTimer > 0) {
      const refreshTimerId = setTimeout(() => {
        setRefreshTimer(refreshTimer - 1);
      }, 1000);
      return () => clearTimeout(refreshTimerId);
    }
  }, [refreshTimer]);

  useEffect(() => {
    dispatch(fetchCryptolistsTC());

    const intervalId = setInterval(() => {
      dispatch(fetchCryptolistsTC());
      setRefreshTimer(60);
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container size="xl" p="xs" ta="center" pt={100} mb={100}>
      <Title ta="center" size={25}>
        Популярные монеты
      </Title>

      <Text mb={30} ta="center" size="md">
        Реализация динамического отображения котировок криптовалют с интеллектуальным механизмом
        обновления данных, использующая
        <Text component="a" href="https://www.tokenmetrics.com/" c="blue.6">
          {' '}
          API Token Metrics.
        </Text>
      </Text>
      <Text mb={30} ta="center" size="md">
        автообновление через : {refreshTimer}
      </Text>
      <MemoizedCarousel cryptos={cryptos} appStatus={appStatus} />
      <Button
        mt={30}
        loading={appStatus === 'loading'}
        loaderProps={{ type: 'dots' }}
        onClick={refreshPrice}
        size="md"
        radius="xl"
        w="300px"
        disabled={!!btnTimer}
      >
        {btnTimer ? `Можно обновить через: ${btnTimer} сек` : 'обновить цену'}
      </Button>
    </Container>
  );
}
