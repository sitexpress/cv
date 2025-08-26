import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <div>
      <div className="animate__animated animate__fadeInRight animate__delay-0.5s">
        <Title className={classes.title} ta="center" mt={100}>
          Привет я{' '}
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            Султан
          </Text>
        </Title>
      </div>

      <Text
        c="dimmed"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
        className="animate__animated animate__fadeInUp "
      >
        Возможно, мы найдём общие точки, в которых сможем быть полезны друг другу...
      </Text>
    </div>
  );
}
