import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Select Breed</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          <option value={1}>Affenpinscher</option>
          <option value={2}>Afghan Hound</option>
          <option value={3}>Airedale Terrier</option>
          <option value={4}>Akita</option>
          <option value={5}>Alaskan Klee Kai</option>
          <option value={6}>Alaskan Malamute</option>
          <option value={7}>Standard American Eskimo Dog</option>
          <option value={8}>Miniature American Eskimo Dog</option>
          <option value={9}>Toy American Eskimo Dog</option>
          <option value={10}>American Foxhound</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Select Colour</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          name="age"
          inputProps={{
            id: 'age-native-simple',
          }}
        >
          <option value="" />
          <option value={11}>Black</option>
          <option value={12}>White</option>
          <option value={13}>Brown</option>
          <option value={14}>Black Tan</option>
          <option value={15}>Orange</option>
          <option value={16}>Tri-Colour</option>
          <option value={17}>Golden Brown</option>
          <option value={18}>Other                  </option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          KCI registered?
        </InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          
        >
          <option value="" />
          <option value={19}>Yes</option>
          <option value={20}>No</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Sex</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          
        >
          <option value="" />
          <option value={21}>Male</option>
          <option value={22}>Female</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}