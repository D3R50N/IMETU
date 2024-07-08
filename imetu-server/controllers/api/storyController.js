const Story = require("../../models/storyModel");

exports.index = async (req, res) => {
  try {
    const latestNumber=req.query.latest||await Story.countDocuments();
    const stories = await Story.find().sort({createdAt:-1}).limit(parseInt(latestNumber));
   return res.status(200).json(stories);
   
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.count = async (req, res) => {
  try {
    const count= (await Story.countDocuments());
    return res.status(200).json(count);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};


exports.create = async (req, res) => {
  try {
    if (req.body.story.trim().split(/\s/).length < 20) {
      return res.status(400).json({ error: "Please, tell us more about your first meet 😉" });
    }
    const story = new Story(req.body);

    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

exports.show = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    res.status(200).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

