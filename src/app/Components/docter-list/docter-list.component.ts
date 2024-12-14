import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Doctor } from '../../model/apiResponse.model';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-docter-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './docter-list.component.html',
  styleUrl: './docter-list.component.css'
})
export class DocterListComponent implements OnInit {
  users: {name: string; email:string; mobile: string; clinicName: string}[] = [];
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

          this.users = response.data.map( (docs: Doctor) => ({
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


  onDelete(user: any) {
    console.log('Delete user:', user);

  }


  get filteredUsers() {
    if (!this.searchQuery.trim()) {
      return this.users;
    }
    return this.users.filter((user) =>
      Object.values(user).some((value) =>
        value.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    );
  }










}