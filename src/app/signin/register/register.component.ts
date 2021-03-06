import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
 
import { environment } from '../../../environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';

 
@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    loginForm: FormGroup;
    signupForm: FormGroup;
    isLoading = false;
   invalidId = false;
   isLoadingCountry = true;
   duplicateUser = false;
   invlidCaptcha = false;
   listofregions = [];
   listofcountries = [];
   listofroles = [];
   listofsubjects = [];
   validatingStatus; 

   
    constructor(private fb: FormBuilder, private http: HttpClient, private route: Router, 
        private message: NzMessageService
        ) {
    }

    ngOnInit(): void { 
        // this.getCountriesList();
        this.getRolesList(); 

        this.loginForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
        this.signupForm = this.fb.group({
            userId: [ null, [ Validators.required ] ],
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ],
            email: [ null, [Validators.email, Validators.required] ],
            phoneNumber:  [ null, [ Validators.required ] ],
            region:  [ null, [ Validators.required ] ],
            country:  [ null, [ Validators.required ] ],
            interestedSubjects :  [ null, [ Validators.required ] ],
            insteresedAs:  [ null, [ Validators.required ] ],
            captcha: [null, [Validators.required]],
            agree: [false, [Validators.required]]
        });
    }
    resolved(e) {
        if (e) {
           this.invlidCaptcha = false;
        } else {
            this.invlidCaptcha = true;
        }
    }
    submitSignup() {
        this.isLoading = true;
        for (const i in this.signupForm.controls) {
            this.signupForm.controls[ i ].markAsDirty();
            this.signupForm.controls[ i ].updateValueAndValidity();
        } 
        
        const userBean = {
            userId:  this.signupForm.value.userId,
            userName: this.signupForm.value.userName,
            email: this.signupForm.value.email,
            mobile: this.signupForm.value.phoneNumber,
            password: this.signupForm.value.password,
            status: true
        };
        // this.http.post(
        //     `${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/user`, userBean
        // ).subscribe(
        //     (resp: any) =>{
        //         this.isLoading = false;
        //         if(resp.status == 'Success'){
        //             this.message.success(resp.message);
        //             this.http.post(`http://localhost:8081/cmsusermgmt/userMgmt/userRoles/${this.signupForm.value.userId}`, 'Author').subscribe(
        //         (resp: any) =>{
        //              if (resp.status === 'Success') {
        //                 this.route.navigate(['/signin/login']);
        //             }
        //         },
        //         err => {
        //              console.log(err);
        //         }
        //     );
        //         }
        //         if(resp.status == 'Error'){
        //             this.message.error(resp.errorMessage);
        //         }
        //         this.signupForm.reset()
        //      },
        //     err => {
        //         this.isLoading = false;
        //         console.log(err);
        //     }
        // )
    }
    getRolesList(){
    //     this.http.get(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/role`).subscribe(
    //     (resp: any) =>{
    //         if (resp.status === 'Success') {
    //             this.listofroles = [];
    //             resp.roles.forEach(element => {
    //                 this.listofroles.push(element.roleName);
    //             });
    //         }
    //     },
    //     err => {
    //         console.log(err);
    //     }
    // )
    this.listofroles = ['Editor', 'Reviewer'];
    }
   

 

 
    validateUserId(e) {
       if (e.code === 'Space') {
        this.invalidId = true;
        e.preventDefault();
       } else {
           this.invalidId = false;
       }
    }

    duplicateCheck() {
        this.validatingStatus = 'validating';
        // this.http.get(`${apiUrl}${portUsermgmt}/cmsusermgmt/userMgmt/users`).subscribe(
        //     (resp: any) =>{
        //         if (resp.status === 'Success') {
        //             let usersList = [];
        //             resp.users.forEach(user => {
        //                 usersList.push(user.userId);
        //             });
        //             if (usersList.indexOf(this.signupForm.value.userId) === -1) {
        //                 this.validatingStatus = 'success';
        //                 this.duplicateUser = false;
        //             } else {
        //                 this.validatingStatus = 'warning';
        //                 this.duplicateUser = true;
        //             }
        //         }
        //     },
        //     err => {
        //         console.log(err);
        //     }
        // )
    }
}    