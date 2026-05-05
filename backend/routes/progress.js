import express from 'express';
import Progress from '../models/Progress.js';
import { protect } from './auth.js';

const router = express.Router();

// Apply auth middleware to all progress routes
router.use(protect);

// Get user's progress
router.get('/', async (req, res) => {
  try {
    let progress = await Progress.findOne({ userId: req.user.id });
    if (!progress) {
      // Fallback in case it wasn't created during registration
      progress = new Progress({ userId: req.user.id });
      await progress.save();
    }
    res.json(progress);
  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark concept as completed
router.post('/concept', async (req, res) => {
  try {
    const { conceptId } = req.body;
    if (!conceptId) return res.status(400).json({ message: 'Concept ID required' });

    const progress = await Progress.findOneAndUpdate(
      { userId: req.user.id },
      { 
        $addToSet: { completedConcepts: conceptId },
        lastActive: Date.now()
      },
      { new: true, upsert: true }
    );

    res.json(progress);
  } catch (error) {
    console.error('Update concept error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Save quiz score
router.post('/quiz', async (req, res) => {
  try {
    const { chapterId, score, maxScore, analysis } = req.body;
    if (!chapterId || score === undefined || maxScore === undefined) {
      return res.status(400).json({ message: 'Missing required quiz data' });
    }

    const progress = await Progress.findOne({ userId: req.user.id });
    if (!progress) return res.status(404).json({ message: 'Progress not found' });

    // Check if they already took this quiz and got a lower score.
    // If we want to keep all attempts, we just push. Let's just push for now.
    progress.quizScores.push({
      chapterId,
      score,
      maxScore,
      analysis, // Store question-level results
      dateCompleted: new Date()
    });
    progress.lastActive = Date.now();
    await progress.save();

    res.json(progress);
  } catch (error) {
    console.error('Update quiz score error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export const progressRoutes = router;
