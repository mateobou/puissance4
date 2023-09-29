// Création de la table de hachage pour stocker les liens HATEOAS personnalisés de chaque route
const linksByRoute = new Map();

// Ajout des liens HATEOAS personnalisés pour chaque route
linksByRoute.set('/api/v0/', [
  { href: '/api/v0/', rel: 'self', method: 'GET', title: 'home + hateoas (ensemble des routes)' },
]);
linksByRoute.set('/api/v0/entrainement', [
  { href: '/api/v0/entrainement', rel: 'self', method: 'DELETE', title: 'page entrainement en get noatamment pour i18n' },
]);
linksByRoute.set('/api/v0/inscription', [
  { href: '/api/v0/inscription', rel: 'create', method: 'POST', title: 'inscription pour un nouvelle utilisateur' },
]);
linksByRoute.set('/api/v0/connexion', [
  { href: '/api/v0/connexion', rel: '', method: 'POST', title: 'connexion pour un nouvelle utilisateur' },
]);
linksByRoute.set('/api/v0/utilisateurs', [
  { href: '/api/v0/utilisateurs', rel: 'read-to-BDD', method: 'GET', title: "Permet d'obtenir un JSON contenant tout mes utilisateurs avec toutes leurs informations" },
]);


// remplir tableau par route api ci besoin
const MesRoutesPrinc = [
  '/api/v0/inscription',
]


const croisement = () => {
    const mesRoutes = [...MesRoutesPrinc];

    mesRoutes.push('/api/v0/connexion')
    mesRoutes.push('/api/v0/utilisateurs')
    mesRoutes.push('/api/v0/entrainement')



  return mesRoutes;
}


export function getAllRoutes(req, res, next) {
  // Récupération des routes de l'application
  const routes = req.app._router.stack
      .filter((middleware) => middleware.route !== undefined)
      .map((middleware) => middleware.route.path);

  // Récupération de la route actuelle
  const currentRoute = req.originalUrl;

  const Routes = croisement();

  // Création des liens HATEOAS personnalisés pour chaque route, y compris les liens de croisement
  const links = routes.map((route) => {
    const link = {
      href: route,
    };

    // Ajout du lien HATEOAS personnalisé correspondant à la route
    if (linksByRoute.has(route)) {
      link.links = linksByRoute.get(route);
    }

    return link;
  });

  // Enlever la route courante de la liste de toutes les routes
  const index = routes.indexOf(currentRoute);
  if (index > -1) {
    routes.splice(index, 1);
  }
  // Ajouter la route courante en premier dans la liste
  routes.unshift(currentRoute);


  // Recherche de la position de la route actuelle dans le tableau des liens HATEOAS
  const currentIndex = links.findIndex(link => link.href === currentRoute);

  //////////////////addddddddd
  /*
  // Création des liens HATEOAS personnalisés pour route de versionning
  for (const route of Routes) {
    if (linksByRoute.has(route)) {
      const versionLinks = linksByRoute.get(route);
      // Ajoutez les liens de version à la route actuelle
      if (currentRoute === route) {
        links.push(...versionLinks);
      }
    }
  }
*/


  // Déplacement de la route actuelle en première position dans le tableau des liens HATEOAS
  if (currentIndex !== -1) {
    const currentLink = links.splice(currentIndex, 1)[0];
    links.unshift(currentLink);
  }

  // Ajouter toutes les définitions de liens stockées dans linksByRoute
  for (const [, linkDefinitions] of linksByRoute) {
    links.push(...linkDefinitions);
  }

  req.routes = Routes.concat(routes);
  req.links = links;
  next();
}