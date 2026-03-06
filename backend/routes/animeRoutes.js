import express from 'express'
import {
    addAnimeToCollection,
    getAnimeByFolder,
    updateEpisode,
    getMyAnime,
    deleteAnime
} from '../controllers/animeController.js';
import {
    createCollection
} from '../controllers/collectionController.js'

const router = express.Router();

router.get('/create', createCollection);
router.post('/add-to-collection', addAnimeToCollection);


router.get('/my-list', getMyAnime);
router.get('/folder/:folderId', getAnimeByFolder);


router.patch('/update-ep/:id', updateEpisode);
router.delete('/delete-anime/:id', deleteAnime);

export default router;