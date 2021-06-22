// So when we do the buy a vehicle, we can just spawn it server side or so, and yeah...idk really

import { VehicleEvents } from '../../types/events';
import VehicleService from './vehicle.service';

onNet(VehicleEvents.SELECT_VEHICLE, (vehicle: string) => {
  const _source = global.source;
  VehicleService.handleSelectVehicle(_source, vehicle)
})