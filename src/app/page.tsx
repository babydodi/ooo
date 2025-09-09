'use client'

import { useState, useEffect } from 'react'
import { Search, BookOpen, Users, Award, ChevronRight, Star, Play, Menu, X } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    { number: '50,000+', label: 'طالب مسجل' },
    { number: '1,000+', label: 'سؤال تدريبي' },
    { number: '95%', label: 'معدل النجاح' },
    { number: '24/7', label: 'دعم فني' }
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'اختبارات تفاعلية',
      description: 'اختبارات محاكية للاختبار الحقيقي مع تقييم فوري ونصائح مفصلة'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'مجتمع الطلاب',
      description: 'انضم لمجتمع من آلاف الطلاب وشارك التجارب والنصائح'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'شهادات معتمدة',
      description: 'احصل على شهادات إنجاز معتمدة عند إكمال المستويات المختلفة'
    }
  ]

  const testimonials = [
    {
      name: 'أحمد محمد',
      score: '89',
      text: 'بفضل هذا الموقع حصلت على درجة ممتازة في اختبار STEP. التدريبات كانت مفيدة جداً',
      avatar: '👨‍🎓'
    },
    {
      name: 'فاطمة علي',
      score: '92',
      text: 'أفضل منصة للتحضير لاختبار STEP. الأسئلة متنوعة والشرح واضح',
      avatar: '👩‍🎓'
    },
    {
      name: 'خالد السعد',
      score: '87',
      text: 'ساعدني الموقع كثيراً في تحسين مستواي في اللغة الإنجليزية',
      avatar: '👨‍💼'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">STEP Academy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">المميزات</a>
              <a href="#tests" className="text-gray-700 hover:text-blue-600 transition-colors">الاختبارات</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">من نحن</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                ابدأ الآن
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-gray-700">الرئيسية</a>
              <a href="#features" className="block py-2 text-gray-700">المميزات</a>
              <a href="#tests" className="block py-2 text-gray-700">الاختبارات</a>
              <a href="#about" className="block py-2 text-gray-700">من نحن</a>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2">
                ابدأ الآن
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Gradient Lines Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-96 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent transform rotate-12"></div>
            <div className="absolute top-40 right-20 w-80 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent transform -rotate-6"></div>
            <div className="absolute top-60 left-1/4 w-72 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent transform rotate-3"></div>
            <div className="absolute bottom-40 right-10 w-64 h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -rotate-12"></div>
            <div className="absolute bottom-20 left-1/3 w-88 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent transform rotate-6"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 relative">
              اجتز اختبار 
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent"> STEP </span>
              بثقة
              {/* Decorative gradient line under title */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              منصة شاملة للتحضير لاختبار كفايات اللغة الإنجليزية STEP مع آلاف الأسئلة التدريبية والمحاكاة الحقيقية للاختبار
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12 relative">
              <div className="relative">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full p-0.5">
                  <div className="bg-white rounded-full h-full w-full"></div>
                </div>
                <div className="relative">
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <input
                    type="text"
                    placeholder="ابحث عن الاختبارات، الدروس، أو المواضيع..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-12 py-4 text-lg border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg relative z-10 bg-white"
                  />
                  <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 z-10">
                    بحث
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group">
                <span className="relative z-10">ابدأ اختبار مجاني</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="flex items-center gap-2 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-200">
                <Play className="w-5 h-5" />
                شاهد الفيديو التعريفي
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative overflow-hidden">
        {/* Gradient Lines Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          <div className="absolute bottom-10 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-transparent to-purple-100"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative">
              لماذا تختار STEP Academy؟
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر لك كل ما تحتاجه للنجاح في اختبار STEP من خلال منصة متطورة وسهلة الاستخدام
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-gray-50 via-white to-blue-50 border border-gray-100 hover:border-blue-200 relative overflow-hidden group">
                {/* Gradient line on hover */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 rounded-2xl mb-6 relative">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              قصص نجاح طلابنا
            </h2>
            <p className="text-xl text-gray-600">
              اكتشف كيف ساعدت منصتنا آلاف الطلاب في تحقيق أهدافهم
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 ml-2">درجة STEP:</span>
                      <span className="font-bold text-green-600">{testimonial.score}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">"{testimonial.text}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
        {/* Animated gradient lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-white via-transparent to-white animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative">
            ابدأ رحلتك نحو النجاح اليوم
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            انضم لآلاف الطلاب الذين حققوا أهدافهم في اختبار STEP
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              ابدأ اختبار مجاني
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gradient-to-r hover:from-white hover:to-gray-100 hover:text-blue-600 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">تعرف على الخطط</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-semibold">STEP Academy</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                منصة رائدة في التحضير لاختبار كفايات اللغة الإنجليزية STEP
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">الاختبارات</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">اختبار تجريبي</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اختبارات القواعد</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اختبارات القراءة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اختبارات الاستماع</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">الدعم</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الدعم الفني</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">تابعنا</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">تويتر</a></li>
                <li><a href="#" className="hover:text-white transition-colors">فيسبوك</a></li>
                <li><a href="#" className="hover:text-white transition-colors">إنستغرام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">يوتيوب</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 STEP Academy. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
