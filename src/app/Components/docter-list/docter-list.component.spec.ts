import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocterListComponent } from './docter-list.component';

describe('DocterListComponent', () => {
  let component: DocterListComponent;
  let fixture: ComponentFixture<DocterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
