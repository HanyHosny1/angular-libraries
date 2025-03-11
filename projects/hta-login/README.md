# NgxHtaLogin

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

This is an updated release of `HtaLogin`.

Requires `ngx-toastr` for toaster alerts.

## Installation

```
npm install --save ngx-hta-login
npm install --save ngx-toastr
```

Do not forget to add the `ngx-toastr` provider and CSS!

## Basic Usage

`*.component.html`:

```html
<lib-hta-login apiUrl="YOUR_API_HERE" [usernameControl]="username" [passwordControl]="password" (loginSuccess)="onLoginSuccess($event)" (loginFailure)="onLoginFailure($event)" />
```

`*.component.ts`:

```ts
export class ExampleComponent {
  username = { key: "username", value: "", required: true };
  password = { key: "password", value: "", required: true };

  onLoginSuccess(event: any) {
    // YOUR CODE HERE
  }

  onLoginFailure(event: any) {
    // YOUR CODE HERE
  }
}
```

This allows the library to perform its login functionality with the bare minimum inputs to handle login responses.

## Inputs

The library provides multiple inputs for customising how it works and looks:

- `loginInputType`: **Required.** String input for choosing between `email` (email) and `username` (username).
- `usernameControl`: **Required.** Object to specify the `username` or `email` key that will be used in the login payload: `{ key: 'YOUR_KEY_HERE', value: '', required: true }`.
- `passwordControl`: **Required.** Object to specify the `password` key that will be used in the login payload: `{ key: 'YOUR_KEY_HERE', value: '', required: true }`.
- `apiUrl`: **Required.** The API URL that the payload will be sent to. Preferred to be referenced from a string in your `.component.ts` file for security reasons.
- `formControls`: Array of additional control objects to be added to the login payload, if needed: `[ { key: 'YOUR_KEY_HERE', value: '', required: true } ]`.
- `placeholderEmail`: A string for the placeholder text in the email input when `loginInputType` is `email`.
- `placeholderUser`: A string for the placeholder text in the username input when `loginInputType` is `username`.
- `placeholderPassword`: A string for the placeholder text in the password input.
- `rememberMe`: String to show in the "Remember Me" area.
- `isRememberMe`: Boolean to select whether the "Remember Me" area is enabled or not.
- `forgotPassword`: String to show in the "Forgot Password?" area.
- `isForgotPassword`: Boolean to select whether the "Forgot Password?" area is enabled or not.
- `passwordTitle`: String to show in the "Password" label area.
- `isShowPassword`: Boolean to enable or disable the functionality to show the password.
- `buttonText`: String to show in the login button. Will always be overridden by `Loading...` when the login payload has been sent and is awaiting the response.
- `isShowOrSocialBtns`: Boolean to enable or disable the Social login buttons, currently Facebook and Google.
- `isFacebookLogin`: Boolean to enable the Facebook login. Requires `isShowOrSocialBtns` to be `true`.
- `isGoogleLogin`: Boolean to enable the Google login. Requires `isShowOrSocialBtns` to be `true`.
- `CompanyLogoSrc`: String to reference the image asset that will be used in the Company Logo area.
- `isShowCompanyLogo`: Boolean to enable or disable the Company Logo area.

## Outputs

There are mainly two outputs for handling login responses:

- `loginSuccess`: Event fired when the login is successful. The response varies depending on how your API handles login responses.
- `loginFailure`: Event fired when the login fails. The response varies depending on how your API handles login responses.

## CSS Inputs

The library also provides inputs in the form of CSS objects that can be used to customise how the library looks:

- `wholePageContainerStyle`: The container that holds the login form. Defaults to:

```ts
{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw'
}
```

- `loginWrapperStyle`: The login form. Defaults to:

```ts
{
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
  background: 'linear-gradient(180deg, var(--primary-color) 25%, rgba(33, 150, 243, 0) 50%)'
}
```

- `eyeShowPassword`: The button that shows or hides the password. Defaults to:

```ts
{
  position: 'absolute',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  left: '30px',
  bottom: '31px'
}
```

- `direction`: The direction of the elements, left-to-right or right-to-left. Defaults to:

```ts
{
  direction: "rtl";
}
```
