import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'
import { blogPosts } from '@/data/blog'
import { motion } from 'framer-motion'
import { useNavigationStore } from '@/stores/navigationStore'

interface BlogDetailModuleProps {
  postId: string
}

export const BlogDetailModule: React.FC<BlogDetailModuleProps> = ({ postId }) => {
  const { setCurrentModule } = useNavigationStore()
  const post = blogPosts.find(p => p.id === postId)

  if (!post) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Button onClick={() => setCurrentModule('blog')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    )
  }

  const handleBackToBlog = () => {
    setCurrentModule('blog')
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={handleBackToBlog}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Button>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
            {post.updatedAt !== post.publishedAt && (
              <div className="text-sm text-muted-foreground">
                Updated: {post.updatedAt}
              </div>
            )}
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div
            className="whitespace-pre-wrap leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, '<br/>').replace(/#{1,6}\s/g, (match) => {
                const level = match.trim().length
                return `<h${level} class="font-bold mt-8 mb-4">`
              }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
            }}
          />
        </motion.div>

        {/* Article Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">About the Author</h3>
              <p className="text-sm text-muted-foreground">
                {post.author} is a full-stack developer passionate about creating modern web applications.
              </p>
            </div>
            <Button onClick={handleBackToBlog} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
