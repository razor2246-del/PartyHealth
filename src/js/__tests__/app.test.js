import healthCounter from "../app";

test("check heatlh", () => {
    let char1 = {name: 'Маг', health: 90}
    let char2 = {name: 'Мечник', health: 45}
    let char3 = {name: 'Лучник', health: 11}
    expect(healthCounter(char1)).toBe("healthy")
    expect(healthCounter(char2)).toBe("wounded")
    expect(healthCounter(char3)).toBe("critical")
})