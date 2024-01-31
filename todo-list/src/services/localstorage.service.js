export const commitChanges = (SCHEMA, newDatabase) => {
    localStorage.setItem(SCHEMA, JSON.stringify(newDatabase));
    return loadAllData(SCHEMA);
}

export const loadAllData = (SCHEMA) => {
    const allData = localStorage.getItem(SCHEMA);
    return !allData ? [] : JSON.parse(allData);
}