import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@modules/main/main.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from '@pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from '@modules/main/header/user/user.component';
import {LanguageComponent} from '@modules/main/header/language/language.component';
import {MainMenuComponent} from './pages/main-menu/main-menu.component';
import {SubMenuComponent} from './pages/main-menu/sub-menu/sub-menu.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import { FormsModule } from '@angular/forms';
import {ProfabricComponentsModule} from '@profabric/angular-components';
import { WelcomeComponent } from './welcome/welcome.component';

import { PrintComponent } from '@pages/print/print.component';
import { NgxPrintModule } from 'ngx-print';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';



registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        ProfileComponent,
        DashboardComponent,
        UserComponent,
        LanguageComponent,
        MainMenuComponent,
        SubMenuComponent,
        WelcomeComponent,
       
        PrintComponent,
        DisplayDetailsComponent,
        UserLoginComponent,
        CommentDialogComponent,
     
    
    ],
    imports: [
        ProfabricComponentsModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        StoreModule.forRoot({auth: authReducer, ui: uiReducer}),
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxPrintModule,
       
        ToastrModule.forRoot(),
        
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
