import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Villa9TroisPage } from './villa9-trois.page';

describe('Villa9TroisPage', () => {
  let component: Villa9TroisPage;
  let fixture: ComponentFixture<Villa9TroisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Villa9TroisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Villa9TroisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
