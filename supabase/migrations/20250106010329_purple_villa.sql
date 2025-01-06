/*
  # Add sample blog posts

  1. New Content
    - Adds 5 sample blog posts with realistic content about AI and technology
    - All posts are published and visible to the public
    - Posts have varied categories and creation dates
  
  2. Data Structure
    - Each post has a unique slug
    - Content includes proper formatting
    - Images use real Unsplash URLs
*/

-- Get admin user ID
DO $$
DECLARE
  admin_id uuid;
BEGIN
  SELECT id INTO admin_id FROM auth.users WHERE email = 'admin@gogetai.com' LIMIT 1;

  -- Insert sample blog posts
  INSERT INTO blog_posts (title, slug, excerpt, content, image_url, category, author_id, published, created_at)
  VALUES
    (
      'The Future of AI in Business: 2024 and Beyond',
      'future-of-ai-in-business-2024',
      'Explore the transformative impact of AI on business operations and strategy in the coming years.',
      'Artificial Intelligence is reshaping the business landscape at an unprecedented pace. As we move through 2024, organizations are discovering innovative ways to leverage AI for competitive advantage.\n\nKey trends include:\n\n1. Hyper-personalization at scale\n2. AI-driven decision making\n3. Automated workflow optimization\n4. Enhanced customer experiences\n\nSuccessful AI implementation requires a strategic approach, focusing on both technical capabilities and organizational readiness.',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      'Strategy',
      admin_id,
      true,
      NOW() - INTERVAL '2 days'
    ),
    (
      'Building Effective AI Teams: A Practical Guide',
      'building-effective-ai-teams',
      'Learn how to structure and nurture high-performing AI development teams for maximum impact.',
      'Creating successful AI teams goes beyond technical expertise. It requires a careful balance of skills, roles, and collaboration frameworks.\n\nEssential components include:\n\n- Clear leadership and vision\n- Cross-functional expertise\n- Agile methodology adaptation\n- Continuous learning culture\n\nWe''ll explore how to build these teams from the ground up.',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      'Leadership',
      admin_id,
      true,
      NOW() - INTERVAL '5 days'
    ),
    (
      'AI Implementation: Common Pitfalls and How to Avoid Them',
      'ai-implementation-pitfalls',
      'Discover the most common challenges in AI implementation and learn proven strategies to overcome them.',
      'While AI promises transformative benefits, many organizations struggle with implementation. Understanding common pitfalls is crucial for success.\n\nKey challenges include:\n\n1. Unclear objectives and metrics\n2. Data quality issues\n3. Integration with existing systems\n4. Change management\n\nWe''ll examine each challenge and provide practical solutions.',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      'Implementation',
      admin_id,
      true,
      NOW() - INTERVAL '1 week'
    ),
    (
      'Measuring ROI in AI Projects: A Framework',
      'measuring-roi-in-ai-projects',
      'A comprehensive guide to calculating and maximizing return on investment in AI initiatives.',
      'Determining the ROI of AI projects requires a nuanced approach that considers both quantitative and qualitative factors.\n\nKey metrics include:\n\n- Cost reduction\n- Revenue growth\n- Productivity gains\n- Customer satisfaction\n\nLearn how to build a comprehensive measurement framework.',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      'Strategy',
      admin_id,
      true,
      NOW() - INTERVAL '10 days'
    ),
    (
      'AI-Driven Customer Experience: Case Studies',
      'ai-driven-customer-experience',
      'Real-world examples of how companies are using AI to transform customer experiences.',
      'Leading organizations are leveraging AI to create exceptional customer experiences. Through these case studies, we''ll explore successful implementations across different industries.\n\nHighlights include:\n\n- Predictive customer service\n- Personalized recommendations\n- Automated support systems\n- Real-time interaction analysis\n\nLearn from these practical examples to enhance your own customer experience strategy.',
      'https://images.unsplash.com/photo-1552664730-d307ca884978',
      'Case Studies',
      admin_id,
      true,
      NOW() - INTERVAL '2 weeks'
    );
END $$;