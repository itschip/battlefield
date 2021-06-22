import DeployService from './deploy.service';

onNet('spawnOnZone', (coords: number[]) => {
  const _source = global.source;

  DeployService.deployPlayer(_source, coords);
})