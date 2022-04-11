import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

const LoadingScreen: React.FC = () => {
  return (
    <Box sx={{ mr: 2 }}>
      <Skeleton
        variant="text"
        width={210}
        height={36}
      />
      <Skeleton
        variant="text"
        width="80%"
        height={86}
      />
      <Skeleton
        variant="rectangular"
        height={600}
      />
    </Box>
  );
};

export default LoadingScreen;
