import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LesFousDeLilePage } from './les-fous-de-lile.page';

describe('LesFousDeLilePage', () => {
  let component: LesFousDeLilePage;
  let fixture: ComponentFixture<LesFousDeLilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesFousDeLilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LesFousDeLilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
