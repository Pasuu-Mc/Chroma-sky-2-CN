onEvent("fluid.registry", (event) => {

    event
        .create("molten_cast_iron")
        .textureThick(0x5f687e)
        .bucketColor(0x5f687e)
        .displayName("熔融铸铁");

    event
        .create("molten_coke_brick")
        .textureThick(0x292929)
        .bucketColor(0x292929)
        .displayName("熔融焦炉砖");

    event
        .create("molten_blast_brick")
        .textureThick(0x311911)
        .bucketColor(0x311911)
        .displayName("熔融高炉砖");

    event
        .create("molten_nether_brick")
        .textureThick(0x3e2126)
        .bucketColor(0x3e2126)
        .displayName("熔融下界砖");

    event
        .create("cryotheum")
        .textureThick(0x0deaf7)
        .bucketColor(0x0deaf7)
        .displayName("熔融极寒之凛冰");
});
