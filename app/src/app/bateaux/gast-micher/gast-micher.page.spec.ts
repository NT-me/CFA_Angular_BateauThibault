import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastMicherPage } from './gast-micher.page';

describe('GastMicherPage', () => {
  let component: GastMicherPage;
  let fixture: ComponentFixture<GastMicherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastMicherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastMicherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
