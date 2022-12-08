import { Typography, Avatar, Grid } from '@mui/material';
import { useQuery } from 'src/gqless';


function PageHeader() {
  const query = useQuery();

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Olá, {user.nome}!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
