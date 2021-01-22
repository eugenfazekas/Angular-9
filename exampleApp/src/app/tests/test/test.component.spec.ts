import { TestBed, ComponentFixture,async } from '@angular/core/testing';
import { TestComponent } from './test.component';
import { Product } from 'src/app/model/product.model';
import { Model } from 'src/app/model/model.repository';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe("TestComponent", () => {

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let debugElement: DebugElement;
  let divElement: HTMLDivElement;

  let mockRepository = {
    getProducts: function() {
      return [
        new Product(1,"test1","Soccer",100),
        new Product(2,"test2","Chess",100),
        new Product(3,"test3","Soccer",100),
      ]
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers:[
        {provide: Model, useValue: mockRepository}
      ]
    });
    TestBed.compileComponents().then(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    divElement = debugElement.children[0].nativeElement;
    });
  }));

it("implements output property", () => {
  let highlighted: boolean;
  component.change.subscribe(value => highlighted = value);
  debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
  expect(highlighted).toBeTruthy();
  debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
  expect(highlighted).toBeFalsy();
});

/*
  it("hadnles mouse events", () => {
    expect(component.highlighted).toBeFalsy();
    expect(divElement.classList.contains("bg-success")).toBeFalsy();
    debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
    fixture.detectChanges();
    expect(component.highlighted).toBeTruthy();
    expect(divElement.classList.contains("bg-success")).toBeTruthy();
    debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
    fixture.detectChanges();
    expect(component.highlighted).toBeFalsy();
    expect(divElement.classList.contains("bg-success")).toBeFalsy();
  });
  */
});
