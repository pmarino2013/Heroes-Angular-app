import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './services/heroes.service';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
  ],
  //En imports va el archivo de rutas
  imports: [BrowserModule, APP_ROUTING],
  //Los servicios vienen aquí
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
