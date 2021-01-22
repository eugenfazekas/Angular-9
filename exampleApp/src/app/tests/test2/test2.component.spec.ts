import { TestBed, ComponentFixture,async, fakeAsync, tick } from '@angular/core/testing';
import { Test2Component } from './test2.component';
import { Product } from 'src/app/model/product.model';
import { Model } from 'src/app/model/model.repository';
import { DebugElement, Injectable } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { RestDataSource } from 'src/app/model/rest.datasource';

@Injectable()
class MockDataSource {

    public data = [
      new Product(1,"test1","Soccer",100),
      new Product(2,"test2","Chess",100),
      new Product(3,"test3","Soccer",100),
    ];

    getData(): Observable<Product[]> {
      return new Observable<Product[]> ( obs => {
        setTimeout(() => obs.next(this.data),1000)
      })
    }
}

describe("Test2Component", () => {

  let fixture: ComponentFixture<Test2Component>;
  let component: Test2Component;
  let dataSource = new MockDataSource();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Test2Component],
      providers:[
        {provide: RestDataSource, useValue: dataSource}
      ]
    });
    TestBed.compileComponents().then(() => {
    fixture = TestBed.createComponent(Test2Component);
    component = fixture.componentInstance;
    });
  }));

it("performs async op", fakeAsync ( () => {
  dataSource.data.push(new Product(100, 'test100','Soccer',100));

  fixture.detectChanges();

  tick(1000);

  fixture.whenStable().then(() => {
    expect(component.getProducts().length).toBe(3);
  });
}));

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
