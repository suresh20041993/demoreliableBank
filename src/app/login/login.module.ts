import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginserviceService} from './loginservice.service';
import { HttpModule } from '@angular/http';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        LoginRoutingModule,
        HttpModule,
        ToasterModule],
    
        declarations: [LoginComponent],
    
         providers: [LoginserviceService,ToasterService]
})
export class LoginModule {}
