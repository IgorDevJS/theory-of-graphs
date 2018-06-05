import interact from 'interactjs';
import {
  Scroller,
  ScrollRender,
} from 'zynga-scroller-woodbettle-es6';
import ResizeSensor from 'resize-sensor-es6';

import './GraphContainer.scss';
import Component from '../Component/Component';
import Vertice from '../Vertice/Vertice';
import ManageData from '../ManageData/ManageData';

export default class GraphContainer extends Component {
  constructor() {
    super();
    this.init();
    this.configDropZone();

    setTimeout(() => {
      this.configZoom();
      this.bindEvents();
    });
  }

  init() {
    this.elem = document.createElement('div');
    this.elem.classList.add('GraphContainer');

    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.elem.appendChild(this.container);

    this.content = document.createElement('div');
    this.content.classList.add('content');
    this.container.appendChild(this.content);

    this.manageData = new ManageData();
  }

  bindEvents() {
    this.resizeSensor = new ResizeSensor(this.elem, () => {
      this.reflowScroll();
    });
  }

  configDropZone() {
    interact(this.content).dropzone({
      // only accept elements matching this CSS selector
      accept: '.Vertice, .Aresta',
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.75,

      // listen for drop related events:

      ondropactivate(event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
        event.relatedTarget.classList.add('drop-active');
      },
      ondragenter(event) {
        const draggableElement = event.relatedTarget;
        const dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
      },
      ondragleave(event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
      },
      ondrop: (event) => {
        const e = event;
        // case sample
        if (e.relatedTarget.getAttribute('is-sample')) {
          // get dimension of vertice sample
          const rect = e.relatedTarget.getBoundingClientRect();

          const rectContent = this.content.getBoundingClientRect();

          // create new Vertice
          const vertice = new Vertice({
            top: rect.top - rectContent.top,
            left: rect.left - rectContent.left,
          });
          this.manageData.pushVerticeData(vertice);
          vertice.render(this.content);
          vertice.focus();
        }
      },
      ondropdeactivate(event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('drop-active');
      },
    });
  }

  configZoom() {
    this.scroller = new Scroller(new ScrollRender(this.container, true), {
      scrollingX: true,
      scrollingY: true,
      animating: true,
      bouncing: false,
      locking: false,
      paging: false,
      zooming: true,
      minZoom: 0.5,
      maxZoom: 3,
      scrollingComplete: function _NOOP() {},
    });

    // Reflow handling
    this.reflowScroll();
    this.configTouchiesZoom();
  }

  reflowScroll() {
    const clientRect = this.container.getBoundingClientRect();
    this.scroller.setPosition(
      clientRect.left + this.container.clientLeft,
      clientRect.top + this.container.clientHeight,
    );

    this.scroller.options.img = this.content;
    const contentRect = this.content.getBoundingClientRect();

    const clientWidth = clientRect.width;
    const clientHeight = clientRect.height;
    const contentWidth = contentRect.width;
    const contentHeight = contentRect.height;
    this.scroller.setDimensions(clientWidth, clientHeight, contentWidth, contentHeight);
  }

  configTouchiesZoom() {
    this.minScale = 0.5;
    this.maxScale = 3;
    this.lastZoom = null;

    // register pinch event
    let scaling;

    const increment = 0.3;
    const sensitivity = 25;

    function getDistancePinch(e) {
      return Math.sqrt(((e.touches[0].clientX - e.touches[1].clientX) *
          (e.touches[0].clientX - e.touches[1].clientX)) +
        ((e.touches[0].clientY - e.touches[1].clientY) *
          (e.touches[0].clientY - e.touches[1].clientY)));
    }

    function getPositionPinch(e) {
      return {
        y: ((e.touches[1].clientY + e.touches[0].clientY) / 2),
        x: ((e.touches[1].clientX + e.touches[0].clientX) / 2),
      };
    }

    let startDistance;
    let startScale;

    function pinchStart(e) {
      startDistance = getDistancePinch(e);
      startScale = this.lastZoom;
    }

    function pinchMove(e) {
      const dist = getDistancePinch(e);

      this.pinchZoom = (((dist - startDistance) * (increment / sensitivity)) +
        startScale).between(this.minScale, this.maxScale);

      if (this.pinchZoom === this.lastZoom) return;

      this.scroller.zoomTo(this.pinchZoom, false, getPositionPinch(e).x, getPositionPinch(e).y);
    }

    function pinchEnd() {
      this.lastZoom = this.pinchZoom;
    }

    if ('ontouchstart' in window) {
      const touchStartFunction = (e) => {
        if (e.touches.length === 2) {
          scaling = true;
          e.returnValue = false;
          pinchStart(e);
        }
        this.scroller.doTouchStart(e.touches, e.timeStamp);

        e.preventDefault();
      };

      const touchMoveFunction = (e) => {
        if (scaling) {
          pinchMove(e);
          e.returnValue = false;
        }
        this.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
      };

      const touchEndFunction = (e) => {
        if (scaling) {
          pinchEnd(e);
          scaling = false;
          e.returnValue = false;
        }
        this.scroller.doTouchEnd(e.timeStamp);
      };

      const touchCancelFunction = (e) => {
        this.scroller.doTouchEnd(e.timeStamp);
      };

      this.elem.addEventListener('touchstart', touchStartFunction);
      this.elem.addEventListener('touchmove', touchMoveFunction);
      this.elem.addEventListener('touchend', touchEndFunction);
      this.elem.addEventListener('touchcancel', touchCancelFunction);
    } else {
      let mousedown = false;
      const mouseDownFunction = (e) => {
        // Don't react if initial down happens on a form element
        if (e.target.tagName.match(/input|textarea|select/i)) {
          return;
        }

        this.scroller.doTouchStart([{
          pageX: e.pageX,
          pageY: e.pageY,
        }], e.timeStamp);

        mousedown = true;
      };

      const mouseMoveFunction = (e) => {
        if (!mousedown) {
          return;
        }
        this.scroller.doTouchMove([{
          pageX: e.pageX,
          pageY: e.pageY,
        }], e.timeStamp);
        mousedown = true;
      };

      const mouseUpFunction = (e) => {
        if (!mousedown) {
          return;
        }
        this.scroller.doTouchEnd(e.timeStamp);

        mousedown = false;
      };

      const mouseWheelFunction = (e) => {
        this.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
        this.pinchZoom = this.scroller.getValues().zoom;
      };

      this.elem.addEventListener('mousedown', mouseDownFunction, false);
      this.elem.addEventListener('mousemove', mouseMoveFunction, false);
      this.elem.addEventListener('mouseup', mouseUpFunction, false);
      this.elem.addEventListener('mousewheel', mouseWheelFunction, false);
    }

    // $ionicGesture.on('doubletap', function (e) {
    //   // only executes the action if it is not in the middle of an image transition
    //   if (scrollerMain.getValues().left / widthView % 1 === 0) {
    //     var scale = pinchZoom ? pinchZoom : lastZoom;
    //     if (scale < maxScale) {
    //       pinchZoom = maxScale;
    //       inZoom = true;
    //     } else {
    //       pinchZoom = minScale;
    //       inZoom = false;
    //     }

    //     lastZoom = pinchZoom

    //     // zoom to the point where the user clicked
    //     zooming = true;
    //     arrayScrollers[currentIndex].zoomTo(
    //        pinchZoom, true, e.gesture.center.pageX, e.gesture.center.pageY, function () {
    //       zooming = false;
    //     });
    //   }
    // }, $(divContainerView));
  }
}
