import './App.css';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';
import activityApi from './api/activityApi';
import useMediaQuery from '@mui/material/useMediaQuery';
import ActivityList from './components/activity-list';
import Activity from './components/activity';
import Search from './components/search';

function App() {
  const [activity, setActivity] = useState({});
  const [activities, setActivities] = useState([])
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    const data = localStorage.getItem("savedActivities");
    const jsonData = data != null ? JSON.parse(data) : JSON.parse("[]");
    setActivities(jsonData);
  }, []) 


  const saveActivity = () => {
    const newActivity = [...activities, activity];
    localStorage.setItem("savedActivities", JSON.stringify(newActivity));
    setActivities(newActivity);
  }

  const searchActivity = () => {
    activityApi.getRandom().then(result => {
      setActivity(result);
      setDisplay('block');
    });
  }

  const deleteActivity = (activity) => {
    const newActivity = activities.filter((item) => item.key !== activity.key);
    localStorage.setItem("savedActivities", JSON.stringify(newActivity));
    setActivities(newActivity);
  }


  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container>
        <Search searchActivity={searchActivity} />
        <Activity display={display} activity={activity} saveActivity={saveActivity} />
        <ActivityList activities={activities} deleteActivity={deleteActivity} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
