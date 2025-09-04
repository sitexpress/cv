import { Anchor, Container, Grid, Group, Image, Text, Title } from '@mantine/core';
import { useInvertedTheme } from '@/common/hooks/invertedColorTheme';

export function Portfolio() {
  const { styles } = useInvertedTheme();

  return (
    <div style={{ ...styles }}>
      <Container size="lg" pt={100} pb={100}>
        <Title ta="center" size={25}>
          Портфолио
        </Title>
        <Text pt={20} mb={50} ta="center" size="md">
          Различные пет-проекты
        </Text>

        <Grid grow gutter="xl" justify="start" align="start">
          <Grid.Col span={{ base: 12, xs: 2 }}>
            <Group justify="center" align="center">
              <Anchor
                component="a"
                href="https://google-books-app.vercel.app/"
                w={300}
                target="_blank"
              >
                <Image
                  src="/images/portfolio/books.jpg"
                  fallbackSrc="https://placehold.co/600x250?text=google.books.app"
                  alt="Google-books-app"
                  w={300}
                  h={150}
                  width={300}
                  height={150}
                  fit="fill"
                  radius="20px"
                  style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)' }}
                />
                <Text c="dimmed" ta="center">
                  Google.books.react.app
                </Text>
              </Anchor>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, xs: 2 }}>
            <Group justify="center" align="center">
              <Anchor component="a" href="https://test-one.ru/" w={300} target="_blank">
                <Image
                  src="/images/portfolio/english.jpg"
                  fallbackSrc="https://placehold.co/600x250?text=English.school.app.app"
                  alt="English.app"
                  w={300}
                  h={150}
                  width={300}
                  height={150}
                  fit="fill"
                  radius="20px"
                  style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)' }}
                />
                <Text c="dimmed" ta="center">
                  English.school.react.app
                </Text>
              </Anchor>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, xs: 2 }}>
            <Group justify="center" align="center">
              <Anchor component="a" href="https://kindazor-app.vercel.app/" w={300} target="_blank">
                <Image
                  src="/images/portfolio/drones.jpg"
                  fallbackSrc="https://placehold.co/600x250?text=airveya.drones.app"
                  alt="Uber-app"
                  w={300}
                  h={150}
                  width={300}
                  height={150}
                  fit="fill"
                  radius="20px"
                  style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)' }}
                />
                <Text c="dimmed" ta="center">
                  kindazor.drone.react.app
                </Text>
              </Anchor>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, xs: 2 }}>
            <Group justify="center" align="center">
              <Anchor component="a" href="https://uber-html.vercel.app/" w={300} target="_blank">
                <Image
                  src="/images/portfolio/uber.webp"
                  fallbackSrc="https://placehold.co/600x250?text=uber.layout"
                  alt="Uber-app"
                  w={300}
                  h={150}
                  width={300}
                  height={150}
                  fit="fill"
                  radius="20px"
                  style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)' }}
                />
                <Text c="dimmed" ta="center">
                  Uber.layout
                </Text>
              </Anchor>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, xs: 2 }}>
            <Group justify="center" align="center">
              <Anchor component="a" href="https://yoga-chi-bay.vercel.app/" w={300} target="_blank">
                <Image
                  src="/images/portfolio/yoga.jpg"
                  fallbackSrc="https://placehold.co/600x250?text=yoga.layout.app"
                  alt="Uber-app"
                  w={300}
                  h={150}
                  width={300}
                  height={150}
                  fit="fill"
                  radius="20px"
                  style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)' }}
                />
                <Text c="dimmed" ta="center">
                  Yoga.layout
                </Text>
              </Anchor>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, xs: 2 }}>
            <Group justify="center" align="center">
              <Anchor component="a" href="https://stroy-family.ru/" w={300} target="_blank">
                <Image
                  src="/images/portfolio/family.jpg"
                  fallbackSrc="https://placehold.co/600x250?text=stroy.family.next.js.app"
                  alt="Uber-app"
                  w={300}
                  h={150}
                  width={300}
                  height={150}
                  fit="fill"
                  radius="20px"
                  style={{ boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)' }}
                />
                <Text c="dimmed" ta="center">
                  Next.app StroyFamily
                </Text>
              </Anchor>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
