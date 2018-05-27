import interact from 'interactjs';

export default class Component {
  // render element in container received as param
  render(container) {
    container.appendChild(this.elem);
  }

  // config resizable for the component that calls this method
  configResizable(o) {
    const opts = o || {
      // default options
      left: true,
      minWidth: 150,
      maxWidth: 300,
      minHeight: '100%',
      maxHeight: '100%',
    };
    this.interactElem = interact(this.elem)
      .resizable({
        // resize from all edges and corners
        edges: {
          left: opts.left,
          right: opts.right,
        },

        // keep the edges inside the parent
        restrictEdges: {
          outer: 'parent',
          endOnly: true,
        },

        // minimum size
        restrictSize: {
          min: {
            width: opts.minWidth,
            height: opts.minHeight,
          },
          max: {
            width: opts.maxWidth,
            height: opts.maxHeight,
          },
        },

        inertia: true,
      })
      .on('resizemove', (event) => {
        const { target } = event;

        // update the element's style
        target.style.width = `${event.rect.width}px`;
      });
  }
}
