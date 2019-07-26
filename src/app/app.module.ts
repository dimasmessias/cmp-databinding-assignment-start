import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game/control/game-control.component';
import { EvenComponent } from './game/even/even.component';
import { OddComponent } from './game/odd/odd.component';

@NgModule({
	declarations: [
		AppComponent,
		GameControlComponent,
		OddComponent,
		EvenComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
