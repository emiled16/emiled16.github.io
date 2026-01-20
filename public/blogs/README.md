# Blog Posts

This directory contains markdown files for all blog posts.

## How to Add a New Blog Post

### 1. Create the Markdown File

Create a new `.md` file in this directory with a unique ID (e.g., `my-new-post.md`).

The markdown file should contain your blog content with standard markdown syntax.

### 2. Update blogsData.js

Add a new entry to the `blogsData` array in `/src/data/blogsData.js`:

```javascript
{
  id: 'my-new-post', // Must match the .md filename (without extension)
  title: 'My New Blog Post Title',
  excerpt: 'A brief summary that appears on the blog listing page.',
  date: '2026-01-20', // Format: YYYY-MM-DD
  readTime: '10 min read',
  tags: ['Tag1', 'Tag2'], // Add relevant tags
  image: 'https://via.placeholder.com/800x400/667eea/ffffff?text=Blog+Image', // Header image URL
  author: 'Your Name'
}
```

### 3. Update Tag Colors (Optional)

If you're using new tags, add their colors in `/src/components/Blog.jsx`:

```javascript
const tagColors = {
  'YourNewTag': '#hexcolor',
  // ... other tags
};
```

## Markdown Support

The blog supports all standard markdown features:
- Headers (# ## ###)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Links and images
- Blockquotes
- Tables
- And more via react-markdown + remark-gfm

## Example Blog Post Structure

```markdown
# Your Blog Post Title

**TL;DR**
A quick summary of your post.

## Introduction

Your introduction goes here...

## Section 1

Content for section 1...

### Subsection

More detailed content...

\`\`\`javascript
// Code example
const example = 'Hello World';
\`\`\`

## Conclusion

Wrap up your thoughts...
```

## Current Blog Posts

- `snowflake-native-ml-platform.md` - Building a Snowflake-Native Machine Learning Platform
