import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, ChevronRight } from 'lucide-react';

const LearningRoadmap = () => {
  const [activeTrack, setActiveTrack] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-US', { 
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }));
  }, []);

  const tracks = [
    {
      id: 'cpp',
      title: 'C++ & DSA Track',
      icon: '🖥️',
      color: 'blue',
      currentTask: 'OOPs + STL Basics',
      details: [
        { phase: 'Dec 15-31, 2024', title: 'OOPs + STL Basics', tasks: ['Classes & Objects', 'Inheritance & Polymorphism', 'STL Containers & Algorithms'] },
        { phase: 'Jan 1-14, 2025', title: 'DSA Foundations', tasks: ['Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Basic Problem Solving'] },
        { phase: 'Jan 15-31, 2025', title: 'Intermediate DSA', tasks: ['Recursion & Backtracking', 'Binary Trees & BST', 'Sorting & Searching'] },
        { phase: 'Feb-Apr, 2025', title: 'Advanced DSA', tasks: ['Graph Algorithms', 'Dynamic Programming', 'Heaps & Tries', 'Advanced Problem Solving'] }
      ]
    },
    {
      id: 'ml',
      title: 'Python & ML Track',
      icon: '🧠',
      color: 'green',
      currentTask: 'Python Foundations',
      details: [
        { phase: 'Dec 15-31, 2024', title: 'Python & Data Tools', tasks: ['Python Core Concepts', 'NumPy & Pandas', 'Data Visualization', 'Statistical Analysis'] },
        { phase: 'Jan 1-14, 2025', title: 'ML Foundations', tasks: ['Linear/Logistic Regression', 'Data Preprocessing', 'Model Evaluation', 'Feature Engineering'] },
        { phase: 'Jan 15-Feb 15, 2025', title: 'Deep Learning', tasks: ['Neural Networks', 'CNNs', 'Computer Vision Projects', 'Model Optimization'] },
        { phase: 'Feb-Apr, 2025', title: 'Advanced ML', tasks: ['NLP Fundamentals', 'Transformer Models', 'GANs', 'Production ML'] }
      ]
    },
    {
      id: 'web',
      title: 'Web Dev & DevOps Track',
      icon: '🌐',
      color: 'purple',
      currentTask: 'Frontend Basics',
      details: [
        { phase: 'Dec 15-31, 2024', title: 'Frontend Essentials', tasks: ['HTML5 Semantics', 'CSS3 & Flexbox', 'JavaScript ES6+', 'Responsive Design'] },
        { phase: 'Jan 1-31, 2025', title: 'React Development', tasks: ['React Fundamentals', 'Hooks & State', 'React Router', 'Redux Basics'] },
        { phase: 'Feb-Mar, 2025', title: 'Backend Development', tasks: ['Node.js/Express', 'RESTful APIs', 'Database Design', 'Authentication'] },
        { phase: 'Mar-Apr, 2025', title: 'DevOps Skills', tasks: ['Docker Containers', 'CI/CD Pipelines', 'Cloud Services', 'Monitoring'] }
      ]
    },
    {
      id: 'placement',
      title: 'Placement Preparation Track',
      icon: '🎯',
      color: 'yellow',
      currentTask: 'Interview Preparation',
      details: [
        { phase: 'May 1-7, 2025', title: 'DSA Review', tasks: ['LeetCode Problem Solving', 'Pattern Recognition', 'Time Complexity Analysis', 'Mock Coding Tests'] },
        { phase: 'May 8-14, 2025', title: 'System Design', tasks: ['System Design Fundamentals', 'Scalability Concepts', 'Design Patterns', 'Case Studies'] },
        { phase: 'May 15-21, 2025', title: 'CS Fundamentals', tasks: ['Operating Systems', 'Computer Networks', 'DBMS Concepts', 'OOP Principles'] },
        { phase: 'May 22-31, 2025', title: 'Interview Skills', tasks: ['Resume Building', 'Mock Interviews', 'Behavioral Questions', 'Salary Negotiation'] }
      ]
    }
  ];

  const getTodaysTasks = () => {
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US'); // Gets the date in 'MM/DD/YYYY' format
    
    const startDate = new Date('2024-12-15');

    // If today is before Dec 15, 2024
    if (today < startDate) {
        return ["Prepare for your first tasks starting on Dec 15!"];
    }

    // Dec 15-31, 2024 - C++ & Python Basics
    else if (dateString >= '12/15/2024' && dateString <= '12/31/2024') {
      return [
        "Learn OOP Concepts (Classes, Objects, Inheritance)",
        "Complete Python basics exercises (Variables, Data Types)",
        "Build Portfolio Website (HTML, CSS Basics)"
      ];
    }
  
    // Jan 1-14, 2025 - DSA Basics, ML Foundations, React Basics
    else if (dateString >= '01/01/2025' && dateString <= '01/14/2025') {
      return [
        "Solve 3 DSA problems (Arrays, Linked Lists)",
        "Complete ML linear regression tutorial",
        "Learn React basics (Components, State)"
      ];
    }
  
    // Jan 15-31, 2025 - Intermediate DSA, Deep Learning
    else if (dateString >= '01/15/2025' && dateString <= '01/31/2025') {
      return [
        "Learn Recursion & Backtracking",
        "Practice Deep Learning (Neural Networks)",
        "Build a simple React app with hooks"
      ];
    }
  
    // Feb-Apr, 2025 - Advanced DSA, Advanced ML, DevOps
    else if (dateString >= '02/01/2025' && dateString <= '04/30/2025') {
      return [
        "Solve Graph and DP problems (Advanced DSA)",
        "Complete NLP tutorials (Advanced ML)",
        "Learn Docker and CI/CD basics (DevOps)"
      ];
    }
  
    // May 2025 - Placement Preparation
    else if (dateString >= '05/01/2025' && dateString <= '05/31/2025') {
      return [
        "Review DSA problems on LeetCode",
        "Prepare for system design interviews",
        "Mock interviews and resume building"
      ];
    }
  
    // Default tasks for other dates
    else {
      return [
        "Review OOP Concepts (2 hours)",
        "Complete Python NumPy Exercise",
        "Build Portfolio Website Header",
        "Solve 2 LeetCode Problems"
      ];
    }
  };
  

  const deadlines = [
    { date: 'December 31, 2024', task: 'Complete Foundation Phase' },
    { date: 'January 14, 2025', task: 'DSA Basics Mastery' },
    { date: 'February 15, 2025', task: 'Deep Learning Completion' },
    { date: 'April 30, 2025', task: 'All Tracks Completion' },
    { date: 'May 31, 2025', task: 'Placement Preparation' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="flex">
        {/* Main Content - Left Side */}
        <div className="w-3/4 p-8">
          <h1 className="text-4xl font-bold mb-12 text-blue-400">Tech Skills Mastery Roadmap</h1>
          
          <div className="space-y-6">
            {tracks.map((track) => (
              <div key={track.id} className="bg-gray-800 rounded-xl overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-700 transition-colors"
                  onClick={() => setActiveTrack(activeTrack === track.id ? null : track.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{track.icon}</span>
                      <div>
                        <h2 className="text-xl font-bold">{track.title}</h2>
                        <p className="text-gray-400 text-sm">Current: {track.currentTask}</p>
                      </div>
                    </div>
                    {activeTrack === track.id ? 
                      <ChevronDown className="w-5 h-5" /> : 
                      <ChevronRight className="w-5 h-5" />
                    }
                  </div>
                </div>
                
                {activeTrack === track.id && (
                  <div className="border-t border-gray-700 p-6 bg-gray-800">
                    <div className="grid gap-6">
                      {track.details.map((detail, index) => (
                        <div key={index} className="border-l-2 border-blue-500 pl-4">
                          <h3 className="font-bold text-gray-300">{detail.phase}</h3>
                          <h4 className="text-blue-400 mt-1 mb-2">{detail.title}</h4>
                          <ul className="space-y-1">
                            {detail.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="text-gray-400 text-sm flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="w-1/4 p-8">
          {/* Sticky Note */}
          <div className="sticky top-8">
            <div className="bg-yellow-400 p-4 rounded-lg shadow-lg transform rotate-2 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Calendar size={20} className="text-gray-800 mr-2" />
                  <h3 className="text-gray-800 font-bold">{currentDate}</h3>
                </div>
              </div>
              <div className="space-y-2">
                {getTodaysTasks().map((task, index) => (
                  <div key={index} className="flex items-start text-gray-800">
                    <span className="mr-2 mt-1">•</span>
                    <span className="text-sm">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deadlines Box */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Key Deadlines</h3>
              <div className="space-y-4">
                {deadlines.map((deadline, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <p className="text-sm text-gray-400">{deadline.date}</p>
                    <p className="text-gray-300">{deadline.task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningRoadmap;