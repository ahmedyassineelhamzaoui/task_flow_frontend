import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {

  constructor() { }
  
  set(key: string, data: unknown): void{
     try{
        localStorage.setItem(key,JSON.stringify(data));
     }catch(e){
        console.log('Error saving to localStorage',e);
     }
  }
  get(key: string): unknown{
      try{
        const localStorageItem = localStorage.getItem(key);
        return localStorageItem ? JSON.parse(localStorageItem) : null;
      }catch(e){
        console.log('Error getting data from localStorage',e);
        return null;
      }
  }
}
