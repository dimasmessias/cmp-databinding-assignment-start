import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent
{
	public evenNumber: number[] = [];
	public oddNumber: number[] = [];

	public onHandleOnInterval(counter: number): void
	{
		if (counter % 2 === 0)
			this.evenNumber.push(counter);
		else
			this.oddNumber.push(counter);

		console.log(counter);
		console.log(this.oddNumber);
		console.log(this.evenNumber);
	}
}
