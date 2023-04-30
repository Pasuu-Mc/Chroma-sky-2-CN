// priority: 100
onEvent("item.registry", (event) => {
    global.types.forEach((t,i) => {
        event.create("chromasky:" + t.toLowerCase() + "_chunk").displayName(global.typesTrans[i] + "碎块");
        event.create("chromasky:" + t.toLowerCase() + "_cluster").displayName(global.typesTrans[i] + "簇");
    });

    event.create("chromasky:cobalt_dust").displayName("钴粉");

    event.create("chromasky:compost").displayName("堆肥");
    event.create("chromasky:leaf").displayName("叶子");
    event.create("chromasky:plant_string").displayName("植物线");
    event.create("chromasky:pebble").displayName("鹅卵石");
    event.create("chromasky:flint_shard").displayName("燧石碎片");
    event.create("chromasky:magiccrystal").displayName("魔力水晶");
    event.create("chromasky:excitationcoil").displayName("激发线圈");
    event.create("chromasky:top_frame").displayName("头部机器框架");
    event.create("chromasky:bottom_frame").displayName("底部机器框架");
    event.create("chromasky:redstone_gear").displayName("红石齿轮");
    event.create("chromasky:treated_wood_gear").displayName("防腐齿轮");
    event.create("chromasky:ultimategear").displayName("最终齿轮");
    event.create("chromasky:ultimateplate").displayName("最终板");
    event.create("chromasky:ultimatebeer").displayName("最终啤酒").food(foodConsumer => {
      foodConsumer.hunger(20)
                  .saturation(5.0)
                  .eaten(eatenEvent => {
                    eatenEvent.player.tell("我最爱的啤酒!");
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",600,41,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:fire_resistance",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:water_breathing",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:glowing",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:absorption",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:nausea",5,1,false,false)
                  });
    });

    event.create("chromasky:ultimate_stew").displayName("最终炖菜").food(foodConsumer => {
      foodConsumer.hunger(60)
                  .saturation(20)
                  .eaten(eatenEvent => {
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:speed",600,2,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",2000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:fire_resistance",6000,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:water_breathing",6000,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:glowing",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:haste",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:night_vision",600,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:nausea",5,1,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:saturation",2000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",6000,4,false,false)
                  });
    });

    event.create("chromasky:ultimate_meat").displayName("最终肉").food(foodConsumer => {
      foodConsumer.hunger(60)
                  .saturation(20)
                  .eaten(eatenEvent => {
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:strength",6000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:health_boost",6000,3,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:saturation",2000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:regeneration",2000,4,false,false)
                    eatenEvent.getEntity().getPotionEffects().add("minecraft:resistance",2000,4,false,false)
                  });
    });
    event.create("chromasky:hammer_head").displayName("锤头");
    event.create("chromasky:wirecutter_head").displayName("剪线钳头");
    event.create("chromasky:mechanic_core_tier_1").displayName("机械核心1级");
    event.create("chromasky:mechanic_core_tier_2").displayName("机械核心2级");
    event.create("chromasky:mechanic_core_tier_3").displayName("机械核心3级");
    event.create("chromasky:mechanic_core_tier_4").displayName("机械核心4级");
    event.create("chromasky:draconium_gear").displayName("龙齿轮");
    event.create("chromasky:draconium_plate").displayName("龙板");
    event.create("chromasky:enderessence").displayName("末影本质");
    event.create("chromasky:ultimategem").displayName("最终宝石");
    event.create("chromasky:pattern_mundane_cast_star_shard").displayName("符文样板:平凡的星形碎片");
    event.create("chromasky:mundane_cast_star_shard").displayName("平凡的星形碎片");

    event.create("chromasky:shard_star").displayName("星形碎片");
    event.create("chromasky:magical_infuse_book").displayName("魔法注入书");

    event.create("chromasky:drop_of_darkness").displayName("黑暗之滴");
    event.create("chromasky:drop_of_peacefulless").displayName("光明之滴");
    event.create("chromasky:craft_prudentium_crystal").displayName("仪式:制作初级注魔水晶");
    event.create("chromasky:starmetal_gear").displayName("星辉齿轮");
});

onEvent('jei.information', event => {
  event.add('chromasky:drop_of_darkness', ['会在凋零骷髅上有几率掉落']);
  event.add('chromasky:drop_of_peacefulless', ['会在被动生物上有几率掉落']);
});

onEvent('item.modification', event => {
  event.modify('chromasky:coal_chunk', item => {
    item.burnTime = 100
  })
})

onEvent('item.modification', event => {
  event.modify('chromasky:coal_cluster', item => {
    item.burnTime = 800
  })
})

onEvent('item.modification', event => {
  event.modify('theabyss:node_shard', item => {
    item.maxStackSize = 64
  })
})
