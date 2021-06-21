import React, { useCallback, useState } from 'react';
import {
  Container,
  Grid
} from '@material-ui/core';
import { IApiWindow } from '../types/IApiWindow';
import { Message } from './Message';
import { Footer } from './Footer';

/**
 * API which is served your services on window object
 */
declare const { dgsApi }: IApiWindow;

interface IAlertMessage {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error'
}

const MyApp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<IAlertMessage>();
  const [messageAlertIsOpen, setMessageAlertIsOpen] = useState(false);

  const handleOpenMessage = useCallback(({ message, type }: IAlertMessage) => {
    setAlertMessage({
      message: message,
      type: type
    });

    setMessageAlertIsOpen(true)

    setTimeout(() => {
      setMessageAlertIsOpen(false)
    }, 3000)

  }, [setAlertMessage, setMessageAlertIsOpen]);

  return (
    <Grid container
      // direction="column"
      // justify="center"
      // alignItems="center"
      spacing={5}
    >
      <Grid item>
        <Container>
          <h1>{dgsApi.sendHello()}</h1>
          {messageAlertIsOpen &&
            <Message
              isOpen={messageAlertIsOpen}
              type={alertMessage.type}
            >
              {alertMessage.message}
            </Message>
          }
        </Container>
      </Grid>
      <Grid item xs={12} >
        <Footer />
      </Grid>
    </Grid>
  );
}

export { MyApp }
