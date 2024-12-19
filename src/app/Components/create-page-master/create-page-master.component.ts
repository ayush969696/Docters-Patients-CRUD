import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageMaster } from '../../model/user.model';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-create-page-master',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],

  templateUrl: './create-page-master.component.html',
  styleUrl: './create-page-master.component.css'
})
export class CreatePageMasterComponent implements OnInit {
  pageMasterForm: FormGroup;
  pageMaster: any[] = [];

  pageMasterService = inject(DataService);

  dropdownIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.pageMasterForm = this.fb.group({
      pageName: ['', Validators.required],
      pageSlug: ['', Validators.required],
      createdBy: ['', Validators.required],
      createdByName: ['', Validators.required],
      isActive: [true]
    });
  }

  ngOnInit(): void {
    this.fetchAllPageMasters();
  }

  onSubmit(){
    if (this.pageMasterForm.valid) {
       const FormData = this.pageMasterForm.value;
       this.pageMasterService.createPageMaster(FormData).subscribe({
        next:(response) => {
          console.log(response);
          
          this.fetchAllPageMasters();
          this.onReset();
        },
        error: (error) => {
          console.log(error);
        } }
       )
      this.fetchAllPageMasters();
      this.onReset()
    }
  }

  fetchAllPageMasters(){
  this.pageMasterService.getAllMasterAPI().subscribe({
      next: (response) => {
        this.pageMaster = response.data;
      },
      error: (err) => {
        console.error('Error fetching Page Masters:', err);
      },
    });
  }

  onReset(){
    this.pageMasterForm.reset();
  }

  toggleDropdown(index: number): void {

  }
  
  onEdit(index: number): void {
    console.log('Edit clicked for row:', index);

    this.closeDropdown(index);
  }

  onDelete(index: number): void {
    console.log('Delete clicked for row:', index);

    this.closeDropdown(index);
  }

  closeDropdown(index: number): void {

  }
  
}
