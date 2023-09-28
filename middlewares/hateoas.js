// Création de la table de hachage pour stocker les liens HATEOAS personnalisés de chaque route
const linksByRoute = new Map();

// Ajout des liens HATEOAS personnalisés pour chaque route
linksByRoute.set('/', [
  { href: '/', rel: 'self', method: 'GET', title: 'Liste des utilisateurs' },
]);
linksByRoute.set('/example', [
  { href: '/example', rel: 'self', method: 'DELETE', title: 'Détails d\'un utilisateur' },
]);
linksByRoute.set('/inscription', [
  { href: '/inscription', rel: 'create', method: 'POST', title: 'inscription pour un nouvelle utilisateur' },
]);
linksByRoute.set('/connexion', [
  { href: '/connexion', rel: '', method: 'POST', title: 'connexion pour un nouvelle utilisateur' },
]);
linksByRoute.set('/utilisateurs', [
  { href: '/utilisateurs', rel: 'read-to-BDD', method: 'GET', title: "Permet d'obtenir un JSON contenant tout mes utilisateurs avec toutes leurs informations" },
]);

linksByRoute.set('/exemple', [
  { href: '/exemple', rel: 'create', method: 'POST', title: 'Route de test' },
]);



export function getAllRoutes(req, res, next) {
  // Récupération des routes de l'application
  const routes = req.app._router.stack
    .filter((middleware) => middleware.route !== undefined)
    .map((middleware) => middleware.route.path);

  // Récupération de la route actuelle
  const currentRoute = req.originalUrl;

  // Création des liens HATEOAS personnalisés pour chaque route
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

  // Déplacement de la route actuelle en première position dans le tableau des liens HATEOAS
  if (currentIndex !== -1) {
    const currentLink = links.splice(currentIndex, 1)[0];
    links.unshift(currentLink);
  }

  req.routes = routes;
  req.links = links;
  next()
}