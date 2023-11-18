// print.service.ts
import { Injectable, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { PrintComponent } from './pages/print/print.component';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  constructor(private appRef: ApplicationRef, private injector: Injector) {}

  print(component: any): void {
    // Create a component reference
    const componentRef: ComponentRef<any> = this.appRef.bootstrap(component, document.body);

    // Access the component instance and set input properties if needed
    // componentRef.instance.propertyName = propertyValue;

    // Print the content
    window.print();

    // Detach the component
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
