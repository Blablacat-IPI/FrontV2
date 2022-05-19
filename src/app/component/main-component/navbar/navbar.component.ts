import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
  }

  afficherCroix() {
    this.courseService.afficheCroix = true;
    console.log(this.courseService.afficheCroix)
  }
  
}
