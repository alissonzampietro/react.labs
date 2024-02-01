export const commitChanges = <Type>(SCHEMA: string, newDatabase: Type): Type => {
    localStorage.setItem(SCHEMA, JSON.stringify(newDatabase));
    return loadAllData(SCHEMA);
}

export const loadAllData = <Type>(SCHEMA: string): Type => {
    const allData = localStorage.getItem(SCHEMA);
    return !allData ? [] : JSON.parse(allData);
}