import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Injectable()
export class DatabaeService {
    
    read(name: string): any {
        return firebase.database().ref(name);
    }

    set<T>(name: string, data: T) {
        let db = firebase.database().ref(name).push();
        db.set(data);
    }

    update<T>(name: string, index: string, data: T) {
        let db = firebase.database().ref(name).child(index);
        db.update(data);
    }

    filter(name: string, Field: string, data: string): any {
        let db = firebase.database().ref(name);
        return db.orderByChild(Field).equalTo(data);
    }

    remove(name: string, index: string) {
        firebase.database().ref(name).child(index).remove();
    }
}