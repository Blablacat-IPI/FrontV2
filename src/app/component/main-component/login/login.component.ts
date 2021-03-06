import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from 'src/app/services/users.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Cookie: any;
  constructor(private router: Router, private service: UsersService, private cookieService: CookieService, private cdr: ChangeDetectorRef ) { }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    console.log(loginForm.value);
    this.service.loginService(loginForm.value.email, loginForm.value.password).subscribe(data => {
      console.log(data);
      if (data == 1) {
        this.service.getUserCookieFromService(loginForm.value.email).subscribe(dataCookie => {
          console.log(dataCookie);
          this.Cookie=dataCookie;
          this.cookieService.set('CookieCatUsername', this.Cookie.username, 1)
          this.cookieService.set('CookieCatRole', this.Cookie.role, 1)
          this.cookieService.set('CookieCatId', this.Cookie.id, 1)
          this.router.navigate(["sidebar"])
          setTimeout(() => {
            location.reload()
          }, 100);

        })
      } else  if (data == 0){
        confirm("Identifiants incorrects");
      } else {
        confirm("Compte en attente de validation par l'administrateur");
      }

    })
  }

}
