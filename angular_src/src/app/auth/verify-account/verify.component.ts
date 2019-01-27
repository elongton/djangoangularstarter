import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthHttpService } from '../auth-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  keyForm: FormGroup
  key: {}

  constructor(private httpService: AuthHttpService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.params['key']){ //if the key was included in the route (email option) try to verify
      console.log(this.route.snapshot.params['key'])
      this.key = {key:this.route.snapshot.params['key']};
      this.httpService.verify(this.key)
        .subscribe(response => console.log(response))
    }

    this.keyForm = new FormGroup({
      'key': new FormControl('', Validators.required),
    })
  }

  onSubmit(){
    let keyForm = this.keyForm;
    console.log(keyForm.value)
    this.httpService.verify(keyForm.value)
      .subscribe(response => console.log(response))
  }

}
