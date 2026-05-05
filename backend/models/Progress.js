import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  completedConcepts: [{
    type: String // We will store the concept ID here (e.g. 'states_of_matter')
  }],
  quizScores: [{
    chapterId: String,
    score: Number,
    maxScore: Number,
    analysis: [{
      question: String,
      isCorrect: Boolean
    }],
    dateCompleted: {
      type: Date,
      default: Date.now
    }
  }],
  lastActive: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model('Progress', progressSchema);
