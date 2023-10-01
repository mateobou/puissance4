export const isPlayerConnected = ()=>{
    if(req.session.playerNumber === PLAYER_ONE || req.session.playerNumber === PLAYER_TWO){
        return true
    }
    return false
}

export function afficherSousRoutes(routePrincipale) {
    let routes = [];

    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            const path = middleware.route.path;
            if (path.startsWith(routePrincipale) && path !== routePrincipale) {
                routes.push(path);
            }
        }
    });

    return routes;
}
