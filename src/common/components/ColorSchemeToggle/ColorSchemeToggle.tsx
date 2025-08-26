import { useState } from 'react';
import { IconBulb, IconBulbFilled } from '@tabler/icons-react';
import { Button, Group, Stack, useMantineColorScheme } from '@mantine/core';

export const ColorSchemeToggle = () => {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const theme = useMantineColorScheme();
  console.log('theme:', theme);

  return theme.colorScheme === 'light' ? (
    <Button
      onClick={() => {
        setColorScheme('dark');
      }}
      bg="blue.3"
      radius="xl"
      p={5}
    >
      <IconBulbFilled />
    </Button>
  ) : (
    <Button
      onClick={() => {
        setColorScheme('light');
      }}
      bg="blue.3"
      radius="xl"
      p={5}
    >
      <IconBulb />
    </Button>
  );
};
