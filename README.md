## gérer les variables d'environnement
la doc de dotenv : https://github.com/motdotla/dotenv#readme

## Explication de nos middlewares

### middleware hateos
HATEOAS retourne quand on fait un appel HTTPS sur Insomnia ou Postman :
{
	"routes": [
		"/route1",
		"/route2"
	],
	"links": [
		{
			"href": "/route1",
			"links": [
				{
					"href": "/route1",
					"rel": "self",
					"method": "GET",
					"title": "title de la route 1"
				}
			]
		},
		{
			"href": "/route2",
			"links": [
				{
					"href": "/route2",
					"rel": "self",
					"method": "DELETE",
					"title": "title de la route 2"
				}
			]
		}
	]
}

On reçoit en premier toutes les routes que comprend notre API, d'abord le lien de la route sur lequel on a lancé la requête HTTP, puis les autres routes de notre application. Plus bas, on a le détail de chaque route avec leurs links utilisés. Voir la prochaine section pour comprendre le contenu de nos links.

#### Pour ajouter un link dans une route
Aller dans le middleware HATEOAS et ajouter un lien dans la fonction 'linksByRoute' comme ceci :
linksByRoute.set('/myroute, [
    {href: '/myroute', rel: 'self', method: 'GET', title: 'myroute'},
]);

- href : l'url de la route
- rel : le nom de la route
- method : la méthode de la route (POST, GET, PUT, DELETE)
- title : le nom de la route