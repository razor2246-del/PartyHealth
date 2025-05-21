import countOrder from "../party";

test("check order of heatlh", () => {
    let party = [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ]
    let expection = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]

    expect(countOrder(party)).toEqual(expection)
    expect(countOrder(party)).not.toBe(expection)
})