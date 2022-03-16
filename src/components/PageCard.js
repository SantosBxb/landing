import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import Image from 'next/image';

export default function ActionAreaCard({title, content, icon}) {
  return (
    <Grid item xs={11} md={4} sx={{m: '0 auto'}}>
      <Card>
        <CardActionArea>
        <Box sx={{m: '0 auto'}}>
          <Image
            src={icon}
            alt={title}
          />
        </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}