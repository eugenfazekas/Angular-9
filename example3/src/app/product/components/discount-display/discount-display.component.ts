import { Component } from '@angular/core';
import { DiscountService } from 'src/app/product/shared/discount-service';

@Component({
  selector: 'app-discount-display',
  templateUrl: './discount-display.component.html',
  styleUrls: ['./discount-display.component.css']
})
export class DiscountDisplayComponent  {

  constructor(public discounter: DiscountService) { }

}
