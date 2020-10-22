import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomardPage } from './homard.page';

describe('HomardPage', () => {
  let component: HomardPage;
  let fixture: ComponentFixture<HomardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
