export default function countOrder(party) {
let partySorted = party.toSorted( (a, b) => {
  if (a.health < b.health) {
    return 1;
  }
  if (a.health > b.health) {
    return -1;
  } 
}
);
return partySorted
}

