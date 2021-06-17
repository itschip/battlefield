import { PlayerMapProps } from './player.interface';

export class Player {
  private readonly source: number;
  private _identifier: string;
  private _username: string;

  constructor({ source, identifier, username }: PlayerMapProps) {
    this.source = source;
    this._identifier = identifier;
    this._username = username;
  }

  getIdentifier(): string {
    return this._identifier;
  }

  getSource(): number {
    return this.source;
  }

  getUsername(): string {
    return this._username;
  }

  async getLevel(identifier: string): Promise<number> {
    return 4;
  }

  async getLevelXp(identifier: string): Promise<number> {
    return 4.5;
  }

  async getWeapons(identifier: string): Promise<any[]> {
    return [
      {
        id: 1,
        name: 'Combat Pistol',
        attachments: [
          {
            id: 1,
            name: 'Red dot',
          },
        ],
      },
    ];
  }
}
