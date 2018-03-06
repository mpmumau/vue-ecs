import { MaskUtils } from '../MaskUtils'
import Component from '../component'

export default () => {
    let messagingComponent = new Component();
    messagingComponent.mask = MaskUtils.Masks.MessagingComponent;

    messagingComponent.messages = [];

    return messagingComponent;
}