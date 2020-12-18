import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Note} from './note';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpService {
  jsonNotes: string;
  constructor(private http: HttpClient) {
  }

  load(username, password): any {
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);

    return this.http.get('http://localhost:8085/notes', {params});
  }

  save(notes: Note[]): any {
    // Parse notes to jsonNotes
    this.jsonNotes = JSON.stringify(notes);

    // Request
    let params = new HttpParams();
    params = params.append('jsonNotesArr', this.jsonNotes);
    return this.http.put('http://localhost:8085/notes', {}, {params});
  }
}
