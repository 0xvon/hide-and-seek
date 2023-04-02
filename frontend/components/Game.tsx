import { Box, Button, Grid } from "@chakra-ui/react";
import { useAppProvider } from "../context/AppContext";

interface GameProps {
  onConnectWallet: () => void;
  onPlay: () => void;
}

export const Game: React.FC<GameProps> = ({ onConnectWallet, onPlay }) => {
  const [state] = useAppProvider();
  return (
    <Box>
      <Grid templateColumns="repeat(8, 1fr)" gap={1}>
        {/* 8x8 grid cells */}
        {Array.from({ length: 64 }, (_, i) => (
          <Box key={i} bg="gray.200" h="40px" w="40px" />
        ))}
      </Grid>
      <Button onClick={onConnectWallet} mt={4}>
        {state.address ?? "Connect Wallet"}
      </Button>
      <Button onClick={onPlay} mt={4} ml={4}>
        Play
      </Button>
    </Box>
  );
};
