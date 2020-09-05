import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointEditorComponent } from './waypoint-editor.component';

describe('WaypointEditorComponent', () => {
  let component: WaypointEditorComponent;
  let fixture: ComponentFixture<WaypointEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaypointEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
