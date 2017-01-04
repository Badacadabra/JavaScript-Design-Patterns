import { Home } from './homes';

// ==============================
// TEMPLATE METHOD
// ==============================

export default (construction: Home): string => { 
    return `Construction of a new home:
1. ${construction.foundations()}
2. ${construction.walls()}
3. ${construction.roof()}
`};
