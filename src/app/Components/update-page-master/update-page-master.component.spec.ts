import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePageMasterComponent } from './update-page-master.component';

describe('UpdatePageMasterComponent', () => {
  let component: UpdatePageMasterComponent;
  let fixture: ComponentFixture<UpdatePageMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePageMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePageMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
