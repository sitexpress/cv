import { Box, Loader } from "@mantine/core";

export const LoaderComponent = () => {
  return (
    <Box pos="relative"  w="90vw" h="90vh">
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
