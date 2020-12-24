import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
