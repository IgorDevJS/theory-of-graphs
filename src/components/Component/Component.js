export default class Component {
  // render element in container received as param
  render(container) {
    container.appendChild(this.elem);
  }
}
