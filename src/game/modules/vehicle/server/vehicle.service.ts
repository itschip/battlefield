class _VehicleService {
  constructor() {
    console.log('Vehicle service started');
  }

  handleCreateVehicle(): number {
    // something else
  }

  handleSelectVehicle(src: number, vehicle: string) {
    // spawn a vehicle
    const veh = CreateVehicle(GetHashKey(vehicle), )
  }
}

const VehicleService = new _VehicleService();

export default VehicleService;