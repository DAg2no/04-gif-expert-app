import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
export const GifItem = ({ title, url, id }) => {

  return (
    <Card sx={{maxHeight:400, maxWidth: 400}}>
      <CardMedia 
      sx={{height: 300, width: 300}}
      component='img'
      image={url}
       />
       <CardContent>
        <Typography variant="body2">{title}</Typography>
       </CardContent>
    </Card>
  )
}