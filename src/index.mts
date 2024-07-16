import Block from "quantumjs/game/block/Block.mjs";
import Block$Properties from "quantumjs/game/block/Block$Properties.mjs";
import Items from "quantumjs/game/item/Items.mjs";
import BlockItem from "quantumjs/game/item/BlockItem.mjs";
import Item$Properties from "quantumjs/game/item/Item$Properties.mjs";
import Registries from "quantumjs/game/registry/Registries.mjs";
import Identifier from "quantumjs/game/util/Identifier.mjs";
import Supplier from "quantumjs/jutil/function/Supplier.mjs";

export const MOD_ID = "modid";

export function id(path: string): Identifier {
    return new Identifier(MOD_ID, path);
}

export default function (): void {
    const block: Block = new Block(new Block$Properties()
        .dropsItems([Items.STONE]));

    class MySupplier extends Supplier {
        get(...argv): any {
            return block;
        }
    }

    const item: BlockItem = new BlockItem(new Item$Properties()
        .stackSize(64), new MySupplier());

    Registries.BLOCK.register(id("stone"), block);
    Registries.ITEM.register(id("stone"), item);
}

