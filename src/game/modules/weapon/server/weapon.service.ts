class _WeaponService {
  constructor() {
    console.log('Started weapon service');
  }

  giveWeapon(src: number, weaponName: string) {
    const weaponHash = GetHashKey(weaponName);

    GiveWeaponToPed(GetPlayerPed(src), weaponHash, 250, false, true);
  }
}

const WeaponService = new _WeaponService();

export default WeaponService;