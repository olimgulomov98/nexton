import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
  ProductShoeSize,
  ProductKidsSize,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productOrgPrice: number;
  productDisPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productShoeSize: ProductShoeSize;
  productKidsSize: ProductKidsSize;
  productDesc?: string;
  productImages: string[];
  productViews: number;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productOrgPrice: number;
  productDisPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productShoeSize?: ProductShoeSize;
  productKidsSize?: ProductKidsSize;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productOrgPrice?: number;
  productDisPrice?: number;
  productLeftCount?: number;
  productSize?: ProductSize;
  productShoeSize?: ProductShoeSize;
  productKidsSize?: ProductKidsSize;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
