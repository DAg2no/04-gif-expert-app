import PropTypes from 'prop-types'
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import Grid from '@mui/material/Unstable_Grid2';


export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <Grid
        container
        spacing={2}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
            {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
      </Grid>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}