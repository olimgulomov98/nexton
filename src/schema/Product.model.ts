import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  ProductKidsSize,
  ProductShoeSize,
  ProductSize,
  ProductStatus,
} from "../libs/enums/product.enum";

const ProductSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productOrgPrice: {
      type: Number,
      required: true,
    },

    productDisPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.SMALL,
    },

    productShoeSize: {
      type: Number,
      enum: ProductShoeSize,
      default: ProductShoeSize.THIRTY_EIGHT,
    },

    productKidsSize: {
      type: String,
      enum: ProductKidsSize,
      default: ProductKidsSize.ONE_TWO,
    },

    productDesc: {
      type: String,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // updatedAt, createdAt
);

ProductSchema.index(
  { productName: 1, productSize: 1, productShoeSize: 1, productKidsSize: 1 },
  { unique: true }
);
export default mongoose.model("Product", ProductSchema);
