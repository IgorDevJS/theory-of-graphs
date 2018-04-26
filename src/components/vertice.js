const vertice = function () {
    this.render();
}

vertice.prototype = {
    render: function () {
        this.elem = document.createElement('div');
    },
    setValue: function (value) {
        this.elem.innerHTML = value;
    }
}

export { vertice }