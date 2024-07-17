import Block from "quantumjs/game/block/Block.mjs";
import BlockItem from "quantumjs/game/item/BlockItem.mjs";
import Item$Properties from "quantumjs/game/item/Item$Properties.mjs";
import Supplier from "quantumjs/jutil/function/Supplier.mjs";
import { ModBlocks } from "./blocks.mjs";

export class ModItems {
    static init() {
        throw new Error("Method not implemented.");
    }
    public static readonly EXAMPLE: BlockItem = new BlockItem(new Item$Properties(), new (class extends Supplier {
        get(): Block {
            return ModBlocks.EXAMPLE;
        }
    })());
}