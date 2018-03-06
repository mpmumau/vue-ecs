import { MaskUtils } from '../MaskUtils'
import LogicSystem from '../logic_system.js'

export default function(ecs) {
    let movementSystem = new LogicSystem(ecs);
    movementSystem.mask = MaskUtils.Masks.MessagingComponent | MaskUtils.Masks.TransformComponent;

    movementSystem.tick = function(delta, eid, componentBundle) {
        let transformComponent = componentBundle.get(MaskUtils.Masks.TransformComponent);

        //transformComponent.x -= delta * 0.001;
        transformComponent.y += delta * transformComponent.rate;

        if (transformComponent.y > 768)
            this.ecs.removeEntity(eid);

        //console.log('movementSystem tick', {delta: delta, eid: eid, componentBundle: componentBundle});
    }

    return movementSystem;
}