import { MaskUtils } from '../MaskUtils'
import LogicSystem from '../logic_system.js'

export default function(ecs) {
    let messagingSystem = new LogicSystem(ecs);
    messagingSystem.mask = MaskUtils.Masks.MessagingComponent;

    messagingSystem.tick = function(delta, eid, componentBundle) {
        //console.log('messagingSystem tick', {delta: delta, eid: eid, componentBundle: componentBundle});
    }

    return messagingSystem;
}