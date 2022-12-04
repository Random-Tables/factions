const index = require("./index.json");
const factions = require("./factions.json");

const utilityFactions = require("@random-tables/utility-factions");
const utilityNpcFantasy = require("@random-tables/utility-npc-fantasy");

module.exports = {
  ...index,
  tableData: {
    factions,
  },
  requirements: [utilityFactions, utilityNpcFantasy],
};
