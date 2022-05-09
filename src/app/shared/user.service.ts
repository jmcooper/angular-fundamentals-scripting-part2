import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { IUser, IUserCredentials } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: BehaviorSubject<IUser | null>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>({
      firstName: 'Jim',
      lastName: 'Cooper',
      email: 'fake@fake.com',
    });
  }

  private storeAndReturnUser = (user: IUser): IUser => {
    this.user.next(user);
    return user;
  };

  getUser(): Observable<IUser | null> {
    return this.user;
  }

  signIn(credentials: IUserCredentials): Observable<IUser> {
    return this.http
      .post<IUser>('/api/sign-in', credentials)
      .pipe(map(this.storeAndReturnUser));
  }

  signOut() {
    this.user.next(null);
  }

  register(user: IUser): Observable<IUser> {
    return this.http
      .post<IUser>('/api/register', user)
      .pipe(map(this.storeAndReturnUser));
  }
}
