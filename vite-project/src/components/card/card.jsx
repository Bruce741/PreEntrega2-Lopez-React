import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const producto = ({producto}) => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.image}
          alt={producto.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default producto