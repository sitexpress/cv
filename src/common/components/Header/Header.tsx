import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Flex,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import classes from './Header.module.css';

const mockdata = [
  {
    icon: IconCode,
    title: 'HTML',
    description: 'Знания: хорошие',
  },
  {
    icon: IconCoin,
    title: 'CSS',
    description: 'Знания: хорошие',
  },
  {
    icon: IconCoin,
    title: 'Scss, Sass',
    description: 'Знания: хорошие',
  },
  {
    icon: IconBook,
    title: 'JavaScript',
    description: 'Знания: хорошие',
  },
  {
    icon: IconFingerprint,
    title: 'TypeScript',
    description: 'Знания: хорошие',
  },
  {
    icon: IconChartPie3,
    title: 'React',
    description: 'Знания: хорошие',
  },
  {
    icon: IconNotification,
    title: 'Next.js',
    description: 'Знания: хорошие',
  },
  {
    icon: IconNotification,
    title: 'Express.js',
    description: 'Знания: хорошие',
  },
  {
    icon: IconNotification,
    title: 'Nest.js',
    description: 'Знания: хорошие',
  },
  {
    icon: IconNotification,
    title: 'Redux, RTK',
    description: 'Знания: хорошие',
  },
  {
    icon: IconNotification,
    title: 'Prisma',
    description: 'Знания: средние',
  },
  {
    icon: IconNotification,
    title: 'SQL',
    description: 'Знания: средние',
  },
  {
    icon: IconNotification,
    title: 'Postgress',
    description: 'Знания: средние',
  },
  {
    icon: IconNotification,
    title: 'Nginx',
    description: 'Знания: базовые+',
  },
  {
    icon: IconNotification,
    title: 'Docker',
    description: 'Знания: базовые+',
  },
  {
    icon: IconNotification,
    title: 'MantineUI, MUI, ShadcinUI',
    description: 'Знания: базовые+',
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Flex justify="center" align="center" gap={10}>
            <Title size="lg" fw={700}>
              FRONT.DEV.CV
            </Title>
            <ColorSchemeToggle />
          </Flex>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Главная
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Стек
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>ТЕХНОЛОГИИ</Text>
                  {/* <Text fw={500}>которые я применяю</Text> */}
                  {/* <Anchor href="https://github.com/sitexpress" fz="xs" target="_blank">
                    Link to my github
                  </Anchor> */}
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group visibleFrom="sm">
            <Button>Default button</Button>
          </Group>

          <Burger
            lineSize={3}
            size="md"
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          <a href="#" className={classes.link}>
            Главная
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Стек
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          {/* <a href="#" className={classes.link}>
            Github
          </a> */}
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
