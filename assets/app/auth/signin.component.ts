import { Component, OnInit } from "../../../node_modules/@angular/core";
import { FormGroup, FormControl, Validators } from "../../../node_modules/@angular/forms";

@Component({
    selector:"app-signin",
    templateUrl:"./signin.component.html"
})

export class SigninComponent implements OnInit{

    myForm: FormGroup;
    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm =new FormGroup({
            'email':new FormControl(null,Validators.required),
            'password':new FormControl(null,Validators.required),

        });

    }

}