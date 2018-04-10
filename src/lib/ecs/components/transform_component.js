import { MaskUtils } from '../MaskUtils'
import Component from '../component'

export default () => {
    var transform_component = new Component();
    transform_component.mask = MaskUtils.Masks.TransformComponent;

    transform_component.x = Math.floor(Math.random() * 1014);
    transform_component.y = Math.floor(Math.random() * 758) - 768;
    transform_component.rot = 0.0;

    transform_component.rate = (Math.random() / 10) + 0.025;

    transform_component.horizontalRate = (Math.random() / 100) + 0.025;
    transform_component.isFlipped = false;
    transform_component.horizontalExtent = Math.floor(Math.random() * 100) + 25;
    transform_component.horizontalOffset = 0;

    return transform_component;
}