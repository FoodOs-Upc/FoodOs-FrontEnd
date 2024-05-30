import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../service/profile.service";
import {Profile} from "../../model/profile.entity";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  profile:Profile;
  imagePreview: string | ArrayBuffer = '';
  profileForm: FormGroup;

  private formData = new FormData();

  constructor(private profileService: ProfileService,private formBuilder:FormBuilder) {
    this.profile = {} as Profile;
    this.profileForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['', Validators.required],
      membership: ['', Validators.required],
    });
  }

  initializeForm(): void {
    this.profileForm.patchValue({
      firstname: this.profile.firstName,
      lastname: this.profile.lastName,
      rol: this.profile.rol,
      membership: this.profile.membership,
    });

  }



  private getProfile(id:number):void{
    this.profileService.getById(id).subscribe(response=>{
      this.profile = response;
      this.initializeForm();
      console.log(this.profile)
    })
  }

  onProfile():void{
    if(this.profileForm.invalid)return;
    let updateProfile:Profile = new Profile(
      this.profile.id,
      this.profileForm.controls['firstname'].value,
      this.profileForm.controls['lastname'].value,
      this.profile.photo,
      this.profileForm.controls['rol'].value,
      this.profileForm.controls['membership'].value,
    )
    this.profileService.update(this.profile.id,updateProfile).subscribe(response=>{

    })

  }

  ChapterFile(event:any){
    const  file = event.target.files[0];
    if(file){
      //Añadir a form data
      this.profile.photo = file;
      console.log("Captura Image")
      console.log(file)

      this.loadImagePreview(file);
    }
  }

  loadImagePreview(file:File):void{
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.result !== null){
        this.imagePreview = reader.result as string | ArrayBuffer;
      }
    };
    console.log("Image Preview:")
    console.log(this.imagePreview)
    reader.readAsDataURL(file)
  }

  ngOnInit(): void {
    this.getProfile(0);
  }


}
