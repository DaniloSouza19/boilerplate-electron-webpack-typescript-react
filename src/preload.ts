import { contextBridge, ipcRenderer } from 'electron';
import { sendHello } from './api/modules/example/services/index';

console.log('hello from preload');

contextBridge.exposeInMainWorld('dgsApi', {
  getAppVersion: (args: any) => ipcRenderer.invoke('get-app-version', args),
  sendHello: () => sendHello(),
});
