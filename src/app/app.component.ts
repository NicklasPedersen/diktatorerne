import { Component, OnInit } from '@angular/core';
import { Dictator } from './dictator';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  formData: FormGroup;
  ngOnInit(): void {
    this.formData = new FormGroup({
      firstName: new FormControl("Adolf"),
      lastName: new FormControl("Hitler"),
      birthYear: new FormControl(1889),
      deathYear: new FormControl(1944),
      description: new FormControl(""),
    })
  }
  dictators: Dictator[] = [];
  addDictator() {
    this.dictators.push(new Dictator(
      this.formData.get('firstName').value.toString(),
      this.formData.get('lastName').value,
      this.formData.get('birthYear').value,
      this.formData.get('deathYear').value,
      this.formData.get('description').value,
    ));
    let name: string = this.formData.get('firstName').value;
    console.log(this.dictators);
  }
}