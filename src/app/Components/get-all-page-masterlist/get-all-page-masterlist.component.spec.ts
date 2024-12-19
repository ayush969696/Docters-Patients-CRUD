import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPageMasterlistComponent } from './get-all-page-masterlist.component';

describe('GetAllPageMasterlistComponent', () => {
  let component: GetAllPageMasterlistComponent;
  let fixture: ComponentFixture<GetAllPageMasterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllPageMasterlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllPageMasterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
