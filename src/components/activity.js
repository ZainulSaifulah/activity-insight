import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

function Activity(props) {
  return (
    <Card sx={{ display: props.display }} variant='outlined'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.activity.key}
        </Typography>
        <Typography variant="h5" component="div">
          {props.activity.activity}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.activity.type}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent: "flex-end",
        alignItems: "flex-end"
      }}>
        <Button onClick={() => {
          props.saveActivity()
        }} variant="outlined" endIcon={<SaveIcon />}>
          Add
        </Button>
      </CardActions>
    </Card>
  );

}

export default Activity;