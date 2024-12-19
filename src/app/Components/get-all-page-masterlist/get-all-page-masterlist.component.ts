import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-get-all-page-masterlist',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './get-all-page-masterlist.component.html',
  styleUrl: './get-all-page-masterlist.component.css'
})
export class GetAllPageMasterlistComponent {

  allMasterList: any[] = [];
  searchQuery: string = ''; 
  dropdownIndex: number | null = null;

  masterListService = inject(DataService); 

 ngOnInit(): void {
    this.fetchDoctersData();
  }

  fetchDoctersData(){
    this.masterListService.getAllMasterAPI().subscribe(
      (response) => {
        if(response.ok){

          console.log(response);

          this.allMasterList = response.data.map( (docs) => ({
            pagename: docs.pageName,
            pageMasterId: docs.pageMasterId,
            pageSlug: docs.pageSlug,
            createdByName: docs.createdByName,
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
      return this.allMasterList;
    }
  
    return this.allMasterList.filter((masterpage) =>
      Object.values(masterpage).some((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(this.searchQuery.toLowerCase());
        }
        return false;
      })
    );
  }
  

}
