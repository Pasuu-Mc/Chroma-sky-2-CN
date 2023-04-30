// priority: 1000
global.types = [
    "Iron",
    "Gold",
    "Diamond",
    "Lapis",
    "Quartz",
    "Redstone",
    "Emerald",
    "Copper",
    "Cobalt",
    "Lead",
    "Tin",
    "Silver",
    "Nickel",
    "Osmium",
    "Fluorite",
    "Uranium",
    "Aluminum",
    "Coal",
];

global.typesTrans = [
    "铁",
    "金",
    "钻石",
    "青金石",
    "石英",
    "红石",
    "绿宝石",
    "铜",
    "钴",
    "铅",
    "锡",
    "银",
    "镍",
    "锇",
    "氟石",
    "铀",
    "铝",
    "煤炭",
];

global.maxCompress = 3;
global.compressables = {
    stone: { original: "minecraft:stone", name: "石头", material: "rock" },
    cobblestone: { original: "minecraft:cobblestone", name: "圆石", material: "rock" },
    gravel: { original: "minecraft:gravel", name: "沙砾", tool: "shovel", material: "sand" },
    dirt: { original: "minecraft:dirt", name: "泥土", tool: "shovel", material: "earth" },
    sand: { original: "minecraft:sand", name: "沙子", tool: "shovel", material: "sand" },
    basalt: { original: "minecraft:basalt", name: "玄武岩", material: "rock" },
    netherrack: { original: "minecraft:netherrack", name: "下界岩", material: "rock" },
    endstone: { original: "minecraft:end_stone", name: "末地石", material: "rock" },
};
