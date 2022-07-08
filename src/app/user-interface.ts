// export class UserInterface {
//      ID Long;
//       F_name String;
//       s_name String;
//       L_name String;
//       role String;
//       status String;
//       Email String;
//       password String;
// }
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.module";
@Injectable({
      providedIn:'root'
})
export class UserInterface{
      uri="http://localhost:8848/User"
      
      constructor(private http: HttpClient){}

      getUser (){
            return this.http.get(`${this.uri}/user`);
      }

      getUserById(id: number){
            return this.http.get(`${this.uri}/user/${id}`);
      }
      addUser(body:User){
            
            return this.http.post(`${this.uri}/user/add`,body);
      }

      updateUser(id: any,fname: any, sname: any,lname: any,role: any,status: any,email: any,password: any){
            const user={
                  id:id,
                  fname: fname,
                  sname:sname,
                  lname:lname,
                  role:role,
                  status:status,
                  email:email,
                  password:password
            };
            return this.http.post(`${this.uri}/user/update${id}`,user);
      }
      deleteUser(id: any){
            return this.http.get(`${this.uri}/user/delete/${id}`);
      }
      
}


