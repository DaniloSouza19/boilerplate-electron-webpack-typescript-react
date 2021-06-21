import {
  ConnectionAttributes,
  ExecuteOptions,
  OUT_FORMAT_OBJECT,
} from 'oracledb';

export const connectionOptions: ConnectionAttributes = {
  connectString: process.env.CONNECT_STRING_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
};

export const executeOptions: ExecuteOptions = {
  autoCommit: true,
  outFormat: OUT_FORMAT_OBJECT,
};
