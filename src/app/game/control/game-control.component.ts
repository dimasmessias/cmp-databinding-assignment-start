import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-game-control',
	templateUrl: './game-control.component.html',
	styleUrls: ['./game-control.component.css']
})
export class GameControlComponent
{
	private counter = 0;
	private interval: number;
	public isGameRunning = false;

	@Output() public handleOnInterval = new EventEmitter<number>();

	public onStart(): void
	{
		this.isGameRunning = true;
		this.interval = setInterval(() =>
		{
			this.counter++;
			this.handleOnInterval.emit(this.counter);

		}, 1000);
	}

	public onStop(): void
	{
		this.isGameRunning = false;
		clearInterval(this.interval);
	}
}
