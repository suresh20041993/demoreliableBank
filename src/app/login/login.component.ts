import { Component, OnInit,Output,Input,ViewChild,OnDestroy,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { LoginserviceService} from './loginservice.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    
  public model: any = { email: '', password: '' };


    chrsz: number = 8;
    hexcase: number = 0;



    constructor(
        private translate: TranslateService,
        public router: Router,   
        private loginservice: LoginserviceService,
        private toasterService: ToasterService
        // private http: HttpClient, private _http: Http

        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {}






    
    /* code for sha256*/
safe_add (x: any, y: any) {
        const lsw: any = (x & 0xFFFF) + (y & 0xFFFF);
        const msw: any = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
      }

    S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
 R (X, n) { return ( X >>> n ); }
Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
Sigma0256(x) { return (this.S(x, 2) ^ this.S(x, 13) ^ this.S(x, 22)); }
Sigma1256(x) { return (this.S(x, 6) ^ this.S(x, 11) ^ this.S(x, 25)); }
Gamma0256(x) { return (this.S(x, 7) ^ this.S(x, 18) ^ this.R(x, 3)); }
    Gamma1256(x) { return (this.S(x, 17) ^ this.S(x, 19) ^ this.R(x, 10)); }

   core_sha256 (m, l) {
        let K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
                            0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01,
                             0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
                             0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA,
                             0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
                             0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138,
                                0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
                                 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624,
                                 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
                                 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F,
                                 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
        let HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
        let W = new Array(64);
        let a, b, c, d, e, f, g, h, i, j;
        let T1, T2;

        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;

        for ( let i = 0; i<m.length; i+=16 ) {
         a = HASH[0];
         b = HASH[1];
         c = HASH[2];
         d = HASH[3];
         e = HASH[4];
         f = HASH[5];
         g = HASH[6];
         h = HASH[7];

         for ( let j = 0; j<64; j++) {
            if (j < 16) W[j] = m[j + i];
            else W[j] = this.safe_add(this.safe_add(this.safe_add(this.Gamma1256(W[j - 2]), W[j - 7]), this.Gamma0256(W[j - 15])), W[j - 16]);

            T1 = this.safe_add(this.safe_add(this.safe_add(this.safe_add(h, this.Sigma1256(e)), this.Ch(e, f, g)), K[j]), W[j]);
            T2 = this.safe_add(this.Sigma0256(a), this.Maj(a, b, c));

            h = g;
            g = f;
            f = e;
            e = this.safe_add(d, T1);
            d = c;
            c = b;
            b = a;
            a = this.safe_add(T1, T2);
          }

         HASH[0] = this.safe_add(a, HASH[0]);
         HASH[1] = this.safe_add(b, HASH[1]);
         HASH[2] = this.safe_add(c, HASH[2]);
         HASH[3] = this.safe_add(d, HASH[3]);
         HASH[4] = this.safe_add(e, HASH[4]);
         HASH[5] = this.safe_add(f, HASH[5]);
         HASH[6] = this.safe_add(g, HASH[6]);
         HASH[7] = this.safe_add(h, HASH[7]);
        }
        return HASH;
      }

     str2binb (str) {
        let bin = Array();
        let mask = (1 << this.chrsz) - 1;
        for (let i = 0; i < str.length * this.chrsz; i += this.chrsz) {
         bin[i>>5] |= (str.charCodeAt(i / this.chrsz) & mask) << (24 - i%32);
        }
        return bin;
      }

     Utf8Encode(string) {
        string = string.replace(/\r\n/g, '\n');
        let utftext = '';

        for (let n = 0; n < string.length; n++) {

            let c = string.charCodeAt(n);

         if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
          }  else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
          }

        }

        return utftext;
      }


     binb2hex (binarray) {
        let hex_tab = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        let str = '';
        for (let i = 0; i < binarray.length * 4; i++) {
         str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
         hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8 )) & 0xF);
        }
        return str;
      }

     SHA256(s) {
        this.chrsz = 8;
        this.hexcase = 0;
     s = this.Utf8Encode(s);
     return this.binb2hex(this.core_sha256(this.str2binb(s), s.length * this.chrsz));
     }




    /* code for sha256*/


//     OnSubmit(email,password){
//         console.log(email);
//         console.log(this.SHA256(password));

//         const abCapsUserLogin: Object = 'processVariables=' + JSON.stringify({
//           'processId': '624edb18571b11e79d0a0050569cb68c',
//           'ProcessVariables': {
//              'username': this.model.email,
//             // 'password': 'ec4b90b5ab6a3c6d1e3ce12d07f8eda74b012ff4a2f575ab02567650647df880',
//             'password': this.SHA256(this.model.password),

//           },
//           'projectId': 'ee9503dc9c4d11e7a78b0e1da0678571'});

//       //   this.loginservice.abcapUserLogin(username,this.SHA256(password)).subscribe((data : any)=>{
//       //    localStorage.setItem('userToken',data.token);
//       //    this.router.navigate(['']);
//       //  },(err : HttpErrorResponse)=>{
//       //   this.isLoginError = true;
//       // });



//     // onLoggedin() {
//     //     localStorage.setItem('isLoggedin', 'true');

//     // }
// }


submit() {

  console.log("login form values");
console.log(this.model);



  const abCapsLogin: any =  'email=' +  'rajesh.k@sastratechnologies.in' + '&' +
  'password=' + btoa('rajesh.k@123') + '&' +
  'passwordEncoded=true';


  this.loginservice.abCapsLogin(abCapsLogin).subscribe(appiyoLogin => {

   // console.log(appiyoLogin.token);
    if (appiyoLogin.token) {
      console.log('abcaps Appiyo Login', appiyoLogin);
      localStorage.setItem('userToken', JSON.stringify(appiyoLogin));
      console.log('localStorage', localStorage);

      const abCapsUserLogin: Object = 'processVariables=' + JSON.stringify({
        'processId': '624edb18571b11e79d0a0050569cb68c',
        'ProcessVariables': {
           'username': this.model.email,
          // 'password': 'ec4b90b5ab6a3c6d1e3ce12d07f8eda74b012ff4a2f575ab02567650647df880',
          'password': this.SHA256(this.model.password),

        },
        'projectId': 'ee9503dc9c4d11e7a78b0e1da0678571'});

          
        this.loginservice.abcapUserLogin(abCapsUserLogin).subscribe( (userLogin: any) => {
          console.log('userLogin', userLogin);
         const pv: any = userLogin.ProcessVariables;

         console.log(pv.notif.Lflag);
         if (pv.notif.Lflag) {
           //this.toasterService.pop('success', pv.notif.type,  pv.notif.value );
           const userPermission = pv.permissions;
           console.log(userPermission);
        //  if (userPermission) {
           const userLoginDetails = userLogin.ProcessVariables;
           const saveUserDetails  = {'role': userLoginDetails.role,
                                   'roleId': userLoginDetails.roleId,
                                      'uid': userLoginDetails.uid,
                                 'userName': userLoginDetails.userName
           };
       console.log('User Details')
      console.log(saveUserDetails);

       localStorage.setItem('userDetail', JSON.stringify(saveUserDetails));

         console.log('localStorage', localStorage);

         this.router.navigate(['/layout']);
        //  this.spinner.active = false;
        //  this.cdr.detectChanges();
        //  this.register(event);
        //  }
         } else {
           this.toasterService.pop('error', pv.notif.type,  pv.notif.value );
         }
        
       });
     }
   });
}







}


