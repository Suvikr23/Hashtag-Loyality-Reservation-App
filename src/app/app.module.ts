import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateTimePickerModule } from 'ng-pick-datetime';
// import datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import { DateTimePickerDirective } from 'ng2-eonasdan-datetimepicker/src/datetimepicker.directive';
import { TagsInputModule } from 'ngx-tags-input/dist';
// import { MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CalenderComponent } from './calender/calender.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  { path: 'reservation', component: ReservationComponent },
  { path: 'app-root', component: AppComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'settings', component: SettingsComponent },
  {
    path: '',
    redirectTo: 'reservation',
    pathMatch: 'full'
  },

  // { path: '**', component: PageNotFoundClass }
];

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    CalenderComponent,
    SettingsComponent,
    DateTimePickerDirective
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    TagsInputModule.forRoot(),
    BrowserModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    DateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
