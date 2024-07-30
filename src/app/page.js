import { Box, Grid, Typography } from "@mui/material";
import MultiSelectList from "@/components/Forms/MultiSelectList";

const HomePage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      <Typography variant="h5" fontWeight={600}>
        Example Multi Select With Search
      </Typography>
      <Grid container display={"flex"} justifyContent={"center"} mb={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Multi Select List Example</Typography>
          <MultiSelectList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
