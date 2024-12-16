import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {
  patientsList: {name: string; role:string; mobile: string; gender: string}[] = [];
  searchQuery: string = '';
  dropdownIndex: number | null = null;

  patientService = inject(DataService)

  ngOnInit(){
    this.fetchPatientsData();
  }

  fetchPatientsData(){
    this.patientService.getAllPatients().subscribe(
      (response)=>{
        if(response.ok){
          console.log(response);

          this.patientsList = response.data.map( (patient) => ({
            name: patient.uName,
            role: patient.roleName,
            mobile: patient.uMobileNo,
            gender: patient.genderValue
          }))
          
      } else {
        console.log('Error During Fetching Patient Data!', response.message);
      }
    },
    (error: string) => {
      console.log("API Error: ", error);
      
    } 
    )
  }

  
  get filteredPatientsList() {
      if(!this.searchQuery.trim()){
        return this.patientsList;
      }

      return this.patientsList.filter( (patient) =>
        Object.values(patient).some( (value) => 
          value.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      )
  }

  toggleDropdown(index: number) {
    this.dropdownIndex = this.dropdownIndex === index ? null : index;
  }

  onEdit(user: any) {
    console.log('Edit user:', user);

  }

  onDelete(user: any) {
    console.log('Delete user:', user);

  }
}