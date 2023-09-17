function objectDestruct(adminObj) {
  const { name, role } = adminObj;

  return [name, role];
}

module.exports = objectDestruct;
