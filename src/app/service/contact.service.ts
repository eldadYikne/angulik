import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  private _isContactRequestReceived$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public isContactRequestReceived$: Observable<boolean> =
    this._isContactRequestReceived$.asObservable();

  public requestSuccessful() {
    this._isContactRequestReceived$.next(true);
  }
}
