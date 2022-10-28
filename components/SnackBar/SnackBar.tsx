import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface PropsType {
  duration?: number;
}

const CustomizedSnackbars = React.forwardRef((props: PropsType, ref: any) => {
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState('success');
  const [message, setMessage] = React.useState('');

  const handleClick = () => {
    setOpen(true);
  };
  React.useImperativeHandle(ref, () => ({
    open(msg: string, status: number) {
      if (status === 1) {
        setSeverity('success');
      } else if (status === -1) {
        setSeverity('error');
      } else {
        setSeverity('info');
      }
      setMessage(msg);
      handleClick();
    },
  }));

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={props.duration ? props.duration : 3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message ? message : 'This is a snackbar message!'}
      </Alert>
    </Snackbar>
  );
});
export default CustomizedSnackbars;
