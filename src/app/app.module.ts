import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { registerEffect, redirectAfterRegisterEffect, loginEffect, redirectAfterLoginEffect } from './auth/store/effects';
import { TasksComponent } from './dashboard/component/tasks/tasks.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TasksComponent,
    SidebarComponent,
    NavbarComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(authFeatureKey, authReducer),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: !isDevMode(), 
      autoPause: true,
      trace: false, 
      traceLimit: 75, 
      connectInZone: true 
    }),
    EffectsModule.forRoot({
      registerEffect,
      redirectAfterRegisterEffect,
      loginEffect,
      redirectAfterLoginEffect
    }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
