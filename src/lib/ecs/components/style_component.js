import { MaskUtils } from '../MaskUtils'
import Component from '../component'

export default () => {
    var styleComponent = new Component();
    styleComponent.mask = MaskUtils.Masks.StyleComponent;

    styleComponent.style = {
        position: 'absolute',
        backgroundColor: 'red',
        width: '10px',
        height: '10px',
        transform: 'translate3d(' + Math.floor(Math.random() * 758) + 'px,' + Math.floor(Math.random() * 1024) + 'px, 0)'
    }

    return styleComponent;
}