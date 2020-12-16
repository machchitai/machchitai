import {green} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
      color: green[400],
      '$&checked':{
        color: green[600],
      },
    },
    checked: {},
})      
    
const GreenCheckBox = (props) => {
    const classes = useStyles();

    return (
    <Checkbox classes={{
        root: classes.root,
        checked: classes.checked
    }} color='default' {...props}/>
    );
};

export default GreenCheckBox;