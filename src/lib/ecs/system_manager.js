export default function(entityManager, componentManager) {
    return {
        entityManager: entityManager,
        componentManager: componentManager,

        systems: [],

        addSystem(system) {
            this.systems.push(system);
        },

        tick(delta) {
            let entityCache = this.entityManager.getEntities();
            let componentCache = this.componentManager.getAll();

            if (entityCache === 'undefined' || entityCache == null || entityCache.length < 1)
                return;

            for (let s = 0; s < this.systems.length; s++) {
                let mask = this.systems[s].mask;

                for (let eid = 0; eid < entityCache.length; eid++) {
                    if (entityCache[eid] == null)
                        continue;
                    let componentBundle = componentManager.getComponentBundle(eid, mask);
                    this.systems[s].tick(delta, eid, componentBundle);
                }
                
            }
        }
    }
}