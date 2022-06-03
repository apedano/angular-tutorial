import { style } from "@angular/animations";
import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `<p>This is a WARNING<p>`,
    styles: [` p {
        background-color: red;
        color: white;
    }`]
})
export class WarningComponent {

}