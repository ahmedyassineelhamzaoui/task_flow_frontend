import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../auth.service";
import { authActions, loginActions } from "./action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { CurrentUserInterface } from "../shared/types/currentUser.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistanceService } from "../shared/services/persistance.service";
import { Router } from "@angular/router";

export const registerEffect = createEffect(
    (actions$ = inject(Actions),
     authService = inject(AuthService),
     persistanceService = inject(PersistanceService)
    ) => {
        return actions$.pipe(
            ofType(authActions.register),
            switchMap(({ request }) => {
                return authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        persistanceService.set('accessToken', currentUser.accessToken);
                        return authActions.registerSuccess({ currentUser: currentUser }); 
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        console.log('errorResponse',errorResponse.error.details);
                        return of(authActions.registerFailure({ errors: errorResponse.error.details }));
                    })
                );
            })
        );
    },

    { functional: true }
);

export const redirectAfterRegisterEffect = createEffect(
    (actions$ = inject(Actions), router= inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.registerSuccess),
            tap(() => {
                router.navigateByUrl('/');
            })
        )
    },
    {functional: true,dispatch: false}
);

export const loginEffect = createEffect(
    (actions$ = inject(Actions),
     authService = inject(AuthService),
     persistanceService = inject(PersistanceService)
    ) => {
        return actions$.pipe(
            ofType(loginActions.login),
            switchMap(({ request }) => {
                return authService.login(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        persistanceService.set('accessToken', currentUser.accessToken);
                        return loginActions.loginSuccess({ currentUser: currentUser }); 
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        console.log('errorResponse',errorResponse.error.details);
                        return of(loginActions.loginFailure({ errors: errorResponse.error.details }));
                    })
                );
            })
        );
    },

    { functional: true }
);

