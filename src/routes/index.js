import utils from './utils';
import {matchesConfig} from '../../config/matcher';
import express from 'express';

import {sampleConfig} from '../../config/sampleConfig';

const router = express.Router();

router.all('/*', function (req, res, next) {

  utils.log(req);

  const matches = matchesConfig(req, sampleConfig)
  console.log('is match? ', matches)

  next()
});

router.get('/*', function (req, res, next) {
  console.log('GET')
  res.json({response: 'GET!'});
});

router.post('/*', function (req, res, next) {
  console.log('POST')
  res.json({response: 'POST!'});
});


export default router;
