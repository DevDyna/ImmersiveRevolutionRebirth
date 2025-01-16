ServerEvents.recipes(IRRebirth => {
    IRRebirth.remove({ output: 'mekanism:ingot_osmium', type: 'minecraft:blasting'})
    IRRebirth.remove({ output: 'mekanism:ingot_osmium', type: 'minecraft:smelting'})
    IRRebirth.remove({ output: 'mekanism:ingot_tin', type: 'minecraft:blasting'})
    IRRebirth.remove({ output: 'mekanism:ingot_tin', type: 'minecraft:smelting'})
    IRRebirth.remove({output: 'ae2:certus_quartz_dust', type: 'mekanism:crushing'})
    IRRebirth.remove({ input: '#forge:ores/draconium', type: 'mekanism:enriching'})
    IRRebirth.remove({ input: 'create:crushed_raw_osmium'})
})