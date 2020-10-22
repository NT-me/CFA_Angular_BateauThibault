import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BistrotLandaisPage } from './bistrot-landais.page';

describe('BistrotLandaisPage', () => {
  let component: BistrotLandaisPage;
  let fixture: ComponentFixture<BistrotLandaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistrotLandaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BistrotLandaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
