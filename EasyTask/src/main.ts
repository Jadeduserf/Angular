
//If we are using standalone components, we can bootstrap the application directly with the AppComponent, without the need of an AppModule. However, if we are using a non-standalone component, we need to bootstrap the application with the AppModule, which declares the AppComponent and its dependencies. In this case, since we are using a non-standalone component, we need to bootstrap the application with the AppModule.
//import { bootstrapApplication } from '@angular/platform-browser';
//import { AppComponent } from './app/app.component';

//bootstrapApplication(AppComponent).catch((err) => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);