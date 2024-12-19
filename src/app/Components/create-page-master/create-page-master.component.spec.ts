import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePageMasterComponent } from './create-page-master.component';

describe('CreatePageMasterComponent', () => {
  let component: CreatePageMasterComponent;
  let fixture: ComponentFixture<CreatePageMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePageMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePageMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
