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
            width: opts.minWidth ? opts.minWidth : 150,
            height: opts.minHeight ? opts.minHeight : '100%',
          },
          max: {
            width: opts.maxWidth ? opts.maxWidth : 300,
            height: opts.maxHeight ? opts.maxHeight : '100%',
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
