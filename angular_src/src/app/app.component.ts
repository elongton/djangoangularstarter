import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/app.reducer'
// import * as UI from './store/ui/ui.actions'
import * as fromUi from './shared/store/ui/ui.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<fromRoot.AppState>){}
  title = 'sample';
  isLoading: Observable<fromUi.State>



  ngOnInit(){
    this.isLoading = this.store.select('ui')
  }
}
