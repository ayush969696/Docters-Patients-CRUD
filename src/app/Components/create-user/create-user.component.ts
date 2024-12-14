import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;

  userDataService = inject(DataService);

  isDropdownOpen: { [key: number]: boolean } = {};

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      alert("Data Submited!")

      this.onReset()
    }
  }

  onReset(){
    this.userForm.reset();
  }

  toggleDropdown(index: number): void {
    this.isDropdownOpen[index] = !this.isDropdownOpen[index];
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
    this.isDropdownOpen[index] = false;
  }
  
}

