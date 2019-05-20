import { Component } from '@angular/core';
import { ToolboxComponent } from "../toolbox-decorator";

@ToolboxComponent({
  desc: " Energy Line Chart",
  icon: "fa fa-chart-bar",
  componentName: "ChartContainerComponent"
})
@Component({
  selector: 'pack-energy-linechart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.css']
})
export class ChartContainerComponent {

 flipped = false;

  flipIt() {
    this.flipped = !this.flipped;
   
   
  }

 
}