
import express from 'express';

const router = express.Router();

import logger from '../../lib/logger';


import templateValidation from './template-validation';
import templateController from './template-controller';



console.log("__dirname" + __dirname);

console.log("components==>Template==>index.js");
/* GET home page. */

router.get('/', templateValidation.getTemplate, templateController.getTemplate);





export default router;