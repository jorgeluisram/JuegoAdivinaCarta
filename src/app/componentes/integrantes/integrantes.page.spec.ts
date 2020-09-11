import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntegrantesPage } from './integrantes.page';

describe('IntegrantesPage', () => {
  let component: IntegrantesPage;
  let fixture: ComponentFixture<IntegrantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntegrantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
