import {
  ConnectionAttributes,
  ExecuteOptions,
  OUT_FORMAT_OBJECT,
} from 'oracledb';

export const connectionOptions: ConnectionAttributes = {
  connectString: '',
  user: '',
  password: '',
};

export const executeOptions: ExecuteOptions = {
  autoCommit: true,
  outFormat: OUT_FORMAT_OBJECT,
};
