import mongoose from "mongoose";

/**
 * MATCH STATUS ENUM
 */
export const matchStatusEnum = ["scheduled", "live", "finished"];

/**
 * MATCH SCHEMA
 */
const matchSchema = new mongoose.Schema(
  {
    sport: {
      type: String,
      required: true,
      trim: true,
    },

    homeTeam: {
      type: String,
      required: true,
    },

    awayTeam: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: matchStatusEnum,
      default: "scheduled",
    },

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
    },

    homeScore: {
      type: Number,
      default: 0,
    },

    awayScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

/**
 * INDEXES
 */
matchSchema.index({ status: 1 }); // fast filtering (live matches)

/**
 * MODEL EXPORT
 */
export const Match = mongoose.model("Match", matchSchema);