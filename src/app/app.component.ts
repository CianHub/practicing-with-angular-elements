import { AlertComponent } from "./alert/alert.component";
import { Component, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  message = null;
  title = "angular-elements";

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, { injector });
    customElements.define("alert-element", AlertElement);
    setTimeout(() => {
      this.message = domSanitizer.bypassSecurityTrustHtml(
        "<alert-element message='Rendered dynamically'></alert-element>"
      );
    }, 1000);
  }
}
