const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  heroImage: {
    type: String, // URL to the hero image
  },
  educationBackground: [
    {
      institution: String,
      degree: String,
      startDate: Date,
      endDate: Date,
      grade: String,
      current: Boolean,
      fieldOfStudy: String,
    }
  ],
  jobExperiences: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
      current: Boolean,
      responsibilities: String,
    }
  ],
  programmingLanguages: [
    {
      name: String,
      proficiency: Number, // e.g., Beginner, Intermediate, Expert
    }
  ],
  frameworkSkills: [
    {
      name: String,
      proficiency: Number,
    }
  ],
  completedProjects: [
    {
      title: String,
      description: String,
      githubLink: String,
      technologiesUsed: [String],
      dateCompleted: Date,
    }
  ],
  totalExperience: {
    type: String, // Total experience in years
    default: "0",
  },
  interests: [
    {
      icon: String,
      label: String,
    }
  ], // Array of strings to list interests
  specializations: [
    {
      icon: String,
      title: String,
      description: String,
    }
  ],
  clientReviews: [
    {
      clientName: String,
      review: String,
      rating: Number, // Rating out of 5
      date: Date,
    }
  ],
  socialMediaLinks: {
    facebook: String,
    twitter: String,
    linkedin: String,
    github: String,
    portfolio: String,
  },
  cvDriveLink: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
