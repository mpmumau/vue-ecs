# Vue.js: Entity Component System Demonstration

This project is a simple demonstration of an implementation of an entity component system, written to interact with a Vue front-end application.

Entity component systems are data constructs typically used in games, and are a useful and efficient way of handling data manipulation for large arrays of entities. In games, entities typically represent all objects within the game, such as players, monsters, bosses, pickups, or really any conceivable part of the simulation within the game.

I was curious about pushing the limits of the Vue framework in terms of how many independent DOM objects could be manipulated simultaneously, and I thought one good way of doing so would be to implement an ECS to work with Vue. After running some experiments, it seems that Chrome begins to have significant performance issues when more than 200-300 entities are being acted upon.

## Running the Demo

You must install the Vue CLI to run this demonstration. Likewise, you'll need to install all Node.js dependencies in the typical way. Then, run `npm run serve` to instatiate a local dev server that will host the application at `http://localhost:8080`

## Notes

This was more of a proof-of-concept type of project, and as such it's not really suitable for production use. I do intend to flesh this out more in the future, however, and to polish its performance issues. As it stands now, this system is really only suitable for very small games or applications, utilizing less than 200 entities simultaneously. 

After profiling this application in Chrome, it seems that the performance issues are related to browser painting more so than the data structure itself. I had somewhat anticipated that issue, but was pleasantly surprised at least by Vue's ability to deal with the bindings to so many objects simultaneously.