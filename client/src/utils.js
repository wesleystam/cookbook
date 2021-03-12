export const inGroupsOf = (array, number) => {
  let groupsArray = [];

  for (let i = 0; i < array.length / number; i++) {
    groupsArray[i] = [];
  }
  array.forEach((item, i) => {
    groupsArray[parseInt(i / number)] = [
      ...groupsArray[parseInt(i / number)],
      item,
    ];
  });

  return groupsArray;
};
