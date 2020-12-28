import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router"; 
@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule, 
        ],
    imports: [
        RouterModule,
        CommonModule, 
    ],
    declarations: [ 
        ],
    providers: [ 
    ]
})

export class SharedModule { }
