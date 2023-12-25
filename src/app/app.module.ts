import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { EmployeeService } from './employee-modal-service.service';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ActionsComponent } from './actions/actions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SettingsComponent } from './components/settings/settings.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TutorsComponent } from './components/tutors/tutors.component';
import { StudentComponent } from './components/student/student.component';
import { StudentInfoModalComponent } from './components/modals/student-info-modal/student-info-modal.component';
import { AppointmentComponent } from './components/modals/appointment/appointment.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ActionsComponent,
    SettingsComponent,
    HeaderComponent,
    TutorsComponent,
    StudentComponent,
    StudentInfoModalComponent,
    AppointmentComponent,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    FontAwesomeModule,
    OverlayModule,
    FormsModule,
    MatSelectModule
  ],
})
export class AppModule {}
