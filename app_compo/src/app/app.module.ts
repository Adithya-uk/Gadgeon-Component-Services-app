import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftcompoComponent } from './leftcompo/leftcompo.component';
import { MidcompoComponent } from './midcompo/midcompo.component';
import { RightcompoComponent } from './rightcompo/rightcompo.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { CustpipesPipe } from './custpipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftcompoComponent,
    MidcompoComponent,
    RightcompoComponent,
    DemoPipeComponent,
    CustpipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
