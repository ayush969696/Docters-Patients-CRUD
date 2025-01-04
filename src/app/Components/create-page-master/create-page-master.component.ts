import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { PageMaster } from '../../model/user.model';
import { DataService } from '../../Services/data.service';

@Component({
selector: 'app-create-page-master',
standalone: true,
imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule],

templateUrl: './create-page-master.component.html',
styleUrl: './create-page-master.component.css'
})
export class CreatePageMasterComponent implements OnInit {
  pageMasterForm: FormGroup;
  pageMaster: PageMaster[] = [];
  searchQuery: string = '';
  router = inject(Router)
  pageMasterService = inject(DataService);
  dropdownIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.pageMasterForm = this.fb.group({
      pageName: ['', Validators.required],
      pageSlug: ['', Validators.required],
      createdBy: ['159', Validators.required],
      createdByName: ['', Validators.required],
      isActive: [true],
    });
  }

  ngOnInit(): void {
    this.fetchAllPageMasters();
  }

  onSubmit() {
    console.log(this.pageMasterForm.value)
    if (this.pageMasterForm.valid) {
      const formData = this.pageMasterForm.value;

      this.pageMasterService.createPageMaster(formData).subscribe({
        next: () => {
          this.fetchAllPageMasters();
          this.onReset();
        },
        error: (err) => {
          console.error('Error creating page master:', err);
          alert('Failed to create the page.');
        },
      });
    }
  }

  fetchAllPageMasters() {
    this.pageMasterService.getAllMasterAPI().subscribe({
      next: (response) => {
        console.log(response.data);
        this.pageMaster = response.data;
      },
      error: (err) => {
        console.error('Error fetching Page Masters:', err);
      },
    });
  }

  onReset() {
    this.pageMasterForm.patchValue({
      pageName: '',
      pageSlug: '',
      createdBy: '159',
      createdByName: '',
      isActive: true,
    });
  }

  toggleDropdown(index: number) {
    this.dropdownIndex = this.dropdownIndex === index ? null : index;
  }

  onEdit(pageMaster: any): void {
    // console.log('Passing data for edit:', pageMaster);
    this.router.navigate(['/update-page-master/edit', pageMaster.pageMasterId]);
  }

  onDelete(pageMaster: any): void {
    if (confirm('Are you sure you want to delete this page master?')) {
      this.pageMasterService.deletePageMaster(pageMaster.pageMasterId).subscribe(() => {
        this.fetchAllPageMasters();
        this.dropdownIndex = null;
      });
    }
  }


  get filteredMasterPage() {
    return this.searchQuery
      ? this.pageMaster.filter((page) =>
          Object.values(page).some((value) =>
            String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        )
      : this.pageMaster;
  }
}