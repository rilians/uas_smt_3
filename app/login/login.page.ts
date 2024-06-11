import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup;
  public npm:any = "";
  public password:any = "";


  constructor(
    public toastCtrl: ToastController, public router:Router, private formBuilder: FormBuilder
  ) { 
    this.myForm = this.formBuilder.group({
      npm: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Periksa apakah formulir valid
    if (this.myForm.valid) {
      // Lakukan tindakan yang diperlukan jika formulir valid
      console.log('Formulir valid. Data:', this.myForm.value);
    } else {
      // Tampilkan pesan kesalahan atau lakukan tindakan yang sesuai untuk formulir tidak valid
      console.log('Formulir tidak valid. Isi semua field.');
    }
  }

  async addData() {
    const formData = new FormData();
    formData.append('npm', this.npm);
    formData.append('password', this.password);
    
    console.log(formData);
    

    try{
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api_egiii/uas_smt3/login.php', formData);
      console.log(res.data);

      if(res.data.error == false){
        const toast = await this.toastCtrl.create({
          message: 'Login Berhasil',
          duration: 2000
        });
        this.router.navigate(['/tabs']);
        toast.present();
      }else{
        const toast = await this.toastCtrl.create({
          message: 'Login Gagal',
          duration: 2000
        });
        toast.present();
      }
      
    }catch(err){
      console.log(err);
    }
      
    }

  ngOnInit() {
  }

}
