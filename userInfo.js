const { formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(names, modifiedNames) {
  if (names.length !== modifiedNames.length) {
    throw new Error('Names and modified_names arrays must have the same length');
  }

  const userProfiles = [];

  for (let i = 0; i < names.length; i++) {
    const originalName = names[i];
    const modifiedName = modifiedNames[i];
    const id = i + 1;

    userProfiles.push({ originalName, modifiedName, id });
  }

  return userProfiles;
}

// // task3_test
// const names = ['John', 'Jane', 'Bob', 'Alice'];
// const numbers = [1, 2, 3, 4];
// const modifiedNames = formatArrayStrings(names, numbers);

// const userProfiles = createUserProfiles(names, modifiedNames);
// console.log(userProfiles);
