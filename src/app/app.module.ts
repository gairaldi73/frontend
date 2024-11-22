import { NgModule} from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReunionComponent } from "./reunion/reunion.component";
import { RouterModule } from "@angular/router";


@NgModule({
declarations:[
AppComponent,
LoginComponent,
ReunionComponent,
],
imports:[
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
],
providers:[],
bootstrap:[AppComponent]
})
export class AppModule{}
