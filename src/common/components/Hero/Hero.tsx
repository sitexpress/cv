import { useEffect } from 'react';
import {
  IconBook,
  IconChartPie3,
  IconCheck,
  IconCode,
  IconNotification,
} from '@tabler/icons-react';
import img from '/images/img-2.png';
import {
  Anchor,
  Container,
  Image,
  List,
  Popover,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAppDispatch } from '@/common/hooks/hooks';
import { useInvertedTheme } from '@/common/hooks/invertedColorTheme';
import { setAppIsInitializedAC } from '@/features/appSlice';
import classes from './Hero.module.css';

export function Hero() {
  const [openedA, { close: closeA, open: openA }] = useDisclosure(false);
  const [openedB, { close: closeB, open: openB }] = useDisclosure(false);
  const [openedC, { close: closeC, open: openC }] = useDisclosure(false);
  const [openedD, { close: closeD, open: openD }] = useDisclosure(false);
  const [openedE, { close: closeE, open: openE }] = useDisclosure(false);

  const dispatch = useAppDispatch();
  const theme = useMantineColorScheme();
  const { textCustomColors } = useInvertedTheme();

  const data = [
    {
      href: 'https://vite.dev/',
      lib: 'Vite',
      descr: ' – JS фреймворк',
      open: openA,
      close: closeA,
      setOpen: openedA,
      drop: 'Открыть в новой вкладке страницу: vite.dev',
    },
    {
      href: 'https://www.typescriptlang.org/',
      lib: 'TypeScript',
      descr: ' – типизированный JS',
      open: openB,
      close: closeB,
      setOpen: openedB,
      drop: 'Открыть в новой вкладке страницу: typescriptlang.org',
    },
    {
      href: 'https://redux-toolkit.js.org/rtk-query/overview',
      lib: 'Redux-Toolkit',
      descr: ' – стэйт менеджер',
      open: openC,
      close: closeC,
      setOpen: openedC,
      drop: 'Открыть в новой вкладке страницу: redux-toolkit.js.org',
    },
    {
      href: 'https://mantine.dev/',
      lib: 'Mantine UI',
      descr: ' – UI фреймворк',
      open: openD,
      close: closeD,
      setOpen: openedD,
      drop: 'Открыть в новой вкладке страницу: mantine.dev',
    },
    {
      href: 'https://animate.style/',
      lib: 'Animate.style',
      descr: ' – библиотека для анимации',
      open: openE,
      close: closeE,
      setOpen: openedE,
      drop: 'Открыть в новой вкладке страницу: animate.style',
    },
  ];

  const mockData = [
    {
      icon: IconNotification,
      title: 'MantineUI, MUI, ShadcinUI',
      description: 'Знания: базовые+',
    },
    {
      icon: IconCode,
      title: 'HTML, CSS, Scss, Sass',
      description: 'Знания: хорошие',
    },
    {
      icon: IconBook,
      title: 'JavaScript, TypeScript',
      description: 'Знания: хорошие',
    },
    {
      icon: IconChartPie3,
      title: 'React, Next.js, Vite',
      description: 'Знания: хорошие',
    },
    {
      icon: IconNotification,
      title: 'Express.js, Nest.js',
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
      title: 'SQL, Postgress',
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
      title: 'Linux',
      description: 'Знания: базовые+',
    },
  ];

   const contactData = [
    {
      icon: IconNotification,
      title: 'Telegram',
      description: '@sulnikon',
    },
    {
      icon: IconCode,
      title: 'Whatsapp',
      description: '+79649466790',
    },
    {
      icon: IconCode,
      title: 'Email',
      description: 'sitexpressorg@gmail.com',
    },
  ];

  const listItems = data.map((item) => (
    <List.Item>
      <Popover width={200} position="bottom" withArrow shadow="md" opened={item.setOpen}>
        <Popover.Target>
          <Anchor
            inherit
            href={item.href}
            onMouseEnter={item.open}
            onMouseLeave={item.close}
            target="_blank"
          >
            <b>{item.lib}</b>
            {item.descr}
          </Anchor>
        </Popover.Target>
        <Popover.Dropdown style={{ pointerEvents: 'none' }}>
          <Text size="sm">{item.drop}</Text>
        </Popover.Dropdown>
      </Popover>
    </List.Item>
  ));

  const mockdataItems = mockData.map((item) => (
    <List.Item>
      <Popover>
        <Popover.Target>
          <Anchor component="a" inherit target="_blank">
            <b>{item.title}</b>
          </Anchor>
        </Popover.Target>
        <Popover.Dropdown style={{ pointerEvents: 'none' }}>
          <Text size="sm">{item.description}</Text>
        </Popover.Dropdown>
      </Popover>
    </List.Item>
  ));

  const contactItems = contactData.map((item) => (
    <List.Item>
      <Popover>
        <Popover.Target>
          <Anchor component="a" inherit target="_blank">
            <b>{item.title}</b>
            <Text size="sm" >{item.description}</Text>
          </Anchor>
        </Popover.Target>
        <Popover.Dropdown style={{ pointerEvents: 'none' }}>
          <Text size="sm">{item.description}</Text>
        </Popover.Dropdown>
      </Popover>
    </List.Item>
  ));

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAppIsInitializedAC({ isInitialized: false }));
    }, 5000);
  }, []);

  return (
    <Container size="xl" mb={100} pt={50}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <div className="animate__animated animate__fadeInRight animate__delay-0.5s">
            <Title className={classes.title} style={{ ...textCustomColors }}>
              Гедгафов Султан <br /> <span className={classes.highlight}>JS TS React Next</span>
              <br /> разработчик
            </Title>
          </div>
          <div className="animate__animated animate__pulse">
            <Text c="dimmed" mt="md">
              Портфолио сделано с использованием <br /> следующих технологий:
            </Text>
            <List
              mt={15}
              spacing="sm"
              size="xs"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              {contactItems}
            </List>
            <Text c="dimmed" mt="md">
              Стек технологий:
            </Text>
            <List
              mt={15}
              spacing="sm"
              size="xs"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              {mockdataItems}
            </List>

            {/* <Increment /> */}
          </div>
        </div>
        <div className="animate__animated animate__backInRight  animate__delay-1s">
          <Image
            src={img}
            className={classes.image}
            style={
              theme.colorScheme === 'dark'
                ? {
                    filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))',
                  }
                : { filter: 'drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.9))' }
            }
          />
        </div>
      </div>
    </Container>
  );
}
