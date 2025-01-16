ServerEvents.recipes(IRRebirth => {

  IRRebirth.replaceInput(
    { output: 'create:copper_backtank' },
    'minecraft:copper_ingot',
    '#forge:plates/copper'
  )
  IRRebirth.replaceInput(
    { output: 'create:copper_backtank' },
    'create:andesite_alloy',
    '#forge:plates/andesite_alloy'
  )
  IRRebirth.replaceInput(
    { output: 'create:copper_backtank' },
    'minecraft:copper_block',
    'create_sa:hydraulic_engine'
  )
  IRRebirth.replaceInput(
    { input: 'createaddition:connector' },
    'createaddition:connector',
    'immersiveengineering:connector_lv'
  )
  IRRebirth.replaceInput(
    { input: 'createaddition:copper_spool' },
    'createaddition:copper_spool',
    'immersiveengineering:wirecoil_copper'
  )
  IRRebirth.replaceInput(
    { input: 'createaddition:gold_wire' },
    'createaddition:gold_wire',
    'immersiveengineering:wire_electrum'
  )
  IRRebirth.replaceInput(
    { output: 'create:schematic_table' },
    '#minecraft:wooden_slabs',
    '#forge:treated_wood_slab'
  )
  IRRebirth.replaceInput(
    { output: 'create:schematicannon' },
    '#minecraft:logs',
    '#forge:treated_wood'
  )
})