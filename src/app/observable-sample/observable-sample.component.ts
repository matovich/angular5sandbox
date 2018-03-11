import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

// this is a different kind of import that I have not used before.
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-observable-sample',
  templateUrl: './observable-sample.component.html',
  styleUrls: ['./observable-sample.component.css']
})
export class ObservableSampleComponent {
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
    .filter(text => text.length >= 3)
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(value => {console.log(value);});
   }

}
