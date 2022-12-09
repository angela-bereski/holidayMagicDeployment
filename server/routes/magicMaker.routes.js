const magicMakerController = require('../controllers/magicMaker.controller');

module.exports = app => {
    app.get('/api/magicMakers', magicMakerController.findAllMagicMakers);
    app.post('/api/createMagicMaker', magicMakerController.createNewMagicMaker);
    app.get('/api/magicMakers/:id', magicMakerController.findOneMagicMaker);
    app.put('/api/magicMakers/edit/:id', magicMakerController.updateExistingMagicMaker);
    app.delete('/api/magicMakers/:id', magicMakerController.deleteExistingMagicMaker);
}