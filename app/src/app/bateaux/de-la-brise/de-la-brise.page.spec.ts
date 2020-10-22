import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeLaBrisePage } from './de-la-brise.page';

describe('DeLaBrisePage', () => {
  let component: DeLaBrisePage;
  let fixture: ComponentFixture<DeLaBrisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeLaBrisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeLaBrisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
