import React, { useState } from 'react'
import { Heart, HeartCrack, HeartHandshake, HeartOff } from 'lucide-react'

function App() {
  const [showLesson, setShowLesson] = useState(false)

  const loveLesson = [
    "Love is patient and kind",
    "True love means accepting each other's flaws",
    "Every relationship needs trust and understanding",
    "Sometimes we hurt the ones we love most",
    "Forgiveness is the key to healing"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex justify-center space-x-4">
            <Heart className="text-red-500 w-8 h-8 animate-pulse" />
            <HeartCrack className="text-red-400 w-8 h-8" />
            <HeartHandshake className="text-red-500 w-8 h-8" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            To My Blunder Queen
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            I'm deeply sorry for hurting you. My actions were thoughtless, and you deserve better. 
            You mean the world to me, and I promise to do better.
          </p>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <p className="text-lg text-gray-600 italic">
              "Sometimes the heart sees what is invisible to the eye."
            </p>
            <p className="mt-2 text-gray-500">- H. Jackson Brown Jr.</p>
          </div>

          {!showLesson ? (
            <button
              onClick={() => setShowLesson(true)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform transition hover:scale-105"
            >
              Forgive Me ❤️
            </button>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-semibold text-gray-800">Love's Lessons</h2>
              <ul className="space-y-4">
                {loveLesson.map((lesson, index) => (
                  <li 
                    key={index}
                    className="bg-white/90 p-4 rounded-lg shadow-md text-gray-700"
                  >
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App