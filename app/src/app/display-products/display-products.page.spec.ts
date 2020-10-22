import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayProductsPage } from './display-products.page';

describe('DisplayProductsPage', () => {
  let component: DisplayProductsPage;
  let fixture: ComponentFixture<DisplayProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
