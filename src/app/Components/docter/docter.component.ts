import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-docter',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './docter.component.html',
  styleUrl: './docter.component.css'
})
export class DocterComponent implements OnInit {
  doctorData : {name: string, email:string, mobile: string, clinicName: string, address: string}[] =[];
  searchQuery : string = '';
  dropdownIndex: number | null = null;

  doctorService = inject(DataService);

  ngOnInit(): void{
    this.fetchDoctorData();
  }

  fetchDoctorData(){
    this.doctorService.getSingleDocter().subscribe(
      (response) => {
        if(response.ok){
          this.doctorData = response.data.map( (doctor) => ({
            name: doctor.uName,
            email: doctor.uEmailId,
            mobile: doctor.uMobileNo,
            clinicName: doctor.clinicName,
            address: doctor.completeAddress
          }));
        } else {
          console.log('Error During fetching Doctor Data!', response.message);
          
        }
      },
      (error: string) => {
        console.log('API Error: ', error);
      }
    )
  }

  get filterDoctorData() {
    if(!this.searchQuery.trim()){
      return this.doctorData;
    }
    
    return this.doctorData.filter((doctor) => 
      Object.values(doctor).some((value) => 
         value.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    )
  }

  toggleDropdown(index: number) {
    this.dropdownIndex = this.dropdownIndex === index ? null : index;
  }

  onEdit(user: any) {
    console.log('Edit user:', user);
    // Implement edit logic here
  }

  onDelete(user: any) {
    console.log('Delete user:', user);
    // Implement delete logic here
  }
}