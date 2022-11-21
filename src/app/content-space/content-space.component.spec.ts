import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSpaceComponent } from './content-space.component';

describe('ContentSpaceComponent', () => {
  let component: ContentSpaceComponent;
  let fixture: ComponentFixture<ContentSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
