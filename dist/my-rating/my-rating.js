/*! Built with http://stenciljs.com */
const { h } = window.MyRating;

class MyRatingComponent {
    constructor() {
        this.maxValue = 5;
        this.value = 0;
        this.starList = [];
    }
    componentWillLoad() {
        this.createStarList(this.value);
    }
    setValue(newValue) {
        this.value = newValue;
        this.createStarList(this.value);
        this.onRatingUpdated.emit({ value: this.value });
    }
    createStarList(numberOfStars) {
        let starList = [];
        for (let i = 1; i <= this.maxValue; i++) {
            if (i <= numberOfStars) {
                starList.push(h("span", { class: "rating", onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value), onClick: () => this.setValue(i) }, "\u2605"));
            }
            else {
                starList.push(h("span", { class: "rating", onMouseOver: () => this.createStarList(i), onMouseOut: () => this.createStarList(this.value), onClick: () => this.setValue(i) }, "\u2606"));
            }
        }
        this.starList = starList;
    }
    render() {
        return (h("div", null, this.starList));
    }
    static get is() { return "my-rating"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "maxValue": {
            "type": Number,
            "attr": "max-value"
        },
        "starList": {
            "state": true
        },
        "value": {
            "type": Number,
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "onRatingUpdated",
            "method": "onRatingUpdated",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".rating {\n    color: orange;\n}"; }
}

export { MyRatingComponent as MyRating };
