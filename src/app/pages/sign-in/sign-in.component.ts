import {Component, OnInit, ChangeDetectorRef, NgZone} from '@angular/core';
import {onAuthUIStateChange, CognitoUserInterface, AuthState, Translations, FormFieldTypes} from '@aws-amplify/ui-components';
import {UserService} from '../../services/user.service';
import {I18n} from 'aws-amplify';
import {Router} from '@angular/router';


const authScreenLabels = {
  it: {
    [Translations.SIGN_UP_HEADER_TEXT]: 'Crea nuovo account',
    [Translations.CONFIRM_SIGN_UP_LOST_CODE]: 'Hai perso il codice?',
    [Translations.SEND_CODE]: 'Invia codice',
    'Forgot your password?': 'Hai dimenticato la password?',
    'Reset password': 'Resetta',
    'No account?': 'Non hai un account?',
    'Create account': 'Registrati ',
    'Sign in': 'ACCEDI',
    'Have an account?': 'hai un account?',
    'Reset your password': 'Recupera password',
    'Back to Sign In': 'Accedi',
    'Confirmation Code': 'Codice conferma',
    'Confirm Sign up': 'Inserisci il codice di conferma che ti abbiamo inviato. Controlla nella tua casella email',
    'Resend Code': 'Reinvia ',
    [Translations.CONFIRM]: 'Conferma',
    'Enter your code': 'Inserisci il codice',
    'Custom auth lambda trigger is not configured for the user pool.': 'Inserire la password',
    'Username cannot be empty': 'Inserire la email',
    'Verification code': 'Codice di verifica',
    'Enter code': 'Inserisci il codice',
    'Enter your new password': 'Inserisci la nuova password',
    'New password': 'Nuova password',
    'Confirmation code cannot be empty': 'Inserire il codice di conferma che le abbiamo inviato alla sua casella di posta',
    'Password cannot be empty': 'Inserire la password',
    '1 validation error detected: Value at \'password\' failed to satisfy constraint: Member must have length greater than or equal to 6': 'La password deve essere lunga almeno 6 caratteri',
    '2 validation errors detected: Value at \'password\' failed to satisfy constraint: Member must have length greater than or equal to 6; Value at \'password\' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[\S]+.*[\S]+$': 'La password deve essere lunga almeno 6 caratteri',
    'Invalid verification code provided, please try again.': 'Codice di conferma non valido, riprova.',
    'Sign in to your account': 'Accedi con il tuo account',
    'Attribute value for name must not be null': 'Inserire il nome',
    'Attribute value for family_name must not be null': 'Inserire il cognome',
    'Sign In': 'Accedi',
    'Sign Up': 'Registrati',
    'Enter your password': 'Inserisci la password',
    'Reset Password': 'Recupera password',
    'Back to Sign in': 'Ritorna al login',
    'You will receive a verification code to reset your password': 'Riceverai un codice di conferma sulla tua casella email per resettare la password',
    [Translations.SUBMIT]: 'Invia',
    [Translations.VERIFY_CONTACT_EMAIL_LABEL]: 'Verifica',
    'Verify Contact': 'Verifica contatto',
    [Translations.CONFIRM_SIGN_UP_RESEND_CODE]: 'Reinvia',
    'Forgot Password?': 'Hai dimenticato la password?',
    'You will receive a verification code': 'Riceverai un codice di conferma sulla tua casella email',
    [Translations.CODE_LABEL]: 'Codice',
    'User already exists': 'L\'account associato a questa email esiste già',
    'Incorrect username or password': 'Username e/o password non corretti',
    'Invalid password format': 'Formato password invalido',
    'Invalid phone number format': 'Formato numero telefonico invalido',
    'Incorrect username or password.': 'Username e/o password non corretti',
    'Password attempts exceeded': 'Hai cercato di accedere troppe volte',
    'Enter your email address': 'Inserisci il tuo indirizzo email',
    'Email Address *': 'Indirizzo Email',
    'User does not exist.': 'Utente non esistente',
    'An account with the given email already exists.': 'Esiste già un accounto con questa email'
  }
};

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  CognitoUser: CognitoUserInterface | undefined;
  authState: AuthState;

  formFields: FormFieldTypes;
  signinAuth: FormFieldTypes;
  first = true;


  constructor(private ref: ChangeDetectorRef, private userService: UserService, private router: Router, private ngzone: NgZone) {
    I18n.setLanguage('it');
    I18n.putVocabularies(authScreenLabels);

    this.signinAuth = [
      {
        type: 'email',
        label: 'Email / Username',
        placeholder: 'user@mail.it',
        required: true,
      },
      {
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        required: true,
      },
    ];

    this.formFields = [
      {
        type: 'email',
        label: 'Email / Username',
        placeholder: 'user@mail.it',
        required: true,
      },
      {
        type: 'name',
        label: 'Nome',
        placeholder: 'es: Marco',
        required: true,
      },
      {
        type: 'family_name',
        label: 'Cognome',
        placeholder: 'es: Rossi',
        required: true,
      },
      {
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        required: true,
      },
      {
        type: 'phone_number',
        label: 'Cellulare',
        placeholder: '3332557007',
        required: false,

      },
    ];
  }

  ngOnInit(): void {
    onAuthUIStateChange(async (authState, authData) => {
      // salvo le varibili di accesso non appena effettua il sign in
      this.ref.detectChanges();
      this.userService.setAuthState(authState);
      // redirect verso la pagina corretta e creazione o retrive dello user
      if (authState === 'signedin' && this.first) { // todo creare la riconessione se si è già acceduto
        this.first = false;
        this.userService.setCognitoUser(authData as CognitoUserInterface).then((val) => {
          console.log(val);
          this.userService.getUser().then((user) => {
            console.log(user);
            this.ngzone.runTask(() => {
                this.router.navigate(['preview']);
            });
          });
        }
        );


      }


    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    return onAuthUIStateChange;
  }


}
