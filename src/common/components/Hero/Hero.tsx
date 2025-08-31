import { useEffect } from 'react';
import { IconCheck } from '@tabler/icons-react';
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
import { Increment } from '../Increment/Increment';
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

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAppIsInitializedAC({ isInitialized: false }));
    }, 5000);
  }, []);

  return (
    <Container size="xl" mb={100} pt={200}>
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
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <Popover width={200} position="bottom" withArrow shadow="md" opened={openedA}>
                  <Popover.Target>
                    <Anchor
                      inherit
                      href="https://vite.dev/"
                      onMouseEnter={openA}
                      onMouseLeave={closeA}
                      target="_blank"
                    >
                      <b>Vite</b> – JS фреймворк
                    </Anchor>
                  </Popover.Target>
                  <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                    <Text size="sm">Открыть в новой вкладке страницу: vite.dev</Text>
                  </Popover.Dropdown>
                </Popover>
              </List.Item>

              <List.Item>
                <Popover width={200} position="bottom" withArrow shadow="md" opened={openedB}>
                  <Popover.Target>
                    <Anchor
                      inherit
                      href="https://www.typescriptlang.org/"
                      onMouseEnter={openB}
                      onMouseLeave={closeB}
                      target="_blank"
                    >
                      <b>TypeScript</b> – типизированный JS
                    </Anchor>
                  </Popover.Target>
                  <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                    <Text size="sm">Открыть в новой вкладке страницу: typescriptlang.org</Text>
                  </Popover.Dropdown>
                </Popover>
              </List.Item>

              <List.Item>
                <Popover width={200} position="bottom" withArrow shadow="md" opened={openedC}>
                  <Popover.Target>
                    <Anchor
                      inherit
                      href="https://redux-toolkit.js.org/rtk-query/overview"
                      onMouseEnter={openC}
                      onMouseLeave={closeC}
                      target="_blank"
                    >
                      <b>Redux-Toolkit</b> – стэйт менеджер
                    </Anchor>
                  </Popover.Target>
                  <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                    <Text size="sm">Открыть в новой вкладке страницу: redux-toolkit.js.org</Text>
                  </Popover.Dropdown>
                </Popover>
              </List.Item>

              <List.Item>
                <Popover width={200} position="bottom" withArrow shadow="md" opened={openedD}>
                  <Popover.Target>
                    <Anchor
                      inherit
                      href="https://mantine.dev/"
                      onMouseEnter={openD}
                      onMouseLeave={closeD}
                      target="_blank"
                    >
                      <b>Mantine UI</b> – UI фреймворк
                    </Anchor>
                  </Popover.Target>
                  <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                    <Text size="sm">Открыть в новой вкладке страницу: mantine.dev</Text>
                  </Popover.Dropdown>
                </Popover>
              </List.Item>

              <List.Item>
                <Popover width={200} position="bottom" withArrow shadow="md" opened={openedE}>
                  <Popover.Target>
                    <Anchor
                      inherit
                      href="https://animate.style/"
                      onMouseEnter={openE}
                      onMouseLeave={closeE}
                      target="_blank"
                    >
                      <b>Animate.style</b> – библиотека для анимации
                    </Anchor>
                  </Popover.Target>
                  <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                    <Text size="sm">Открыть в новой вкладке страницу: animate.style</Text>
                  </Popover.Dropdown>
                </Popover>
              </List.Item>
            </List>

            <Increment />
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
