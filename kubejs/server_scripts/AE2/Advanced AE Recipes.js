ServerEvents.recipes(IRRebirth => {
   IRRebirth.custom({
      "type": "advanced_ae:reaction",
      "energy": 1000000,
      "fluid": {
        "fluidStack": {
          "Amount": 1000,
          "FluidName": "advanced_ae:quantum_infusion_source"
        }
      },
      "input_items": [
        {
          "amount": 8,
          "ingredient": {
            "item": "advanced_ae:quantum_alloy"
          }
        },
        {
            "amount": 4,
            "ingredient": {
              "item": "megacells:sky_steel_ingot"
            }
          },
        {
          "amount": 2,
          "ingredient": {
            "item": "minecraft:netherite_ingot"
          }
        },
        {
          "amount": 1,
          "ingredient": {
            "item": "minecraft:nether_star"
          }
        }
      ],
      "output": {
        "#": 1,
        "#c": "ae2:i",
        "id": "advanced_ae:quantum_alloy_plate"
      }
    }).id('advanced_ae:quantum_alloy_plate')
})