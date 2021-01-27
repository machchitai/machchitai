import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [userIdCurrent, setUserIdCurrent] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = (idUser) => {
    setOpen(true);
    setUserIdCurrent(idUser);
  };

  const handleDeleteUser = (idUser) => {
    console.log(idUser);
    handleClickOpen(idUser);
  };

  const handleDeleteRequest = () => {
    axios.delete(`http://localhost:4000/user/${userIdCurrent}`, {
      auth: {
        username: 'hungnguyen',
        password: '123456'
      }
    })
      .then((response) => {
        console.log(response);
        rest.handleSomethingChangeThenRefreshComponent();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
              Bạn có chắc chắn muốn xóa user này không?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Không
            </Button>
            <Button onClick={handleDeleteRequest} color="secondary" autoFocus>
              Xóa
            </Button>
          </DialogActions>
        </Dialog>

        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Username
                </TableCell>
                <TableCell>
                  Password
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer._id}
                  selected={selectedCustomerIds.indexOf(customer._id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer._id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer._id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {customer.name}
                  </TableCell>
                  <TableCell>
                    {customer.tai_khoan}
                  </TableCell>
                  <TableCell>
                    {customer.mat_khau}
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    <Link to={`/app/users/${customer._id}`}>
                      <Button variant="contained" color="primary">
                        <EditIcon />
                      </Button>
                    </Link>
                    <Button variant="contained" color="secondary" style={{ background: '#e23f0e' }} onClick={() => { handleDeleteUser(customer._id); }}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
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
  customers: PropTypes.array.isRequired
};

export default Results;
