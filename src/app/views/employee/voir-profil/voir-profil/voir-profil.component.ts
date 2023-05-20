import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiplomeService } from 'src/app/services/diplome.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-voir-profil',
  templateUrl: './voir-profil.component.html',
  styleUrls: ['./voir-profil.component.css']
})
export class VoirProfilComponent implements OnInit {
  listdiplome:any
  listcertif:any
  listtechno:any
  idemployer:any
  listexper:any

    constructor( private employeeService: EmployeesService, private diplomeService: DiplomeService, private router: Router){
      this.idemployer=localStorage.getItem("iduser");
console.log(this.idemployer)
    }

  ngOnInit(): void {
  this.employeeService.getEmployee(this.idemployer).subscribe(data=>{
    console.log(data)
    this.listdiplome=data.diplomes
    this.listcertif=data.certifications
    this.listexper=data.experiences
    this.listtechno=data.technologies
    console.log(this.listdiplome)
    console.log(this.listcertif)
    console.log(this.listexper)
    console.log(this.listtechno)

  })

  }

  deleteDiplome(id: number){

    this.diplomeService.deleteDiplome(id)
   .subscribe((res:any)=>{
     this.listdiplome()

   });
}



}
