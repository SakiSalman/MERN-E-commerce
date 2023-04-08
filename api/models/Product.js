import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
        trim : true
    },
    photo: {
      type: String,
      trim: true,
    },
    gallery: {
      type: Array,
      default: []
    },
    price: {
      type: Number,
      default: 0,
    },
    sale_price : {
        type : Number,
        default : 0
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
