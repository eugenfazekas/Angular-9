import { Component } from '@angular/core';
import { DiscountService } from 'src/app/product/shared/discount-service';

@Component({
  selector: 'app-discount-editor',
  templateUrl: './discount-editor.component.html',
  styleUrls: ['./discount-editor.component.css']
})
export class DiscountEditorComponent  {

  constructor(public discounter: DiscountService) { }


}
