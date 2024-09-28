import { Component } from '@angular/core';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { CommonComponent } from "../common/common.component";

@Component({
    selector: 'contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [ContactFormComponent, CommonComponent]
})

export class ContactComponent {

}
