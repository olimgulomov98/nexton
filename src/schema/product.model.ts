import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  ProductShoeSize,
  ProductSize,
  ProductStatus,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
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

    productPrice: {
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
      default: ProductSize.S,
    },

    productShoeSize: {
      type: String,
      enum: ProductShoeSize,
      default: ProductShoeSize.FORTY,
    },

    productDesc: {
      type: String,
      required: true,
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

productSchema.index(
  { productName: 1, productSize: 1, productShoeSize: 1 },
  { unique: true }
);
export default mongoose.model("Product", productSchema);
