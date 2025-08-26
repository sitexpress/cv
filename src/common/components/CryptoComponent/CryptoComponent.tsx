// import { useEffect } from 'react';

import { Carousel } from '@mantine/carousel';
import {
  Avatar,
  Box,
  Button,
  Container,
  Group,
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

import { useEffect, useState } from 'react';
import classes from './CryptoComponent.module.css';

export function CryptoComponent() {
  const [canClick, setCanClick] = useState(false);
  const dispatch = useAppDispatch();
  const cryptos = useAppSelector((state) => state.crypto.cryptos);
  const appStatus = useAppSelector((state) => state.app.status);



  const cryptosElements = cryptos.map((item, i) => (
    <Carousel.Slide pr={5} key={i}>
      <Paper key={i} withBorder shadow="lg" radius="lg" p="xl" w={200}>
        <Box pos="relative">
          <LoadingOverlay
            visible={appStatus === 'loading'}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 2 }}
          />
          <>
            <Avatar src={SetAnAvatarByTokenName(item.TOKEN_SYMBOL)} size={50} radius="md" />
            <div>
              <Text fz="xs" tt="uppercase" fw={700} c="dimmed" pt={20}>
                {item.TOKEN_NAME}
              </Text>

              <Text fz="lg" fw={500} className={classes.name}>
                <NumberFormatter prefix="$ " value={item.CURRENT_PRICE} thousandSeparator />
              </Text>

              <Group wrap="nowrap" gap={10} mt={3}>
                <Text fz="md" c="dimmed">
                  {item.TOKEN_SYMBOL.toUpperCase()}
                </Text>
              </Group>
            </div>
          </>
        </Box>
      </Paper>
    </Carousel.Slide>
  ));

  function CarouselComponent() {
    return (
      <Carousel
        classNames={classes}
        withControls={false}
        withIndicators
        slideSize={{ base: '20%' }}
        slideGap={{ base: 0, sm: 'xl' }}
        emblaOptions={{ loop: true, align: 'start' }}
        pb={50}
        controlsOffset={0}
      >
        {cryptosElements}
      </Carousel>
    );
  }

  const refreshPrice = () => {
      dispatch(fetchCryptolistsTC());
  };

  useEffect(() => {
    dispatch(fetchCryptolistsTC());

    const intervalId = setInterval(() => {
      dispatch(fetchCryptolistsTC());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container size="xl" p="xs" ta="center">
      <Title ta="center" size={25}>
        Текущие цены
      </Title>
      <Text mb={50} ta="center" size="md">
        цена автоматически обновляется каждую минуту
      </Text>
      <CarouselComponent />
      <Button
        mt={50}
        loading={appStatus === 'loading'}
        loaderProps={{ type: 'dots' }}
        onClick={refreshPrice}
      >
        обновить цену
      </Button>
    </Container>
  );
}
