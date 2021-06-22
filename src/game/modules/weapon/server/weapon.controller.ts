import WeaponService from './weapon.service';

RegisterCommand('giveweapon', (src: number, args: string[], raw: string) => {
  WeaponService.giveWeapon(src, args[0])
}, false);