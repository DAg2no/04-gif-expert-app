import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';


export const GifItem = ({ title, url }) => {
  return (
    <Grid>
      <Card sx={{ maxHeight: 400, maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 300, width: 300 }}
          component="img"
          image={url}
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" noWrap>{title}</Typography>
        </CardContent>
      </Card>
    </Grid>
    
  );
};
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired
}

