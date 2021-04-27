import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  public logInput(input: string) {
    console.log(input);
  }
}
