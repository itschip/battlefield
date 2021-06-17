import PlayerService from './player.service';

on('playerJoining', () => {
  const _source = global.source;

  PlayerService.createNewPlayer(_source);
});

on('playerDropped', () => {
  const _source = global.source;

  PlayerService.unloadPlayer(_source);
});
