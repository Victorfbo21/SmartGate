

import { ReactElement } from 'react';
import { Typography, Grid } from '@mui/material';

export interface IPageHeader {
  title: string,
  msg: string,
  element: ReactElement
}

function PageHeader(props: IPageHeader) {

  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="subtitle2">
          {user.nome}, {props.msg}
        </Typography>
      </Grid>
      <Grid item>
        {props.element}
      </Grid>
    </Grid>
  );
}

export default PageHeader;
