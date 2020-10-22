import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BistrotDuSommelierPage } from './bistrot-du-sommelier.page';

describe('BistrotDuSommelierPage', () => {
  let component: BistrotDuSommelierPage;
  let fixture: ComponentFixture<BistrotDuSommelierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistrotDuSommelierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BistrotDuSommelierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
