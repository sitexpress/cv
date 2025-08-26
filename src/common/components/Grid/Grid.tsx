// import { Anchor, Container, Flex, Grid, Image, Paper, Skeleton, Text } from '@mantine/core';

// const child = <Skeleton height={140} radius="md" animate={false} />;

// export function GridAsymmetrical() {
//   return (
//     <Container my="xl" pt={100} mb={100}>
//       <Grid>
//         <Grid.Col span={{ base: 12, xs: 4 }}>
//           <Flex p={0} m={0} direction="column" justify="center" align="center">
//             <Paper style={{ borderRadius: '20px' }} shadow="xl">
//               <Anchor href="https://todolist-zeta-mocha.vercel.app/" target="_blank">
//                 <Image
//                   src="/images/portfolio/todolist.jpg"
//                   style={{ borderRadius: '20px' }}
//                   fallbackSrc="https://placehold.co/600x250?text=Todo-list.app"
//                   alt="Todo-list.app"
//                 />
//               </Anchor>
//             </Paper>
//             <Text c="dimmed">Todolist.app</Text>
//           </Flex>
//         </Grid.Col>
//         <Grid.Col span={{ base: 12, xs: 8 }}>
//           <Flex p={0} m={0} direction="column" justify="center" align="center">
//             <Paper style={{ borderRadius: '20px' }} shadow="xl">
//               <Anchor href="https://todolist-zeta-mocha.vercel.app/" target="_blank">
//                 <Image
//                   src="/images/portfolio/todolist.jpg"
//                   style={{ borderRadius: '20px' }}
//                   fallbackSrc="https://placehold.co/600x250?text=Todo-list.app"
//                   alt="Todo-list.app"
//                 />
//               </Anchor>
//             </Paper>
//             <Text c="dimmed">Todolist.app</Text>
//           </Flex>
//         </Grid.Col>
//         <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
//         <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
//         <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
//         <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
//         <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
//       </Grid>
//     </Container>
//   );
// }

import { Anchor, Container, Flex, Grid, Image, Paper, Text, Title } from '@mantine/core';

export function GridLine() {
  return (
    <Container >
      <Title ta="center" size={25}>
        Портфолио
      </Title>
      <Text mb={50} ta="center" size="md">
        цена автоматически обновляется каждую минуту
      </Text>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Flex p={0} m={0} direction="column" justify="center" align="center">
            <Paper
              style={{ borderRadius: '20px', boxShadow: '0 0 10px 0 rgba(211, 211, 211, 0.9)' }}
            >
              <Anchor href="https://todolist-zeta-mocha.vercel.app/" target="_blank">
                <Image
                  src="/images/portfolio/todolist.jpg"
                  style={{ borderRadius: '20px' }}
                  fallbackSrc="https://placehold.co/600x250?text=Todo-list.app"
                  alt="Todo-list.app"
                  height={300}
                  fit="fill"
                />
              </Anchor>
            </Paper>
            <Text c="dimmed">Todolist.app</Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Flex p={0} m={0} direction="column" justify="center" align="center">
            <Paper
              style={{ borderRadius: '20px', boxShadow: '0 0 10px 0 rgba(211, 211, 211, 0.9)' }}
            >
              <Anchor href="https://google-books-app.vercel.app/" target="_blank">
                <Image
                  src="/images/portfolio/books.jpg"
                  style={{ borderRadius: '20px' }}
                  fallbackSrc="https://placehold.co/600x250?text=Google-books-app.app"
                  alt="Google-books-app"
                  height={300}
                />
              </Anchor>
            </Paper>
            <Text c="dimmed">Google-books-app</Text>
          </Flex>
        </Grid.Col>
        {/* <Grid.Col span={{ base: 12, xs: 4 }}>
          <Flex p={0} m={0} direction="column" justify="center" align="center">
            <Paper
              style={{ borderRadius: '20px', boxShadow: '0 0 10px 0 rgba(211, 211, 211, 0.9)' }}
            >
              <Anchor href="https://todolist-zeta-mocha.vercel.app/" target="_blank">
                <Image
                  src="/images/portfolio/todolist.jpg"
                  style={{ borderRadius: '20px' }}
                  fallbackSrc="https://placehold.co/600x250?text=Todo-list.app"
                  alt="Todo-list.app"
                  height={300}
                  fit="fill"
                />
              </Anchor>
            </Paper>
            <Text c="dimmed">Todolist.app</Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Flex p={0} m={0} direction="column" justify="center" align="center">
            <Paper
              style={{ borderRadius: '20px', boxShadow: '0 0 10px 0 rgba(211, 211, 211, 0.9)' }}
            >
              <Anchor href="https://todolist-zeta-mocha.vercel.app/" target="_blank">
                <Image
                  src="/images/portfolio/todolist.jpg"
                  style={{ borderRadius: '20px' }}
                  fallbackSrc="https://placehold.co/600x250?text=Todo-list.app"
                  alt="Todo-list.app"
                  height={300}
                  fit="fill"
                />
              </Anchor>
            </Paper>
            <Text c="dimmed">Todolist.app</Text>
          </Flex>
        </Grid.Col> */}
      </Grid>
    </Container>
  );
}
