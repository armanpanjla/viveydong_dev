import express from 'express'
import {
    addAnimeToCollection,
    getAnimeByFolder,
    updateEpisode,
    getMyAnime
} from '../controllers/animeController.js';
import {createCollection} from '../controllers/collectionController.js'

const router = express.Router();

router.get('/create', createCollection);

router.get('/my-list', getMyAnime);

router.get('/folder/:folderId', getAnimeByFolder);

router.post('/add-to-collection', addAnimeToCollection);

router.patch('/update-ep/:id', updateEpisode);

export default router;