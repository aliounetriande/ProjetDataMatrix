import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreerQrPage } from './creer-qr.page';

describe('CreerQrPage', () => {
  let component: CreerQrPage;
  let fixture: ComponentFixture<CreerQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
