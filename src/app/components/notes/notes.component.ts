import {Component, OnInit} from '@angular/core';
import {Note} from '../../note';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [HttpService]
})

export class NotesComponent implements OnInit {
  userId = 1;
  notes: Note[] = [];
  errorMessage: string;
  showDivMainContent = false;
  isSaved = false;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  addNote(note): void {
    if (note.trim() === '') {
      // Do nothing
    } else {
      this.notes.unshift({id: this.notes.length + 1, userId: this.userId, noteMessage: note});
    }
  }

  deleteNote(note): void {
    for (let i = 0; Object.values(this.notes).length; i++) {
      if (this.notes[i].noteMessage === note) {
        this.notes.splice(i, 1);
        break;
      }
    }
  }

  loadFromApi(username, password): void {
    // set notes useing returning from API data
    return this.httpService.load(username, password).subscribe({
      next: (data: Note[]) => {
        this.notes = data;
        // Plus some logic
        this.showDivMainContent = true;
        this.userId = this.notes[0].userId;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('My catched error ', error);
      }
    });
  }

  saveToApi(): void {
    return this.httpService.save(this.notes).subscribe({
      next: data => {
        this.isSaved = data;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('My catched error ', error);
      }
    });
  }
}
