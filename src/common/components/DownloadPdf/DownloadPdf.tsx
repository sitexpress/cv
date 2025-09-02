import React from 'react';
import { IconDownload } from '@tabler/icons-react';
import { Anchor, Button, Group } from '@mantine/core';
import { useInvertedTheme } from '@/common/hooks/invertedColorTheme';

export const DownloadPdf = () => {
  const pdfUrl = '/documents/Frontend-Dev-GedgafovSM.pdf'; // файл в public/documents/
  const { backgroundCustomColors } = useInvertedTheme();
  return (
    <Group justify="center" mt="xl">
      <Anchor href={pdfUrl} target="_blank" rel="noopener noreferrer" variant="default">
        <Button variant="default" color="blue" w={300}>
          Открыть резюме в новой вкладке
        </Button>
      </Anchor>
      <Button
        leftSection={<IconDownload size={16} />}
        onClick={() => {
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = 'Frontend-Dev-GedgafovSM.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        variant="filled"
        color="blue"
        w={300}
        style={{ ...backgroundCustomColors }}
      >
        Скачать резюме в PDF
      </Button>
    </Group>
  );
};

export const DownloadPdfLink = () => {
  const pdfUrl = '/documents/Frontend-Dev-GedgafovSM.pdf'; // файл в public/documents/

  return (
    <Anchor href={pdfUrl} target="_blank" rel="noopener noreferrer">
      HH.ru
    </Anchor>
  );
};

export const DownloadPdfHero = () => {
  const pdfUrl = '/documents/Frontend-Dev-GedgafovSM.pdf'; // файл в public/documents/
  const { backgroundCustomColors } = useInvertedTheme();

  return (
    <Group justify="left" mt="xl">
      <Anchor href={pdfUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="default" color="blue" w={300}>
          Открыть в новой вкладке
        </Button>
      </Anchor>
      <Button
        style={{ ...backgroundCustomColors }}
        leftSection={<IconDownload size={16} />}
        onClick={() => {
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = 'Frontend-Dev-GedgafovSM.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        variant="filled"
        color="blue"
        w={300}
      >
        Скачать резюме в PDF
      </Button>
    </Group>
  );
};
