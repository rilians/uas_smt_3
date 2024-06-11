import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public nama:any = "";
  public jenis_kelamin:any = "";
  public nomor:any = "";
  public email:any = "";
  public asal_sekolah:any = "";
  public prodi:any = "";
  public jenjang:any = "";
  public kelas:any = "";
  public sumber_informasi:any = "";

  constructor(
    public toastCtrl: ToastController,
  ) {}

  

  async addData() {
    const formData = new FormData();
    formData.append('nama', this.nama);
    formData.append('jenis_kelamin', this.jenis_kelamin);
    formData.append('nomor', this.nomor);
    formData.append('email', this.email);
    formData.append('asal_sekolah', this.asal_sekolah);
    formData.append('prodi', this.prodi);
    formData.append('jenjang', this.jenjang);
    formData.append('kelas', this.kelas);
    formData.append('sumber_informasi', this.sumber_informasi);
    console.log(formData);

    try{
      const res = await axios.post('https://praktikum-cpanel-unbin.com/api_egiii/uas_smt3/post_data.php', formData);
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
      
    
      }
    


