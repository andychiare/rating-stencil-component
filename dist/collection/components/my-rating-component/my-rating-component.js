import { Component, Prop, State, Event, h } from '@stencil/core';
export class MyRatingComponent {
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
        this.ratingUpdated.emit({ value: this.value });
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
    static get originalStyleUrls() { return {
        "$": ["my-rating-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-rating-component.css"]
    }; }
    static get properties() { return {
        "maxValue": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "max-value",
            "reflect": false,
            "defaultValue": "5"
        },
        "value": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "0"
        }
    }; }
    static get states() { return {
        "starList": {}
    }; }
    static get events() { return [{
            "method": "ratingUpdated",
            "name": "ratingUpdated",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
