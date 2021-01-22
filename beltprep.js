// - 1 . *Take 100% of the exam time*.
// Do not drop out early!
// just because a bug is hard to find does not mean it takes a long time to fix!

// - 2 . *Don't panic*, the only risk here is for you to find
// and expose a weakness to study and correct.

//- 3. *Don't watch the clock*,
// set alarms for the midway point, last hour, last 15 minutes

// - 4. *Start with what you know*, save confusing bugs for the end,
// save black belt features for the end.

// - 5. *Don't start the exam until you have your enviroment and boilerplate ready*
// you know you will need a react app, with routing, and axios.
// you know you need a node server with mongodb.
// you know you need routing and server modules

// - 6. *Use the exam instructions as a checklist*,
// double check that against your app before submitting
// written exam instructions always supercede the wireframe and it's post-it notes

// - 7. *Don't overthink features* do exactly what the exam asks.

// - 8. *Use the platform* 100% of the redbelt features are covered across the platform and the MERN material

// - 9. *If you have trouble submitting*
// DELETE YOUR NODE_MODULES, BOTH OF THEM.
// one in project, one in client. bstanton@codingdojo.com

// - 10. *if you go over time, submit anyway, you will still get a code review*

// - 10.5 *if you go over time, reach out anyway*

// - 11. *always submit* you get a code review! i've seen students almost walk away from passing grades!

// - 12. *even if you are feeling nervous, start the exam, take the wireframe, complete it before monday. we will be going over the wireframe monday morning. this will not be recorded

// - 13. *don't worry about the video*

// - 14. *you must connect with me on zoom to have your exam graded*

// - 15. *join the lecture room so i can assign a breakout room*

// - 16. *there is no reason to cheat period full stop*
// you need to feel comfortable about what you do and do not know to survive in an engineering role.

// - 17. *the only thing that counts as cheating is going onto github and submitting somebody else's code*


// requirements - MERN Exam

// RED BELT

// React, MongoDB, Node, Express
// Mongoose, axios, @reach/router
// cors

// CRUD
// create
// read
//    :m
//    :1
// update
// delete

// One model, (black belt) max 2
// three - five views max

// input types that are not just text
// drop down, check box, textarea

// error messages on create
// example error messages
// {
//     "errors": {
//         "artist": {
//             "name": "ValidatorError",
//             "message": "Your artist name must be two characters!",
//             "properties": {
//                 "message": "Your artist name must be two characters!",
//                 "type": "minlength",
//                 "minlength": 2,
//                 "path": "artist",
//                 "value": "z"
//             },
//             "kind": "minlength",
//             "path": "artist",
//             "value": "z"
//         },
//         "name": {
//             "name": "ValidatorError",
//             "message": "Your song name must be two characters!",
//             "properties": {
//                 "message": "Your song name must be two characters!",
//                 "type": "minlength",
//                 "minlength": 2,
//                 "path": "name",
//                 "value": "x"
//             },
//             "kind": "minlength",
//             "path": "name",
//             "value": "x"
//         }
//     },
//     "_message": "Validation failed",
//     "message": "Validation failed: artist: Your artist name must be two characters!, name: Your song name must be two characters!"
// }

// ** non-requirements
// loign reg
// auth
// many to many
// one to many is unlikely
// css
// outside apis, faker, skywalker, pokemon

// BLACK BELT

// deploy within 24ish hours of finish the exam

// sockets - maybe
// light login reg - maybe
// validations on edit - maybe
// uniqueness - maybe (existance check)
// sorting - by name or size or date
// conditional rendering - only show delete under conditions
