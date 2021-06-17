import { Player } from './player.class';

export class _PlayerService {
  private readonly PlayerMapSource: Map<number, Player>;
  private readonly PlayerMapIdentifier: Map<string, Player>;

  constructor() {
    this.PlayerMapSource = new Map<number, Player>();
    this.PlayerMapIdentifier = new Map<string, Player>();
  }

  addPlayerToMap(pSource: number, player: Player): void {
    this.PlayerMapSource.set(pSource, player);
    this.PlayerMapIdentifier.set(player.getIdentifier(), player);
  }

  createNewPlayer(src: number): void {
    const username = GetPlayerName(src.toString());

    const player = new Player({
      identifier: '3453434345',
      source: src,
      username,
    });

    this.addPlayerToMap(src, player);
  }

  getPlayerFromSource(pSource: number): Player | null {
    const player = this.PlayerMapSource.get(pSource);

    if (!player) return null;
    return player;
  }

  getPlayerFromIdentifier(pIdentifier: string): Player | null {
    const player = this.PlayerMapIdentifier.get(pIdentifier);

    if (!player) return null;
    return player;
  }
}

const PlayerService = new _PlayerService();

export default PlayerService;
