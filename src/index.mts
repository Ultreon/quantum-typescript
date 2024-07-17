import Block from "quantumjs/game/block/Block.mjs";
import Block$Properties from "quantumjs/game/block/Block$Properties.mjs";
import Items from "quantumjs/game/item/Items.mjs";
import Item from "quantumjs/game/item/Item.mjs";
import BlockItem from "quantumjs/game/item/BlockItem.mjs";
import Item$Properties from "quantumjs/game/item/Item$Properties.mjs";
import Registries from "quantumjs/game/registry/Registries.mjs";
import Identifier from "quantumjs/game/util/Identifier.mjs";
import Supplier from "quantumjs/jutil/function/Supplier.mjs";
import Logger from "quantumjs/game/log/Logger.mjs";
import LoggerFactory from "quantumjs/game/log/LoggerFactory.mjs";
import {javaArray} from "quantumjs/util.mjs";

export const MOD_ID = "modid";

const logger: Logger = LoggerFactory.getLogger(MOD_ID);

export function id(path: string): Identifier {
    return new Identifier(MOD_ID, path);
}

export default function (): void {
    logger.warn("Hello, world!");

    const block: Block = new Block(new Block$Properties()
        .dropsItems(javaArray([Items.STONE], Item)));

    class MySupplier extends Supplier {
        get(...argv): any {
            return block;
        }
    }

    const item: Item = new Item(new Item$Properties());

    Registries.BLOCK.register(id("stone"), block);
    Registries.ITEM.register(id("stone"), item);
}

