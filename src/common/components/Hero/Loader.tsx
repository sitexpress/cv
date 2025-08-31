import { Box, Loader } from "@mantine/core";

export const LoaderComponent = () => {
  return (
    <Box pos="relative" h="100vh" w="100vw">
      <Loader
        size={50}
        pos="absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </Box>
  );
};
