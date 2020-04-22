import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { HttpServiceService  } from './Services/http-service.service';
import { TokenService  } from './Services/token.service';
import { AuthService  } from './Services/auth.service';
import { AppComponent } from './app.component';
import { AppRoutingModule,routingcomponent } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  routingcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [HttpServiceService,TokenService,AuthService,{ provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService],
  bootstrap: [AppComponent],

})
export class AppModule { }
