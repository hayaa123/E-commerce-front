import * as React from "react";
import Header from "../components/header";
import Link from "next/link";
import { Container, Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export default function app(posts) {
  return (
    <>
      <Header />
      <Container>
        <Grid spaacing={2}>
          {posts.posts.map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href="">
                <Grid item xs={6} md={3}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={item.product_image[0].image}
                      alt={item.product_image[0].alt_text}
                      height="300px"
                    />
                    <CardContent>
                      <Typography gutterBottom component="p">
                        {item.title}
                      </Typography>
                      <Box component="p" fontSize={16} fontWeight={900}>
                        £{item.regular_price}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
