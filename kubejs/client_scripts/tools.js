// priority: 0
onEvent("item.tooltip", (event) => {
    event.add(/minecraft:(wooden|stone|iron|golden|diamond|netherite)_(sword|shovel|(pick)?axe)/, [
        Text.red("此物品仅供手工制作!"),
    ]);
    event.add(/immersiveengineering:(steel)_(sword|shovel|(pick)?axe|hoe)/, [
        Text.red("此物品仅供手工制作!"),
    ]);
    event.add(/projectred-exploration:(ruby|peridot|sapphire)_(sickle|sword|(pick)?axe|hoe|shovel)/, [
        Text.red("此物品仅供手工制作!"),
    ]);
    event.add(/mekanismtools:(bronze|lapis_lazuli|osmium|steel)_(sword|(pick)?axe|hoe|shovel|paxel)/, [
        Text.red("此物品仅供手工制作!"),
    ]);
    event.add(/mekanismtools:(wood|stone|iron|diamond|gold|netherite)_(paxel)/, [
        Text.red("此物品仅供手工制作!"),
    ]);
    event.add(/cyclic:(emerald|sandstone|netherbrick)_(sword|(pick)?axe|hoe|shovel)/, [
        Text.red("此物品仅供手工制作!"),
    ]);

    event.add(/miniutilities:experience_pearl*/, [
        Text.red("当你用经验收割者附魔杀死一群生物时，会获得经验珍珠."),
    ]);

    event.add(/^losttrinkets:(?!treasure_bag).+$/, [Text.green("右键单击学习!")]);

    event.add("miniutilities:cursed_earth", [Text.green("滋生敌对生物")]);
    event.add("miniutilities:blessed_earth", [Text.green("滋生被动生物")]);
    event.add("miniutilities:blursed_earth", [Text.green("滋生所有生物")]);
});
