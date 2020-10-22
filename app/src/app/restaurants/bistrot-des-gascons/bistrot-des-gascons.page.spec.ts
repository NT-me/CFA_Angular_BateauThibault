import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BistrotDesGasconsPage } from './bistrot-des-gascons.page';

describe('BistrotDesGasconsPage', () => {
  let component: BistrotDesGasconsPage;
  let fixture: ComponentFixture<BistrotDesGasconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistrotDesGasconsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BistrotDesGasconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
