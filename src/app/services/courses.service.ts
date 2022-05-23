import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  static afficheCroix:boolean = true;

  constructor(private http:HttpClient) { }

  //Récupère tous les trajets de manière général
  getCoursesFromService(){
    return this.http.get('http://localhost:8080/Course/allValid');
  }

  //Récupère les 5 derniers trajets pour la page homepage
  getLastFiveCoursesService(){
    return this.http.get('http://localhost:8080/Course/lastFive');
  }

  //Permet la création d'un trajet
  addCoursesFromService(course: any) {
    return this.http.post("http://localhost:8080/Course/add", course);
  }

  //Permet à un utilisateur de s'inscrire à un trajet
  addReservationFromService(reservation: any){
    return this.http.post('http://localhost:8080/Reservation/add', reservation);
  }

  //Permer d'obtenir les courses que le conducteur créer
  getMyCoursesFromService() {
    return this.http.get('http://localhost:8080/Reservation/all');
  }
  
  // ********************************* Filtre ************************************ 

  //Filtre par ville
  searchByCityService(city: any) {
    let keyCity = city.value.keyCity;
    return this.http.get('http://localhost:8080/Course/searchcity/' + keyCity)
  }

  // ********************************* MyReservations ************************************  
  getPageOfMyReservationsFromService(page: any) {
    return this.http.get('http://localhost:8080/Reservation/Page?page='+page)
  }

  getPageMaxReservations() {
    return this.http.get('http://localhost:8080/Reservation/pagemax')
  }

  // ********************************* MyCourses **************************************
  getPageOfMyCoursesFromService(page: any) {
    return this.http.get('http://localhost:8080/Course/pageMyCourses?page='+page)
  }

  getPageMaxMyCourses() {
    return this.http.get('http://localhost:8080/Course/pageMaxMyCourses')
  }

  // ******************************** AllCourses ****************************************
  getPageMaxOfCourses() {
    return this.http.get('http://localhost:8080/Course/pageMaxAllCourses')
  }

  getPageOfCoursesFromService(page: any) {
    return this.http.get('http://localhost:8080/Course/pageAllCourses?page='+page)
  }

}
