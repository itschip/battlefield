/*
I guess we need some sort of getting the coord for each zone,
then we check what zone is selected, get the coord, as a obj property, and then spawn the player
on that position.
*/

// not even sure if this needs to be a event on the client side. We can just do it all server side.
onNet('deployPlayer', () => {
  const [x, y, z] = GetEntityCoords(PlayerPedId());

  SetEntityCoords(PlayerPedId(), x, y, z, false, false, false, false);
})