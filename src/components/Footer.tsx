import React, { useState, useEffect } from 'react';

import { IApiWindow } from '../types/IApiWindow';

declare let { dgsApi }: IApiWindow;

const containerStyle: React.CSSProperties = {
  marginTop: 50,
  borderTop: '1px solid #a1a1a1',
  color: '#7c7a7a',
  margin: 10,
  fontSize: 11,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,
};

const spanStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: 5,
};

const Footer: React.FC = () => {
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    dgsApi.getAppVersion().then((version) => setAppVersion(version));
  }, []);

  return (
    <div style={containerStyle}>
      <span style={spanStyle}>
        Desenvolvido por <strong>Danilo Souza</strong>
      </span>
      <span>Versão: {appVersion}</span>
    </div>
  );
};

export { Footer };
