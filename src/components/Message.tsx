import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface IMessageProps {
  children: React.ReactNode;
  type: 'success' | 'info' | 'warning' | 'error';
  isOpen: boolean;
}

const Message: React.FC<IMessageProps> = ({
  type,
  children,
  isOpen,
}: IMessageProps) => {
  const classes = useStyles();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {children}
        </Alert>
      </Snackbar>
    </div>
  );
};

export { Message };
