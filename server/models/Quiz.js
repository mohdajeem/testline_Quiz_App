// backend/models/Quiz.js
const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
  id: Number,
  description: String,
  question_id: Number,
  is_correct: Boolean,
  created_at: Date,
  updated_at: Date,
  unanswered: Boolean,
  photo_url: String,
});

const ReadingMaterialSchema = new mongoose.Schema({
  id: Number,
  keywords: [String],
  content: String,
  created_at: Date,
  updated_at: Date,
  content_sections: [String],
});

const QuestionSchema = new mongoose.Schema({
  id: Number,
  description: String,
  difficulty_level: String,
  topic: String,
  is_published: Boolean,
  created_at: Date,
  updated_at: Date,
  detailed_solution: String,
  type: String,
  is_mandatory: Boolean,
  show_in_feed: Boolean,
  pyq_label: String,
  topic_id: Number,
  reading_material_id: Number,
  fixed_at: Date,
  fix_summary: String,
  created_by: String,
  updated_by: String,
  quiz_level: String,
  question_from: String,
  language: String,
  photo_url: String,
  photo_solution_url: String,
  is_saved: Boolean,
  tag: String,
  options: [OptionSchema],
  reading_material: ReadingMaterialSchema,
});

const QuizSchema = new mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  description: String,
  difficulty_level: String,
  topic: String,
  time: Date,
  is_published: Boolean,
  created_at: Date,
  updated_at: Date,
  duration: Number,
  end_time: Date,
  negative_marks: String,
  correct_answer_marks: String,
  shuffle: Boolean,
  show_answers: Boolean,
  lock_solutions: Boolean,
  is_form: Boolean,
  show_mastery_option: Boolean,
  reading_material: String,
  quiz_type: String,
  is_custom: Boolean,
  banner_id: String,
  exam_id: String,
  show_unanswered: Boolean,
  ends_at: Date,
  lives: String,
  live_count: String,
  coin_count: Number,
  questions_count: Number,
  daily_date: String,
  max_mistake_count: Number,
  reading_materials: [String],
  questions: [QuestionSchema],
});

module.exports = mongoose.model('Quiz', QuizSchema);
