const asana = require('asana');
const config = require('../settings.json').asana;
const client = asana.Client.create().useAccessToken(config.authorization);

client.users.me().then((me) => {
    let userId = me.id;
    let workspaceId = workspaceIdFromName(me.workspaces, "Personal Projects")

    console.log(workspaceId)

    

    /*me.workspaces.forEach((ws) => {
        console.log(ws);
        if (ws.name == "Personal Projects") {
            workspaceID = ws.id;
        };
    });

    console.log(client.tasks.findAll({

    }));*/
})

function workspaceIdFromName(workspaces, name) {
    console.log('params', workspaces, name)
    workspaces.forEach((ws) => {
        if (ws.name == name) {
            return ws.id;
        };
    });
}