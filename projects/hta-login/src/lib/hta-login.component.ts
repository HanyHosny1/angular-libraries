import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'lib-hta-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './hta-login.component.html',
  styleUrl: './hta-login.component.css',
})
export class HtaLoginComponent implements OnInit {
  passwordVisible: boolean = false;

  @Input() title: string = 'Login';

  @Input() loginInputType: 'email' | 'userName' = 'email';
  @Input() placeholderEmail!: string;
  @Input() placeholderUser!: string;
  @Input() rememberMe!: string;
  @Input() forgetPassword!: string;

  @Input() placeholderPassword!: string;
  @Input() buttonText!: string;

  @Input() isLoading: boolean = false;
  @Input() isShowPassword: boolean = true;
  @Input() isRememberMe: boolean = true;
  @Input() isForgetPassword: boolean = true;
  @Input() isShowOrSocialBtns: boolean = true;
  @Input() isFacebookLogin: boolean = true;
  @Input() isGoogleLogin: boolean = true;
  @Input() isShowCompanyLogo: boolean = true;
  @Input() CompanyLogoSrc: string = '';

  @Input() wholePageContainerStyle: any = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  };

  @Input() loginWrapperStyle: any = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: '500px',
    borderRadius: '56px',
    padding: '2px',
    margin: 'auto',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2',
    background:
      'linear-gradient(180deg, var(--primary-color) 25%, rgba(33, 150, 243, 0) 50%)',
  };

  @Input() eyeShowPassword: any = {
    position: 'absolute',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    left: '30px',
    bottom: '31px',
  };

  @Input() direction: any = {
    direction: 'rtl',
  };

  @Input() apiUrl: string = '';

  @Output() loginSuccess = new EventEmitter<any>();
  @Output() loginFailure = new EventEmitter<any>();

  value: string = '';
  password: string = '';

  checked: boolean = false;
  email: string = '';
  username: string = '';

  formGroupName!: FormGroup;

  @Output() loginSubmit = new EventEmitter<{
    email: string;
    username: string;
    password: string;
  }>();

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formGroupName = this.fb.group({
      loginInputFields: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.value && this.password) {
      this.loginSubmit.emit(this.formGroupName.value);
    } else {
      alert('برجاء ادخال البيانات المطلوبة');
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById(
      'password'
    ) as HTMLInputElement;
    passwordField.type = this.passwordVisible ? 'text' : 'password';
  }
}
