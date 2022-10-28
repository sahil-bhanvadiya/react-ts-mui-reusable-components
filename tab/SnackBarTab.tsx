import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CustomSnackBar from '../components/SnackBar/SnackBar';
export default function SnackBarTab() {
  const snackBarRef = React.useRef<any>(null);

  const handleClick = (msg: string, status: number) => {
    snackBarRef.current.open(msg, status);
  };
  return (
    <div>
      <p>
        You just need to pass message and status code when calling open
        function.
        <br />
        <b>snackBarRef.current.open(msg, status)</b>
      </p>
      <p>Like, for success 1, info 0, error -1.</p>

      <CustomSnackBar ref={snackBarRef} duration={2000} />
      <Stack
        spacing={2}
        sx={{ maxWidth: '300px', marginLeft: 'Auto', marginRight: 'Auto' }}
      >
        <Button
          sx={{
            color: 'green',
            borderColor: 'green',
            '&:hover': {
              borderColor: 'green',
            },
          }}
          variant="outlined"
          onClick={() => handleClick('This is success message.', 1)}
        >
          Open success snackbar
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleClick('This is info message.', 0)}
        >
          Open info snackbar
        </Button>
        <Button
          sx={{
            color: 'red',
            borderColor: 'red',
            '&:hover': {
              borderColor: 'red',
            },
          }}
          variant="outlined"
          onClick={() => handleClick('This is error message.', -1)}
        >
          Open error snackbar
        </Button>
      </Stack>
    </div>
  );
}
