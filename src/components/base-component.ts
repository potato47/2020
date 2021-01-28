export class BaseComponent {

    rawElement: HTMLElement;
    parent: BaseComponent;
    children: BaseComponent[];

    constructor(element: HTMLElement) {
        this.rawElement = element;
    }

    addChild(child: BaseComponent) {

    }

    onLoad() {

    }

    onShow() {

    }

    onHide() {

    }

    onDestroy() {

    }
    
}
