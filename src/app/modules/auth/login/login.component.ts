import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {finalize, take} from 'rxjs/operators';
import {AuthLoginForm, IAuthLogin} from '../_services/auth-http/models/auth.models';
import {HttpErrorResponse} from '@angular/common/http';
import {CustomLocalStorage} from '../../../core/helpers/localStorage';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    hasError: boolean;
    isLoading = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private matSnackBar: MatSnackBar,
        private cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group(new AuthLoginForm());
    }

    get controls(): { [p: string]: AbstractControl } {
        return this.loginForm.controls;
    }

    submit() {
        if (this.loginForm.valid) {
            this.isLoading = true;
            this.authService.login(this.loginForm.value as IAuthLogin).pipe(take(1), finalize(() => {
                console.log('Finalize Called');
                this.isLoading = false;
            }))
                .subscribe((user) => {
                    CustomLocalStorage.setAuthLocalStorage(user.token);
                    this.router.navigateByUrl('/dashboard');
                }, (error: HttpErrorResponse) => {
                    this.hasError = true;
                    this.isLoading = false;
                    this.cd.detectChanges();
                    this.matSnackBar.open(error.error?.message, 'close');
                });
        } else {
            this.matSnackBar.open('please check Login details', 'close');
        }

    }
}
