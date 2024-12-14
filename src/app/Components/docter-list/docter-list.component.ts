import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-docter-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './docter-list.component.html',
  styleUrl: './docter-list.component.css'
})
export class DocterListComponent {
  users = [
    { name: 'John Doe', email: 'ayush2gmaixl.com', mobile: '1234567890', designation: 'Manager' },
    { name: 'Jane Smith', email: 'jane@example.com', mobile: '9876543210', designation: 'Developer' },
  ];

  dropdownIndex: number | null = null;

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