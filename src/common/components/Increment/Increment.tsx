import React from 'react';
import { Button, Flex, Group, Paper, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/common/hooks/hooks';
import { useInvertedTheme } from '@/common/hooks/invertedColorTheme';
import { decrement, increment, refresh } from '@/features/incrementSlice';
import classes from './Increment.module.css';

export const Increment = () => {
  const dispatch = useAppDispatch();
  const num = useAppSelector((state) => state.increment.value);
  const { backgroundCustomColors } = useInvertedTheme();
  return (
    <Flex direction="column">
      <Paper p="xs" mt="xl" mb="xl" radius="xl" ta="center" shadow="xs">
        <Text ta="center">Simple Increment (powered by RTK): </Text>
        <Text c="blue.6" fw={700} size="21px">
          {num}
        </Text>
      </Paper>

      <Group mt={30}>
        <Button
          radius="xl"
          size="md"
          className={classes.control}
          onClick={() => dispatch(refresh())}
          style={{...backgroundCustomColors}}
        >
          Refresh
        </Button>
        <Button
          variant="default"
          radius="xl"
          size="md"
          className={classes.control}
          onClick={() => dispatch(increment())}
        >
          Incremet
        </Button>
        <Button
          variant="default"
          radius="xl"
          size="md"
          className={classes.control}
          onClick={() => dispatch(decrement())}
        >
          decrement
        </Button>
      </Group>
    </Flex>
  );
};
