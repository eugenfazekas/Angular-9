import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import { Model } from 'src/app/model/model.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent {
  private differ: KeyValueDiffer<any, any>;
  count: number = 0;
  private category: string;

  constructor(private model: Model,
          private keyValueDiffers: KeyValueDiffers,
          private changeDetector: ChangeDetectorRef,
          activeRoute: ActivatedRoute) {

      activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => {
          if (params["category"] != null) {
              this.category = params["category"];
              this.updateCount();
          }
      }))
  }

  ngOnInit() {
      this.differ = this.keyValueDiffers
          .find(this.model.getProducts())
          .create();
  }

  ngDoCheck() {
      if (this.differ.diff(this.model.getProducts()) != null) {
          this.updateCount();
      }
  }

  private updateCount() {
      this.count = this.model.getProducts()
          .filter(p => this.category == null || p.category == this.category)
          .length;
  }

}
