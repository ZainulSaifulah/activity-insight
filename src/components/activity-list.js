import React from 'react';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default class ActivityList extends React.Component {
  render() {
    return (
      <>
        <Typography variant='h5' gutterBottom>
          Your Activity List
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {this.props.activities.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card variant='outlined'>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.key}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item.activity}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.type}
                  </Typography>
                </CardContent>
                <CardActions sx={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}>
                  <Button onClick={() => {
                    this.props.deleteActivity(item);
                  }} variant="outlined" endIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    )
  }
}