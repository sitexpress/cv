import { useMantineColorScheme, useMantineTheme } from '@mantine/core';

export function useInvertedTheme() {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const invertedColorScheme = colorScheme === 'dark' ? 'light' : 'dark';

  const invertedColors = {
    background: invertedColorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    text: invertedColorScheme === 'dark' ? theme.white : theme.colors.dark[7],
    border: invertedColorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
  };

  const textCustomColors = {
    text: invertedColorScheme === 'light' ? theme.colors.yellow[4] : theme.colors.dark[7],
  };
  const invertedtextCustomColors = {
    text: invertedColorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[7],
  };

  const backgroundCustomColor = {
    background: invertedColorScheme === 'dark' ?  theme.colors.dark[7] : theme.colors.yellow[4],
  };

  const backgroundWhite = {
    background: invertedColorScheme === 'dark' ?  theme.colors.dark[7] : "white",
  };


  return {
    colorScheme: invertedColorScheme,
    colors: invertedColors,
    styles: {
      backgroundColor: invertedColors.background,
      color: invertedColors.text,
      borderColor: invertedColors.border,
    },
    textCustomColors: {
      color: textCustomColors.text,
    },
    invertedTextCustomColors: {
      color: invertedtextCustomColors.text,
    },
    backgroundCustomColors: {
      backgroundColor: backgroundCustomColor.background,
      color: invertedColors.text,
    },
    backgroundCustomWhite: {
      backgroundColor: backgroundWhite.background,
      color: invertedColors.text,
    },
  };
}
