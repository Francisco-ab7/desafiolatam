const findOneById = (id) => {
  if (id === 1) {
    return { id: 1, name: "John" };
  }
  return null;
};

describe("findOneById", () => {
  it("should return null if id is not found", () => {
    //toNull
    const id = 2;
    expect(findOneById(id)).toBeNull();
  });
  // toEqual
  it("should return the user with id 1", () => {
    const id = 1;
    const { id: idFound } = findOneById(id);
    expect(idFound).toBe(id);
  });
  //greater
  // it('Must be greater than', () => {
  //   const id = 3;
  //   expect(<3)toBeGreaterThan(id);
  // })
});
