import mongoose from "mongoose";
import DailyLogSchema from "../schemas/DailyLogSchema.js";

const DailyLog = mongoose.model("DailyLog", DailyLogSchema);

export default DailyLog;