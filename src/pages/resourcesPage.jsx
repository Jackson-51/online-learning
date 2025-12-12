import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/Input'
import { Modal } from '../components/ui/Modal'
import { DocumentCard } from '../components/features/DocumentCard'
import { Search, Filter, Upload, X } from 'lucide-react'
export function ResourcesPage() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])

  // Mock data
  const documents = [
    {
      title: 'Introduction to React Hooks',
      subject: 'Computer Science',
      type: 'pdf',
      uploader: 'Sarah J.',
      date: '2 days ago',
      downloads: 124,
    },
    {
      title: 'Calculus II: Integration Rules',
      subject: 'Mathematics',
      type: 'pdf',
      uploader: 'Mike T.',
      date: '3 days ago',
      downloads: 89,
    },
    {
      title: 'Organic Chemistry Notes',
      subject: 'Chemistry',
      type: 'docx',
      uploader: 'Emily R.',
      date: '5 days ago',
      downloads: 256,
    },
    {
      title: 'Macroeconomics 101 Slides',
      subject: 'Economics',
      type: 'pptx',
      uploader: 'John D.',
      date: '1 week ago',
      downloads: 45,
    },
    {
      title: 'Data Structures Algorithms',
      subject: 'Computer Science',
      type: 'pdf',
      uploader: 'Alex W.',
      date: '1 week ago',
      downloads: 312,
    },
    {
      title: 'Physics: Mechanics Summary',
      subject: 'Physics',
      type: 'pdf',
      uploader: 'Lisa M.',
      date: '2 weeks ago',
      downloads: 178,
    },
  ]
  const filteredDocs = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.subject.toLowerCase().includes(searchQuery.toLowerCase())

    if (!matchesSearch) return false
    if (selectedSubjects.length > 0 && !selectedSubjects.includes(doc.subject))
      return false
    if (selectedTypes.length > 0 && !selectedTypes.includes(doc.type.toLowerCase()))
      return false
    return true
  })
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Document Repository
            </h1>
            <p className="text-gray-500">
              Access and share study materials with your peers.
            </p>
          </div>
          <Button onClick={() => setIsUploadModalOpen(true)} className="gap-2">
            <Upload className="h-4 w-4" /> Upload Document
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-gray-900 font-semibold">
                <Filter className="h-4 w-4" /> Filters
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Subject
                  </label>
                  <div className="space-y-2">
                    {[
                      'Computer Science',
                      'Mathematics',
                      'Physics',
                      'Chemistry',
                      'Economics',
                    ].map((subject) => (
                      <label
                        key={subject}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <input
                          type="checkbox"
                          value={subject}
                          checked={selectedSubjects.includes(subject)}
                          onChange={() =>
                            setSelectedSubjects((prev) =>
                              prev.includes(subject)
                                ? prev.filter((s) => s !== subject)
                                : [...prev, subject],
                            )
                          }
                          className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                        />
                        {subject}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    File Type
                  </label>
                  <div className="space-y-2">
                    {['PDF', 'PPTX', 'DOCX'].map((type) => {
                      const val = type.toLowerCase()
                      return (
                        <label
                          key={type}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <input
                            type="checkbox"
                            value={val}
                            checked={selectedTypes.includes(val)}
                            onChange={() =>
                              setSelectedTypes((prev) =>
                                prev.includes(val) ? prev.filter((t) => t !== val) : [...prev, val],
                              )
                            }
                            className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                          />
                          {type}
                        </label>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search documents by title or subject..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Results Grid */}
            {filteredDocs.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocs.map((doc, i) => (
                  <DocumentCard key={i} {...doc} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200 border-dashed">
                <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  No documents found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Upload Modal */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Upload Document"
      >
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            setIsUploadModalOpen(false)
          }}
        >
          <Input
            label="Document Title"
            placeholder="e.g. Calculus 101 Notes"
            required
          />

          <div className="space-y-2">
            <label className="text-sm font-medium">Subject</label>
            <select className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950">
              <option>Select a subject...</option>
              <option>Computer Science</option>
              <option>Mathematics</option>
              <option>Physics</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              className="flex min-h-(80px) w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
              placeholder="Brief description of the document contents..."
            />
          </div>

          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">
              Click to browse or drag file here
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PDF, PPTX, DOCX up to 10MB
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsUploadModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Upload Document</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
