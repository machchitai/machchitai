import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));

const PaginationComp = () => {

    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };

    return (
        <div className={classes.root}>
            <Typography>Page: {page}</Typography>
            <Pagination/>
        </div>
    );
};

export default PaginationComp;