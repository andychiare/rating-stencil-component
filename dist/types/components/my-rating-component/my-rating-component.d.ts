import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class MyRatingComponent {
    maxValue: number;
    value: number;
    starList: Array<object>;
    onRatingUpdated: EventEmitter;
    componentWillLoad(): void;
    setValue(newValue: any): void;
    createStarList(numberOfStars: number): void;
    render(): JSX.Element;
}
