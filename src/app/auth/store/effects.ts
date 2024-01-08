import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../auth.service";
import { authActions } from "./action";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "../shared/types/currentUser.interface";

export const registerEffect = createEffect(
    (actions$ = inject(Actions),
     authService = inject(AuthService)
    ) => {
        return actions$.pipe(
            ofType(authActions.register),
            switchMap(({ request }) => {
                return authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return authActions.registerSuccess({ request: currentUser }); 
                    }),
                    catchError(() => {
                        return of(authActions.registerFailure());
                    })
                );
            })
        );
    },

    { functional: true }
);