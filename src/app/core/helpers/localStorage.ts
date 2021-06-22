import {environment} from '../../../environments/environment';

export class CustomLocalStorage{
  static setAuthLocalStorage(token: string): void{
    localStorage.setItem(CustomLocalStorage.getAuthKey(), token);
  }

  static getAuthKey(): string {
    return `${environment.appVersion}-${environment.USERDATA_KEY}`;
  }

  static clearLocalStorage(): void{
    localStorage.clear();
  }

  static getAuthToken(): string {
    return  localStorage.getItem(CustomLocalStorage.getAuthKey()) || '';
  }

  static checkToken(): boolean{
    return !!localStorage.getItem(CustomLocalStorage.getAuthKey());
  }
}
