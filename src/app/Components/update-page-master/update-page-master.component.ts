import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-update-page-master',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-page-master.component.html',
  styleUrl: './update-page-master.component.css'
})
export class UpdatePageMasterComponent {
  editPageMasterForm: FormGroup;
  pageMasterService = inject(DataService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  pageMasterId: number | null = null;

  constructor(private fb: FormBuilder) {
    this.editPageMasterForm = this.fb.group({
      pageName: '',
      pageSlug: '',
      createdBy: '23',
      createdByName: '',
      isActive: true,
    });
  }

  ngOnInit(): void {
    this.pageMasterId = Number(this.route.snapshot.paramMap.get('id'));
    if(this.pageMasterId){
      this.fetchAllPageMastersAndSetData();
    }
  }

  fetchAllPageMastersAndSetData(): void {
    this.pageMasterService.getAllMasterAPI().subscribe({
      next: (response) => {
        const pageMasters = response.data || [];
        const currentPageMaster = pageMasters.find(
          (page: any) => page.pageMasterId === this.pageMasterId
        );
        
        if (currentPageMaster) {
          this.editPageMasterForm.patchValue({
            pageName: currentPageMaster.pageName || '',
            pageSlug: currentPageMaster.pageSlug || '',
            createdBy: String(currentPageMaster.createdBy) || '23',
            createdByName: currentPageMaster.createdByName || '',
            isActive: currentPageMaster.isActive ?? true,
          });
        } else {
          console.warn('Page Master not found for the provided ID.');
          alert('No data found for this ID.');
          this.router.navigate(['/page-master-api']);
        }
      },
      error: (err) => {
        console.error('Error fetching page master data:', err);
        alert('Failed to fetch page masters.');
      },
    });
  }

  onSubmit(): void {
    if (this.pageMasterId) {
      const updatedData = {
        ...this.editPageMasterForm.value,
        pageMasterId: this.pageMasterId,
        isActive: this.editPageMasterForm.value.isActive ?? true,
      }

      // updatedData.pageMasterId = this.pageMasterId;

      console.log(this.editPageMasterForm.value)


      this.pageMasterService.updatePageMaster(this.pageMasterId, updatedData).subscribe({
        
        next: (res) => {
          console.log(res)
          this.router.navigate(['/page-master-api']);
        },
        error: (err) => {
          console.error('Error updating page master:', err);
          alert('Failed to update the page.');
        },
      });
    }
  }

}