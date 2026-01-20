// Blog posts data with all metadata
export const blogsData = [
  {
    id: 'snowflake-native-ml-platform',
    title: 'Building a Snowflake-Native Machine Learning Platform',
    excerpt: 'I built an internal data science SDK and a Snowflake-native ML platform that standardized the entire machine learning lifecycle—from data ingestion and validation to training, deployment, and monitoring.',
    date: '2026-01-20',
    readTime: '12 min read',
    tags: ['Machine Learning', 'MLOps', 'Data Engineering', 'Snowflake'],
    image: '/images/snowflake-ml-platform.webp',
    author: 'Emile Dimas'
  }
];

export const getBlogById = (id) => {
  return blogsData.find(blog => blog.id === id);
};
