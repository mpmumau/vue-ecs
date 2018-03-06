export default function(ecs) {
    return {
        ecs: ecs,
        mask: 0x00,
        tick(delta, eid, componentBundle) {},
    }
}