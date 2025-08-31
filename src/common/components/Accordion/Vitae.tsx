import { IconCircleCheck, IconClipboardDataFilled } from '@tabler/icons-react';
import {
  Accordion,
  Anchor,
  Avatar,
  Container,
  Flex,
  Group,
  List,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

const charactersList = [
  {
    id: 'freelance-1',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    link: '',
    label: 'Фриланс',
    period: 'Январь 2025 - Июнь 2025 | 6 месяцев',
    position: 'Frontend-разработчик',
    description: '',
    content:
      'Разработка клиентской части банковского приложения международной микро-кредитной организации',
    list: ['React', 'React context', 'Scss', 'Firebase', 'Tailwind'],
  },
  {
    id: 'freelance-2',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    link: '',
    label: 'Фриланс',
    period: 'Декабрь 2022 - Октябрь 2024 | 1 год 11 месяцев',
    position: 'Frontend-разработчик',
    description: '',
    content:
      'Проектная занятость. Разработка функционала клиентской части внутренней платформы канадской компании по управлению персоналом',
    list: ['Vite', 'RTK', 'Scss', 'Tailwind', 'Firebase'],
  },
  {
    id: 'it-fox',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    link: '',
    label: 'It-Fox',
    period: 'Август 2021 - Август 2022 | 1 год 1 месяц',
    position: 'Frontend-разработчик',
    description: '',
    content: 'Верстка сайтов',
    list: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Wordpress', 'Gulp', 'React', 'Redux'],
  },
  {
    id: 'quest',
    image: 'https://img.icons8.com/clouds/256/000000/stormtrooper.png',
    link: 'https://xn--80aalkriosw9j.xn--p1ai/',
    label: 'Умозарядка',
    period: 'Апрель 2015 - Апрель 2020 | 5 лет 1 месяц',
    position: 'Основатель',
    description: '',
    content:
      'Контроль всех аспектов малого бизнеса, управление, привлечение клиентов, строительство, создания мультиплатформенного веб-сайта, управления SEO и оптимизация, организация мероприятий',
    list: ['Управление', 'Менеджмент', 'Создание бизнесса с нуля'],
  },
  {
    id: 'acceleration',
    image: 'https://img.icons8.com/clouds/256/000000/jake.png',
    link: 'https://www.acceleration.ru',
    label: 'Acceleration',
    period: 'Октябрь 2013 - Апрель 2014 | 7 месяцев',
    position: 'PROJECT MANAGER AT OLYMPICS SOCHI 2014',
    description: '',
    content:
      'Контроль всех аспектов малого бизнеса, управление, привлечение клиентов, строительство, создания мультиплатформенного веб-сайта, управления SEO и оптимизация, организация мероприятий',
    list: [
      'Менеджмент',
      'Управление',
      'Контроль за соблюдением графиков',
      'Взаимодействие с Олимпийским Комитетом',
    ],
  },
  {
    id: 'volgomost',
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    link: '',
    label: 'Волгомост, ОАО',
    period: 'Ноябрь 2012 - Октябрь 2013 | 1 год',
    position: 'Ведущий инженер',
    description: '',
    content:
      'Контроль доставки всех конструкций на объекты. Контроль чертежей. Контроль производственных работ. Курировал строительство моста через реку Сочи. Курировал строительство нескольких мостов на трассе М4-Дон Сочи-Краснодар.',
    list: [
      'Получение и выдача проектной документации',
      'Разработка графиков',
      'Подписание КС-2, КС-3',
    ],
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  period: string;
  description: string;
}

function VitaeAccordion({
  label,
  image,
  description,
  period,
  position,
  link,
}: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Flex gap={5}>
          <Text>{label}</Text>
          <Anchor href={`${link}`} target="_blank">
            {link === 'https://xn--80aalkriosw9j.xn--p1ai/'
              ? 'умозарядка.рф'
              : link === 'https://www.acceleration.ru'
                ? 'acceleration.ru'
                : link}
          </Anchor>
        </Flex>
        <Text size="sm" c="dimmed" fw={400} tt="uppercase">
          {position}
        </Text>
        <Text size="sm" c="dimmed" fw={400}>
          {period}
        </Text>
      </div>
    </Group>
  );
}

export function Vitae() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control aria-label={item.label}>
        <VitaeAccordion {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm" ta="left" mb={10} c="dimmed" td="underline">
          Должностные обязанности:
        </Text>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconClipboardDataFilled size={16} />
            </ThemeIcon>
          }
          ta="left"
        >
          <List.Item>{item.content}</List.Item>
        </List>

        <Text size="sm" ta="left" pt={15} mb={10} c="dimmed" td="underline">
          Технологии на проекте:
        </Text>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size={16} />
            </ThemeIcon>
          }
          ta="left"
        >
          {item.list.map((listItem: string) => (
            <List.Item>{listItem}</List.Item>
          ))}
        </List>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container size="xl" p="xs" ta="center" pt={100} mb={100}>
      <Title ta="center" size={25}>
        Опыт
      </Title>

      <Text mb={30} ta="center" size="md">
        Моя анкета на
        <Text component="a" href="#" c="blue.6">
          {' '}
          HH.ru
        </Text>
      </Text>
      <Accordion chevronPosition="right" variant="contained" radius="md">
        {items}
      </Accordion>
    </Container>
  );
}
