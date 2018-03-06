import { MaskUtils } from '../MaskUtils'
import LogicSystem from '../logic_system.js'

export default function(ecs) {
    let styleSystem = new LogicSystem(ecs);

    styleSystem.mask = MaskUtils.Masks.MessagingComponent | MaskUtils.Masks.TransformComponent | MaskUtils.Masks.StyleComponent;
    styleSystem.tick = function(delta, eid, componentBundle) {
        let transformComponent = componentBundle.get(MaskUtils.Masks.TransformComponent);
        let styleComponent = componentBundle.get(MaskUtils.Masks.StyleComponent);

        styleComponent.style.transform = 'translate3d(' + transformComponent.x + 'px,' + transformComponent.y + 'px, 0)';

        let randomChance = Math.floor(Math.random() * 1000);
        if (randomChance <= 10) {
            switch (styleComponent.style.backgroundColor) {
                case 'red':
                    styleComponent.style.backgroundColor = 'orange';
                    break;
                case 'orange':
                    styleComponent.style.backgroundColor = 'yellow';
                    break;
                case 'yellow':
                    styleComponent.style.backgroundColor = 'green';
                    break;
                case 'green':
                    styleComponent.style.backgroundColor = 'blue';
                    break;
                case 'blue':
                    styleComponent.style.backgroundColor = 'magenta';
                    break;
                case 'magenta':
                    styleComponent.style.backgroundColor = 'purple';
                    break;
                case 'purple':
                    styleComponent.style.backgroundColor = 'white';
                    break;
                case 'white':
                    styleComponent.style.backgroundColor = '#111';
                    break;
            }
        }
    }

    return styleSystem;
}