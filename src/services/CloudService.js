import { initializeApp } from 'firebase/app';
export class CloudService {
  constructor() {
    this._config = {
      apiKey: process.env.API_KEY,
      authDomain: 'it-shop-83974.firebaseapp.com',
      projectId: 'it-shop-83974',
      storageBucket: 'it-shop-83974.appspot.com',
      messagingSenderId: '608649274193',
      appId: '1:608649274193:web:9ad23034fde3682fc72970',
    };
    this.app = initializeApp(this._config);
  }
}

export const cloudService = new CloudService();
