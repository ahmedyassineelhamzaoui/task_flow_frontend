import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { registerEffect, redirectAfterRegisterEffect, loginEffect, redirectAfterLoginEffect } from './auth/store/effects';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { TaskComponent } from './dashboard-layout/components/task/task.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { AddTaskComponent } from './dashboard-layout/components/add-task/add-task.component';
import { TasksEffects } from './dashboard-layout/store/effects';
import { tasksReducer } from './dashboard-layout/store/reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    SpinnerComponent,
    TaskComponent,
    DashboardLayoutComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({mytaskState:tasksReducer}, {}),
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
      redirectAfterLoginEffect,
    },
     TasksEffects
    ),
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
