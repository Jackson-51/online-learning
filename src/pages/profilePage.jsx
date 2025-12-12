import React from 'react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { LevelBadge } from '../components/features/LevelBadge'
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Award,
  Star,
  BookOpen,
  Trophy,
} from 'lucide-react'
export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: User Info */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="h-32 bg-gray-900 relative">
                <div className="absolute -bottom-12 left-6 h-24 w-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-500" />
                </div>
              </div>
              <CardContent className="pt-16 pb-6">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Alex Johnson
                  </h1>
                  <p className="text-gray-500">Computer Science Student</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Student</Badge>
                  <Badge variant="info">Explainer</Badge>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Stanford University</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>alex.j@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Joined September 2023</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'JavaScript',
                    'Linear Algebra',
                    'Python',
                    'Data Structures',
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-gray-50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Stats & Gamification */}
          <div className="lg:col-span-2 space-y-6">
            {/* Level Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Current Level</CardTitle>
              </CardHeader>
              <CardContent>
                <LevelBadge level="Learner" progress={75} className="mb-6" />
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">12</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      Sessions
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      Rating
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">850</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      Points
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    {
                      name: 'First Steps',
                      icon: BookOpen,
                      color: 'text-blue-500',
                      bg: 'bg-blue-50',
                    },
                    {
                      name: 'Top Rated',
                      icon: Star,
                      color: 'text-yellow-500',
                      bg: 'bg-yellow-50',
                    },
                    {
                      name: 'Helper',
                      icon: Award,
                      color: 'text-purple-500',
                      bg: 'bg-purple-50',
                    },
                    {
                      name: 'Expert',
                      icon: Trophy,
                      color: 'text-gray-400',
                      bg: 'bg-gray-100',
                      locked: true,
                    },
                  ].map((badge, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center text-center p-4 rounded-xl border ${badge.locked ? 'border-dashed border-gray-200 opacity-50' : 'border-gray-100 bg-white shadow-sm'}`}
                    >
                      <div
                        className={`h-12 w-12 rounded-full ${badge.bg} flex items-center justify-center mb-3`}
                      >
                        <badge.icon className={`h-6 w-6 ${badge.color}`} />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {badge.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      action: 'Completed a session',
                      detail: 'React Hooks Explanation',
                      time: '2 hours ago',
                    },
                    {
                      action: 'Uploaded a document',
                      detail: 'Linear Algebra Notes',
                      time: '1 day ago',
                    },
                    {
                      action: 'Earned a badge',
                      detail: 'Top Rated Explainer',
                      time: '3 days ago',
                    },
                  ].map((activity, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="relative">
                        <div className="h-full w-px bg-gray-200 absolute left-2 top-2" />
                        <div className="h-4 w-4 rounded-full bg-gray-900 relative z-10 mt-1" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.detail}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
