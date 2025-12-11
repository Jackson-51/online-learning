import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const features = [
    {
      iconClass: 'fa-solid fa-share-nodes',
      title: 'Resource Sharing',
      description:
        'Upload and access high-quality notes, slides, and past questions from top students.',
    },
    {
      iconClass: 'fa-regular fa-user',
      title: 'Peer Teaching',
      description:
        'Struggling with a topic? Request a session. Good at something? Teach and earn reputation.',
    },
    {
      iconClass: 'fa-solid fa-trophy',
      title: 'Gamified Growth',
      description:
        'Level up from Fresher to Pro. Earn badges and climb the leaderboard as you help others.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Join the community of students wey dey learn together.
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto">
            Master your subjects with <br className="hidden md:block" />
            <span className="text-gray-500">peer-to-peer learning</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Share resources, teach others, and level up your academic profile.
            The community-driven platform for students who want to excel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <button className="w-full sm:w-auto gap-2 bg-(--blackOne) text-white hover:bg-(--blackTwo) flex items-center justify-center p-3 rounded-2xl text-sm">
                Get Started <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="w-full sm:w-auto border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center p-3 rounded-2xl text-sm">
                Browse Resources
              </button>
            </Link>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-(500px) w-(500px) rounded-full bg-gray-50 blur-3xl opacity-50" />
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built a platform that rewards knowledge sharing and makes
              finding help easier than ever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-900">
                  <i className={`${feature.iconClass} h-6 w-6`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted by students across top universities
              </h2>
              <div className="space-y-6">
                {[
                  'Access to 10,000+ study materials',
                  'Average response time under 30 minutes',
                  'Verified explainers with high ratings',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check h-5 w-5 text-green-500"></i>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <ul className="bg-gray-50 p-6 rounded-xl border border-gray-100 md:translate-x-8 space-y-2 list-disc list-inside text-gray-600 marker:text-gray-400 text-sm flex flex-col gap-4">
                {[
                  "Ask your question by snapping a photo, uploading a file, or typing it out.",
                  "Get matched instantly with an explainer who understands your topic.",
                  "Receive step-by-step help with clear explanations and worked solutions.",
                  "Save your answers and learn at your own pace anytime.",
                ].map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to level up your learning?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of students sharing knowledge and growing together.
          </p>
          <Link to="/dashboard">
            <button className="bg-white text-gray-900 hover:bg-gray-100 p-3 rounded-xl text-sm font-bold">
              Create Free Account
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default App;