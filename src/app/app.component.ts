import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  featureLoaded = "recipe";

  onNavigate(feature : string){
    this.featureLoaded = feature;
  }


}
