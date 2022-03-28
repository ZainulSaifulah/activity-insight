import { Box, Button, Typography } from '@mui/material';

export default function Search(props) {
  return (
    <Box
    sx={{ my: 4 }}
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Typography variant="h4" gutterBottom>
      New Activity For Your Free Time
    </Typography>
    <Button onClick={() => {
      props.searchActivity();
    }} variant="contained">Find Out</Button>
  </Box>
  );
}