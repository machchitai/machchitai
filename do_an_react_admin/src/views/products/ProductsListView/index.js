import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'axios';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ProductsListView = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(data);

  useEffect(() => {
    axios.get("http://localhost:4000/products/")
    .then((response) => {
      console.log(response);
      setProducts(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <Page
      className={classes.root}
      title="Products"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results products={products} />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductsListView;
