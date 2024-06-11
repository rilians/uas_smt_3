import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {
  public nama:any = "";
  public npm:any = "";
  public email:any = "";
  public password:any = "";

  constructor(
    public toastCtrl: ToastController,
  ) { }

  async addData() {
    const formData = new FormData();
    formData.append('nama', this.nama);
    formData.append('npm', this.npm);
    formData.append('email', this.email);
    formData.append('password', this.password);
    console.log(formData);

    try{
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api_egiii/uas_smt3/post_data_user.php', formData);
      console.log(res.data);

      if(res.data.error == false){
        const toast = await this.toastCtrl.create({
          message: 'Data berhasil ditambahkan',
          duration: 2000
        });
        toast.present();
      }else{
        const toast = await this.toastCtrl.create({
          message: 'Data gagal ditambahkan',
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
