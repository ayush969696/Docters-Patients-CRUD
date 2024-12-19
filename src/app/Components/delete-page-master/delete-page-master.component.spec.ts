import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePageMasterComponent } from './delete-page-master.component';

describe('DeletePageMasterComponent', () => {
  let component: DeletePageMasterComponent;
  let fixture: ComponentFixture<DeletePageMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePageMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePageMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
