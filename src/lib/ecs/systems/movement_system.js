import { MaskUtils } from '../MaskUtils'
import LogicSystem from '../logic_system.js'

export default function(ecs) {
    let movementSystem = new LogicSystem(ecs);
    movementSystem.mask = MaskUtils.Masks.MessagingComponent | MaskUtils.Masks.TransformComponent;

    movementSystem.tick = function(delta, eid, componentBundle) {
        let transformComponent = componentBundle.get(MaskUtils.Masks.TransformComponent);

    // transform_component.horizontalRate = (Math.random() / 100) + 0.025;
    // transform_component.isFlipped = false;
    // transform_component.horizontalExtent = Math.floor(Math.random() * 20);
    // transform_component.horizontalOffset = 0;

        if (transformComponent.horizontalOffset >= transformComponent.horizontalExtent) {
            transformComponent.horizontalOffset = 0;
            transformComponent.isFlipped = !transformComponent.isFlipped;
        }

        let xTraveled = 0.5 * delta * transformComponent.horizontalRate * (transformComponent.isFlipped ? -1 : 1);
        transformComponent.horizontalOffset += Math.abs(xTraveled);

        transformComponent.x += xTraveled;
        transformComponent.y += delta * transformComponent.rate;

        if (transformComponent.y > 768)
            this.ecs.removeEntity(eid);

        //console.log('movementSystem tick', {delta: delta, eid: eid, componentBundle: componentBundle});
    }

    return movementSystem;
}