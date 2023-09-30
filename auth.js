export function isPlayerSelected(req, res, next) {
    if (req.session.playerNumber) {
        return next();
    } else {
        res.status(401).send('Veuillez choisir un numéro de joueur d\'abord.');
        res.send(`
          <form action="/choosePlayer" method="post">
              <label>
                  Choisissez votre numéro de joueur:
                  <select name="playerNumber">
                      <option value="1">Joueur 1</option>
                      <option value="2">Joueur 2</option>
                  </select>
              </label>
              <button type="submit">Valider</button>
          </form>
      `);
    }
}
