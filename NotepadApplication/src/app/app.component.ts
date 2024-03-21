import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  profileForm = new FormGroup({
    notes: new FormControl('')
  })
  title = 'NotepadApplication';
  ngOninit() { }

  onSubmit() {
    console.log("Notes...", this.profileForm.value);
  }
}
