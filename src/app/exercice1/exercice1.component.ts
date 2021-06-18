import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-exercice1",
	templateUrl: "./exercice1.component.html",
	styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
	// LIAISON SUR UN ATTRIBUT

	public type1 = "text";
	public type2 = "date";
	public type3 = "number";

	// LIAISON SUR UN EVENEMENT

	public x = "200px";
	public y = "200px";
	public in = true;
	public dimension(x: string, y: string): void {
		this.x = x;
		this.y = y;
	}

	// INTERPOLATION
	public phrase = "Voici mon exemple d'interpolation !";

	constructor() {}

	ngOnInit(): void {}
}
