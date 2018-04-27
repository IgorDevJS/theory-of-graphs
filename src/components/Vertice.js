export class Vertice {
    constructor() {
        this.render();
    }

    // init component
    init() {
        this.elem = document.createElement('div');
    }

    // set componente value
    setValue(value) {
        this.elem.innerHTML = value;
    }
}