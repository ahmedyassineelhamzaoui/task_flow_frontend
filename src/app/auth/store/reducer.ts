import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "./../types/authState.interface";
import { authActions, loginActions } from "./action";

const initialState : AuthStateInterface = {
    isSubmitting: false,
    isLoading:false,
    currentUser: null,
    validationErrors: null
}
const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.register, (state) => ({
            ...state,isSubmitting: true,validationErrors:null
        })),
        on(authActions.registerSuccess, (state,action) => ({
            ...state,isSubmitting: false,
            currentUser: action.currentUser
        })),
        on(authActions.registerFailure, (state,action) => ({
            ...state,isSubmitting: false,
            validationErrors: action.errors
        })),
        on(loginActions.login, (state) => ({
            ...state, isSubmitting: true, validationErrors: null
        })),
        on(loginActions.loginSuccess, (state, action) => ({
            ...state, isSubmitting: false, currentUser: action.currentUser
        })),
        on(loginActions.loginFailure, (state, action) => ({
            ...state, isSubmitting: false, validationErrors: action.errors
        })),
    ),
})
export const {
    name: authFeatureKey,
    reducer: authReducer,
    selectIsSubmitting,
    selectIsLoading,
    selectCurrentUser,
    selectValidationErrors
} = authFeature;