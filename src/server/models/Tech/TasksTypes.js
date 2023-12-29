const mongoose = require("mongoose");

/**
 * Schema for defining task types.
 * @type {mongoose.Schema}
 */
const schema = new mongoose.Schema(
  {
    types: {
      type: [String],
      default: [],
    },
  },
  { collection: "task_types", versionKey: false }
);

const TaskTypes = mongoose.model("task_types", schema);

module.exports = TaskTypes;
