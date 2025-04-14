import React, { useState, useEffect } from 'react';
import { Globe2, ChevronDown, ArrowRight, Users, Star, Sparkles, Gift, Shield } from 'lucide-react';

// Language options
const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'es', name: 'Español' }
];

// Questions data structure with translations
const questions = {
  en: [
    "What's your biggest dream in life?",
    "If you could travel anywhere right now, where would you go?",
    "What's the best advice you've ever received?",
    // Add more questions...
  ],
  zh: [
    "你人生最大的梦想是什么？",
    "如果现在可以去任何地方旅行，你会去哪里？",
    "你收到过最好的建议是什么？",
    // Add more questions...
  ],
  ja: [
    "人生の最大の夢は何ですか？",
    "今すぐどこへでも旅行できるとしたら、どこへ行きますか？",
    "今まで受けた中で最高のアドバイスは何ですか？",
    // Add more questions...
  ],
  ko: [
    "당신의 가장 큰 꿈은 무엇입니까?",
    "지금 당장 어디든 여행할 수 있다면 어디로 가시겠습니까?",
    "지금까지 받은 최고의 조언은 무엇입니까?",
    // Add more questions...
  ],
  es: [
    "¿Cuál es tu mayor sueño en la vida?",
    "Si pudieras viajar a cualquier lugar ahora mismo, ¿a dónde irías?",
    "¿Cuál es el mejor consejo que has recibido?",
    // Add more questions...
  ]
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    generateNewQuestion();
  }, [currentLang]);

  const generateNewQuestion = () => {
    const questionsList = questions[currentLang];
    const randomIndex = Math.floor(Math.random() * questionsList.length);
    setCurrentQuestion(questionsList[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-xl font-semibold">RandomQuestion</span>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
            >
              <Globe2 className="h-5 w-5" />
              <span>{languages.find(l => l.code === currentLang)?.name}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          Random Question Generator
        </h1>
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-12 shadow-sm">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800 mb-8">
            {currentQuestion}
          </p>
          <button
            onClick={generateNewQuestion}
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            Generate Question
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Generator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Globe2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-language Support</h3>
              <p className="text-gray-600">Available in 5 different languages for global accessibility</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">Questions curated by our diverse community</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-600">Carefully selected questions for meaningful interactions</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Gift className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Always Free</h3>
              <p className="text-gray-600">No hidden costs, free forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-400">
                Random Question Generator is a free tool designed to spark meaningful conversations and inspire creativity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: tangjei@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <p className="text-gray-400">
                © 2024 tangjei. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Security</h3>
              <div className="flex items-center text-gray-400">
                <Shield className="h-5 w-5 mr-2" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;