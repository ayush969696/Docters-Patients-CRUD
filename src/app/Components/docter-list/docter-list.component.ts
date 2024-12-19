import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { apiData } from '../../model/apiResponse.model';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-docter-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './docter-list.component.html',
  styleUrl: './docter-list.component.css'
})
export class DocterListComponent implements OnInit {
  doctorList: {name: string; email:string; mobile: string; clinicName: string}[] = [];
  searchQuery: string = ''; 
  dropdownIndex: number | null = null;

  doctorService = inject(DataService); 

 ngOnInit(): void {
    this.fetchDoctersData();
  }

  fetchDoctersData(){
    this.doctorService.getAllDoctors().subscribe(
      (response) => {
        if(response.ok){

          console.log(response);

          this.doctorList = response.data.map( (docs) => ({
            name: docs.uName,
            email: docs.uEmailId,
            mobile: docs.uMobileNo,
            clinicName: docs.clinicName,
          }));
        } else {
          console.log('Error During Fetching Docter Data!', response.message);
          
        }
      }, 
      (error: string) => {
        console.log('API Error: ', error);
      }
    )
  }
  

  toggleDropdown(index: number) {
    this.dropdownIndex = this.dropdownIndex === index ? null : index;
  }


  onEdit(user: any) {
    console.log('Edit user:', user);

  }


  onDelete(index: any) {
    console.log('Delete user:', index);

  }


  get filteredUsers() {
    if (!this.searchQuery.trim()) {
      return this.doctorList;
    }
    // Filter the list of doctors based on the search query.
    return this.doctorList.filter((user) =>
      // Checking if any of the user's properties contain the search query.
      Object.values(user).some((value) =>
        value.toLowerCase().includes(this.searchQuery.toLowerCase())  // making the search case-insensitive.
      )
    );
  }








}