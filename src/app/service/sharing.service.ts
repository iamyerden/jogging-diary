import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private data = new BehaviorSubject('');
  data$ = this.data.asObservable();

  // tslint:disable-next-line:typedef
  changeData(data: any) {
    this.data.next(data);
    console.log('data:', data);
  }
}
