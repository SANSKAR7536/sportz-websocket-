import mongoose from "mongoose";

/**
 * COMMENTARY SCHEMA
 */
const commentarySchema = new mongoose.Schema(
  {
    matchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
      required: true,
      index: true,
    },

    minute: {
      type: Number,
      required: true,
    },

    sequence: {
      type: Number,
      required: true,
    },

    period: {
      type: String,
    },

    eventType: {
      type: String,
    },

    actor: {
      type: String,
    },

    team: {
      type: String,
    },

    message: {
      type: String,
      required: true,
    },

    metadata: {
      type: mongoose.Schema.Types.Mixed,
    },

    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: false,
    },
  }
);

/**
 * INDEXES (CRITICAL)
 */
commentarySchema.index({ matchId: 1, minute: 1, sequence: 1 });
commentarySchema.index({ eventType: 1 });

/**
 * MODEL EXPORT
 */
export const Commentary = mongoose.model("Commentary", commentarySchema);