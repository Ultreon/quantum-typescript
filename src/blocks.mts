import Block$Properties from "quantumjs/game/block/Block$Properties.mjs";
import Block from "quantumjs/game/block/Block.mjs";
import Player from "quantumjs/game/entity/player/Player.mjs";
import Item from "quantumjs/game/item/Item.mjs";
import Registries from "quantumjs/game/registry/Registries.mjs";
import TextObject from "quantumjs/game/text/TextObject.mjs";
import RgbColor from "quantumjs/game/util/RgbColor.mjs";
import BlockPos from "quantumjs/game/world/BlockPos.mjs";
import UseResult from "quantumjs/game/world/UseResult.mjs";
import World from "quantumjs/game/world/World.mjs";
import { javaArray } from "quantumjs/util.mjs";
import { id } from "./index.mjs";
import { ModItems } from "./items.mjs";

export class CustomBlock extends Block {
    public use(argv_0: World, player: Player, argv_2: Item, argv_3: BlockPos): UseResult {
        player.sendMessage(TextObject.literal("Hello, world!").setColor(RgbColor.RED));
        return UseResult.ALLOW;
    }
}

export class ModBlocks {
    static init() {
        throw new Error("Method not implemented.");
    }
    static readonly EXAMPLE: Block = new Block(new Block$Properties()
        .dropsItems(javaArray([ModItems.EXAMPLE])));

    static readonly CUSTOM: Block = new CustomBlock();

    static function (): void {
        Registries.BLOCK.register(id("example"), ModBlocks.EXAMPLE);
        Registries.BLOCK.register(id("custom"), ModBlocks.CUSTOM);
    }
}
