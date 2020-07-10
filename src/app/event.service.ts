import { HttpClient } from '@angular/common/http';
import { Event } from "./event.model";
import { environment } from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {


    constructor(public http: HttpClient) {
    }

    getEvents(owner: String, repo: String, eventType: String) {
        if (eventType)
            return this.http.get<Event[]>(environment.backendUrl + '?owner='+ owner +'&repo=' + repo + '&eventType=' +eventType);
        else 
            return this.http.get<Event[]>(environment.backendUrl + '?owner='+ owner +'&repo=' + repo);
    }

}