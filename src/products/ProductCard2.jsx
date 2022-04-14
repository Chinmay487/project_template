import React from "react";
import {Grid,Card,CardMedia,CardContent,Typography,CardActions,useTheme,Box} from "@mui/material";
import {Link} from "react-router-dom";
// import lizard from "../images/lizard.jpg";

const ProductCard2 = (props) => {
    const theme = useTheme();
  return (
    <>
      <Grid item lg={2} md={5} sm={5} xs={9}>
        <Card
          sx={{
            width: "100%",
            boxShadow: theme.shadows[4],
            "&:hover": {
              boxShadow: theme.shadows[20],
            },
            transition: "all 0.8s ease",
            borderRadius: "8px",
          }}
        >
          <CardMedia
            component="img"
            height="250"
            image={props.item.thumbnail}
            alt="green iguana"
          />
          <CardContent>
            <Link to={`/detail/${props.category}/${props.item.key}`} className="link">
              <Typography gutterBottom variant="h5" component="div">
                {props.item.title}
              </Typography>
            </Link>
            <Typography variant="h6" color="text.secondary">
              Price : {props.item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Box component="center">
              <Link to={`/detail/${props.category}/${props.item.key}`} className="link">
                <Typography variant="">View</Typography>
              </Link>
            </Box>
           
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard2;
