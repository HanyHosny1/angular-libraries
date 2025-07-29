import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormControl,
  ValidatorFn,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

interface LoginFormControl {
  key: string;
  value: any;
  required: boolean;
}

@Component({
  selector: 'lib-hta-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule,
  ],
  templateUrl: './hta-login.component.html',
  styleUrl: './hta-login.component.css',
})
export class HtaLoginComponent implements OnInit {
  passwordVisible: boolean = false;

  @Input() title: string = 'Login';

  @Input() loginInputType: 'email' | 'username' = 'username';
  @Input() placeholderEmail!: string;
  @Input() placeholderUser!: string;
  @Input() rememberMe!: string;
  @Input() forgotPassword!: string;
  @Input() passwordTitle!: string;
  @Input() passwordRegExp: RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;
  @Input() usePasswordRegExpValidation: boolean = false;

  @Input() placeholderPassword!: string;
  @Input() buttonText!: string;

  @Input() isLoading: boolean = false;
  @Input() isShowPassword: boolean = true;
  @Input() isRememberMe: boolean = true;
  @Input() isForgotPassword: boolean = true;
  @Input() isShowOrSocialBtns: boolean = true;
  @Input() isFacebookLogin: boolean = true;
  @Input() isGoogleLogin: boolean = true;
  @Input() isShowCompanyLogo: boolean = true;
  @Input() CompanyLogoSrc: string = '';
  @Input() usernameInvalidText: string = 'يجب إدخال إسم المستخدم.';
  @Input() emailInvalidText: string = 'يجب إدخال البريد الإلكتروني.';
  @Input() passwordInvalidText: string = 'يجب إدخال كلمة السر.';
  @Input() passwordRegExpInvalidText: string = 'يجب أن تتكون كلمة السر من 8 أحرف، شاملين على الأقل حرف كبير وصغير، ورقم، وعلامة.';

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
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
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

  @Input() usernameControl: LoginFormControl = {
    key: 'username',
    value: '',
    required: true,
  };

  @Input() passwordControl: LoginFormControl = {
    key: 'password',
    value: '',
    required: true,
  };

  @Input() formControls: LoginFormControl[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // this.formGroupName = this.fb.group({
    //   loginInputFields: ['', Validators.required],
    //   password: ['', Validators.required],
    //   rememberMe: [false],
    // });
    let group: any = {};
    group[this.usernameControl.key] = new FormControl(
      this.usernameControl.value,
      Validators.required
    );
    let passwordValidators: ValidatorFn[] = [Validators.required];
    if (this.usePasswordRegExpValidation) {
      passwordValidators.push(Validators.pattern(this.passwordRegExp));
    }
    group[this.passwordControl.key] = new FormControl(
      this.passwordControl.value,
      passwordValidators
    );
    this.formControls.forEach((control) => {
      group[control.key] = control.required
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    this.formGroupName = new FormGroup(group);
    console.log(this.formGroupName);
  }

  decentPassword(control: FormControl): {[s: string]: boolean} | null {
        if (!this.passwordRegExp.test(control.value)) {
            return {'invalidPassword': true};
        } else {
            return null;
        }
    }

  onSubmit() {
    if (this.formGroupName.valid) {
      const loginLoad = this.formGroupName.value;
      this.http.post(this.apiUrl, loginLoad).subscribe({
        next: (response: any) => {
          this.toastr.success('Login Successful!');
          this.loginSuccess.emit(response);
        },
        error: (error: any) => {
          console.error('Login Failed:', error);

          if (error.status === 400) {
            this.toastr.error('Invalid credentials, please try again!');
          } else if (error.status === 500) {
            this.toastr.error('Server error, please try again later.');
          } else {
            this.toastr.error('An error occurred, please try again.');
          }

          this.loginFailure.emit(error);
        },
      });
    } else {
      this.toastr.error('Please provide all required fields!');
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById(
      'password'
    ) as HTMLInputElement;
    passwordField.type = this.passwordVisible ? 'text' : 'password';
  }

  get usernameField() {
    return this.formGroupName.controls[this.usernameControl.key];
  }

  get passwordField() {
    return this.formGroupName.controls[this.passwordControl.key];
  }
}
