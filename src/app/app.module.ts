import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {TranslateModule} from '@ngx-translate/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// Highlight JS
import {HighlightModule} from 'ngx-highlightjs';
import {SplashScreenModule} from './_metronic/partials/layout/splash-screen/splash-screen.module';
// #fake-start#
import {HttpInterceptorService} from './core/http/interceptors/http-interceptor.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SubCategoryModule} from './modules/sub-category/sub-category.module';
import * as $ from 'jquery';
// #fake-end#


@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SplashScreenModule,
        TranslateModule.forRoot(),
        HttpClientModule,
        HighlightModule,
        ClipboardModule,
        MatSnackBarModule,
        // #fake-start#
        // environment.isMockEnabled
        //   ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
        //     passThruUnknownUrl: true,
        //     dataEncapsulation: false,
        //   })
        //   : [],
        // #fake-end#
        AppRoutingModule,
        InlineSVGModule.forRoot(),
        NgbModule,
        ReactiveFormsModule,
        SubCategoryModule,
    ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializer,
    //   multi: true,
    //   deps: [AuthService],
    // },
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
