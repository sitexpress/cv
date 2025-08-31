import { IconBulb, IconMoonStars } from '@tabler/icons-react';
import { Button, useMantineColorScheme } from '@mantine/core';
import { useInvertedTheme } from '@/common/hooks/invertedColorTheme';

export const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const theme = useMantineColorScheme();
  const { backgroundCustomColors } = useInvertedTheme();

  return theme.colorScheme === 'light' ? (
    <Button
      onClick={() => {
        setColorScheme('dark');
      }}
      radius="xl"
    >
      <IconBulb />
    </Button>
  ) : (
    <Button
      onClick={() => {
        setColorScheme('light');
      }}
      radius="xl"
      style={{...backgroundCustomColors}}
    >
      <IconMoonStars style={{...backgroundCustomColors}}/>
    </Button>
  );
};
