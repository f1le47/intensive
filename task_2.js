const counter = {};

const copy1 = Object.assign({}, counter);

const copy2 = {...counter};

const copy3 = structuredClone(counter);

const copy4 = JSON.parse(JSON.stringify(counter));