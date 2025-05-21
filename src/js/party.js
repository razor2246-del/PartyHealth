export default function countOrder(party) {
party.sort(function (a, b) {
  if (a.health < b.health) {
    return 1;
  }
  if (a.health > b.health) {
    return -1;
  } 
}
);
return party
}

