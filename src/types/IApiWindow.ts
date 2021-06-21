interface IApiWindow extends Window {
  dgsApi: {
    getAppVersion: () => Promise<string>;
    sendHello: () => string;
  };
}

export { IApiWindow };
