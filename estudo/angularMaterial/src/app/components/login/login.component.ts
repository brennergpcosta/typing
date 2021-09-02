import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onEntrar() {
    if(this.form.valid){
      this.router.navigate(['home'], { relativeTo: this.route })
    }
  }

}
