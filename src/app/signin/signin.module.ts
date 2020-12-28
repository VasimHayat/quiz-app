import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"; 
import { ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin.routing.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
 
@NgModule({
    imports: [
        CommonModule, 
        CoreModule,
        ReactiveFormsModule,
        SigninRoutingModule, 
        NzFormModule,
        NzInputModule,
        NzButtonModule
         // if you need forms support
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})

export class SigninModule {}