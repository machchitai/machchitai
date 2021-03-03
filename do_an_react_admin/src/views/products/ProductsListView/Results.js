import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, products, ...rest }) => {
  const classes = useStyles();
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedProductsIds;

    if (event.target.checked) {
      newSelectedProductsIds = products.map((product) => product.ma);
    } else {
      newSelectedProductsIds = [];
    }

    setSelectedProductsIds(newSelectedProductsIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedProductsIds.indexOf(id);
    let newSelectedProductsIds = [];

    if (selectedIndex === -1) {
      newSelectedProductsIds = newSelectedProductsIds.concat(selectedProductsIds, id);
    } else if (selectedIndex === 0) {
      newSelectedProductsIds = newSelectedProductsIds.concat(selectedProductsIds.slice(1));
    } else if (selectedIndex === selectedProductsIds.length - 1) {
      newSelectedProductsIds = newSelectedProductsIds.concat(selectedProductsIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedProductsIds = newSelectedProductsIds.concat(
        selectedProductsIds.slice(0, selectedIndex),
        selectedProductsIds.slice(selectedIndex + 1)
      );
    }

    setSelectedProductsIds(newSelectedProductsIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedProductsIds.length === products.length}
                    color="primary"
                    indeterminate={
                      selectedProductsIds.length > 0
                      && selectedProductsIds.length < products.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.slice(0, limit).map((product) => (
                <TableRow
                  hover
                  key={product.ma}
                  selected={selectedProductsIds.indexOf(product.ma) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedProductsIds.indexOf(product.ma) !== -1}
                      onChange={(event) => handleSelectOne(event, product.ma)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={product.avatarUrl}
                      >
                        {getInitials(product.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {product.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {product.email}
                  </TableCell>
                  <TableCell>
                    {`${product.address.city}, ${product.address.state}, ${product.address.country}`}
                  </TableCell>
                  <TableCell>
                    {product.phone}
                  </TableCell>
                  <TableCell>
                    {moment(product.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={products.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array.isRequired
};

export default Results;
