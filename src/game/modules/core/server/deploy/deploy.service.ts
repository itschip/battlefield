class _DeployService {
  deployPlayer(src: number, flagCoord: number[]) {
    SetEntityCoords(GetPlayerPed(src), flagCoord[0], flagCoord[1], flagCoord[2], false, false, false, false);
  }
}

const DeployService = new _DeployService();

export default DeployService;