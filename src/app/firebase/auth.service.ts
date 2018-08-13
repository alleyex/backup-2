import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AuthService {

    createUserWithEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signInWithEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    signOut(): Promise<void> {
        return firebase.auth().signOut();
    }

    userState(): Observable<firebase.User> {
        const state = Observable.create((observer: Observer<firebase.User>) => {
            firebase.auth().onAuthStateChanged(
                (user?: firebase.User) => observer.next(user)
            );
        });
        return state;
    }



}