// 1.  importar component de angular Core
import { Component } from "@angular/core";

// 2. Crear componente
@Component({
    // selector es como se va a identificar dentro del html <app-counter>
    selector: 'app-counter',
    // template es lo que se mostrara en la interfaz (html) o puede ser la URL del HTML del modulo
    template: `
        <h1>Hola Counter</h1>
        <h3>Counter: {{counter}}</h3>
        <button (click)="contardorDecremento(1)">-1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="contardorAumento(1)">+1</button>
    `
    // templateUrl es la URL del HTML del modulo que se mostrara
    // templateUrl: './counter.component.html',
    // Styles URL importa el CSS del modulo
    // styleUrls: ['./app.component.css']
})

// 3. Se exporta la clase del componente
export class CounterComponent {
    public title: string = 'Mi primera app de Angular!';
    public counter: number = 1;

    contardorAumento(value: number): void {
        this.counter += value;
    }

    contardorDecremento(value: number): void {
        this.counter -= value;
    }

    reset(): void {
        this.counter = 0;
    }
}

// 4. En el archivo app.module.ts se declara el modulo usando la clase en este caso CounterComponent