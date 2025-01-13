ServerEvents.recipes(IRRebirth => {
    IRRebirth.remove({ output: '#create:crushed_raw_materials', type: 'create:crushing'})
    IRRebirth.recipes.create.crushing(['create:crushed_raw_nickel', Item.of('create:crushed_raw_nickel').withChance(0.50)], 'immersiveengineering:raw_nickel')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.50)], 'immersiveengineering:raw_silver')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_aluminum', Item.of('create:crushed_raw_aluminum').withChance(0.50)], 'immersiveengineering:raw_aluminum')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_uranium', Item.of('create:crushed_raw_uranium').withChance(0.50)], 'mekanism:raw_uranium')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_lead', Item.of('create:crushed_raw_lead').withChance(0.50)], 'mekanism:raw_lead')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_tin', Item.of('create:crushed_raw_tin').withChance(0.50)], 'mekanism:raw_tin')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_osmium', Item.of('create:crushed_raw_osmium').withChance(0.50)], 'mekanism:raw_osmium')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.50)], 'minecraft:raw_gold')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_copper', Item.of('create:crushed_raw_copper').withChance(0.50)], 'minecraft:raw_copper')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.50)], 'minecraft:raw_iron')
    IRRebirth.recipes.create.crushing(['create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.50)], 'create:raw_zinc')
    IRRebirth.recipes.create.crushing(['jaopca:mekanism_dirty_dusts.nickel', Item.of('jaopca:mekanism_dirty_dusts.nickel').withChance(0.50)], 'create:crushed_raw_nickel')
    IRRebirth.recipes.create.crushing(['jaopca:mekanism_dirty_dusts.silver', Item.of('jaopca:mekanism_dirty_dusts.silver').withChance(0.50)], 'create:crushed_raw_silver')
    IRRebirth.recipes.create.crushing(['jaopca:mekanism_dirty_dusts.aluminum', Item.of('jaopca:mekanism_dirty_dusts.aluminum').withChance(0.50)], 'create:crushed_raw_aluminum')
    IRRebirth.recipes.create.crushing(['mekanism:dirty_dust_uranium', Item.of('mekanism:dirty_dust_uranium').withChance(0.50)], 'create:crushed_raw_uranium')
    IRRebirth.recipes.create.crushing(['mekanism:dirty_dust_lead', Item.of('mekanism:dirty_dust_lead').withChance(0.50)], 'create:crushed_raw_lead')
    IRRebirth.recipes.create.crushing(['mekanism:dirty_dust_tin', Item.of('mekanism:dirty_dust_tin').withChance(0.50)], 'create:crushed_raw_tin')
    IRRebirth.recipes.create.crushing(['mekanism:dirty_dust_osmium', Item.of('mekanism:dirty_dust_osmium').withChance(0.50)], 'create:crushed_raw_osmium')
    IRRebirth.recipes.create.crushing(['mekanism:dirty_dust_gold', Item.of('mekanism:dirty_dust_gold').withChance(0.50)], 'create:crushed_raw_gold')
    IRRebirth.recipes.create.crushing(['mekanism:dirty_dust_copper', Item.of('mekanism:dirty_dust_copper').withChance(0.50)], 'create:crushed_raw_copper')
    IRRebirth.recipes.create.crushing(['mekanism:dirty_dust_iron', Item.of('mekanism:dirty_dust_iron').withChance(0.50)], 'create:crushed_raw_iron')
    IRRebirth.recipes.create.crushing(['jaopca:mekanism_dirty_dusts.zinc', Item.of('jaopca:mekanism_dirty_dusts.zinc').withChance(0.50)], 'create:crushed_raw_zinc')
    IRRebirth.recipes.create.crushing(['mekanism:dust_coal', Item.of('mekanism:dust_sulfur').withChance(0.25)], '#minecraft:coals')
    IRRebirth.remove({type: "create:crushing"})
    IRRebirth.recipes.create.crushing(['create:cinder_flour', Item.of('create:cinder_flour').withChance(0.50)], '#forge:netherrack')
    })