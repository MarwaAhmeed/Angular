import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroSecComponent } from './hero-sec/hero-sec.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarosalComponent } from './carosal/carosal.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { HeadingsComponent } from './headings/headings.component';
import { HeadComponent } from './head/head.component';
import { Footer2Component } from './footer2/footer2.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroSecComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    NavBarComponent,
    CarosalComponent,
    CardComponent,
    CardListComponent,
    HeadingsComponent,
    HeadComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
