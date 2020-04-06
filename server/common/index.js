module.exports.findRecordDate = timestamp => {
  const now = new Date(new Date(timestamp).toLocaleDateString());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return {today, tomorrow};
};
