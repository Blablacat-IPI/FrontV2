import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsersFromService(){
    return this.http.get('http://localhost:8080/Users/all');
  }

  getUnvalidUsersFromService(){
    return this.http.get('http://localhost:8080/Users/allUnvalid');
  }
  
  addUsersFromService(user: any) {
    return this.http.post("http://localhost:8080/Users/addUser", user);
  }

  deleteUsersFromService(idUser: any) {
    return this.http.delete("http://localhost:8080/Users/deleteUser/" + idUser);
  }

  softDeleteUsersFromService(idUser: any) {
    return this.http.delete("http://localhost:8080/Users/softDeleteUser/" + idUser);
  }

  setValidateByAdminService(userId: any) {
    return this.http.post("http://localhost:8080/Users/validateByAdmin/" + userId, {});
    //{} -> post() veut plus de 1 argument, permet de outrepasser
    //ou utiliser un get ?
  }

  


}