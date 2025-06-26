# Media Usage Guide - The Harvest Website

## Quick Start

### Adding Images

```jsx
// Basic image
<Image 
  src="programs/therapeutic-garden.jpg" 
  alt="Raised garden beds in the therapeutic area"
  width={800}
  height={600}
/>

// Image with caption and credit
<Image 
  src="community/volunteer-day.jpg" 
  alt="Volunteers planting seedlings"
  caption="Monthly volunteer garden day"
  credit="Jane Smith"
/>

// Full-width responsive image
<Image 
  src="hero/valley-view.jpg" 
  alt="Sunrise over Witta valley"
  fill
  sizes="100vw"
  className="w-full h-[400px] object-cover"
/>
```

### Adding Videos

```jsx
// YouTube video
<Video 
  src="https://www.youtube.com/watch?v=VIDEO_ID"
  title="The Harvest Community Overview"
  type="youtube"
/>

// Descript video (direct link)
<Video 
  src="https://share.descript.com/view/abc123xyz"
  title="Community Interview"
  type="descript"
/>

// Descript embed code
<Video 
  title="Garden Tour"
  type="embed"
  embedCode='<iframe src="https://share.descript.com/embed/abc123xyz" width="640" height="360" frameborder="0" allowfullscreen></iframe>'
/>

// Local video with poster
<Video 
  src="harvest-tour.mp4"
  title="Virtual tour of The Harvest"
  type="local"
  poster="harvest-tour-thumb.jpg"
/>

// Vimeo video
<Video 
  src="https://vimeo.com/VIDEO_ID"
  title="Therapeutic Garden Program"
  type="vimeo"
/>
```

### Image Galleries

```jsx
<ImageGallery 
  images={[
    { src: 'gallery/garden-1.jpg', alt: 'Spring planting' },
    { src: 'gallery/garden-2.jpg', alt: 'Summer harvest' },
    { src: 'gallery/garden-3.jpg', alt: 'Autumn preparation' }
  ]}
  columns={3}
/>
```

### Hero Images

```jsx
<HeroImage
  src="hero/site-aerial.jpg"
  alt="Aerial view of The Harvest"
  title="Welcome to The Harvest"
  subtitle="Where community grows"
  height="large"
/>
```

## Directory Structure

```
public/
├── images/
│   ├── hero/          # Hero images for page headers
│   ├── programs/      # Program-specific images
│   ├── community/     # Community events and people
│   ├── news/          # News and updates
│   ├── gallery/       # General photo collections
│   └── partners/      # Partner logos and photos
└── videos/            # Self-hosted video files
```

## Image Guidelines

### Technical Requirements

1. **Formats**
   - Photos: `.jpg` (preferred for photos)
   - Graphics/Logos: `.png` (for transparency)
   - Icons: `.svg` (for scalability)

2. **Sizes**
   - Hero images: 1920x1080 maximum
   - Content images: 1200x800 maximum
   - Thumbnails: 400x300
   - File size: Under 500KB (use compression)

3. **Naming Convention**
   - Use descriptive, SEO-friendly names
   - Lowercase with hyphens
   - Examples:
     - `therapeutic-garden-raised-beds.jpg`
     - `community-harvest-festival-2025.jpg`
     - `cath-manuel-workshop.jpg`

### Content Guidelines

1. **Photography Style**
   - Natural lighting (golden hour preferred)
   - Authentic moments, not staged
   - Focus on hands in soil, faces in conversation
   - Seasonal variety showing growth cycles

2. **Subject Matter**
   - Real community members (with consent)
   - Working farm activities
   - Heritage elements
   - Therapeutic programs in action

3. **Privacy & Consent**
   - Always obtain written consent for identifiable people
   - Special care with therapeutic program participants
   - Children require parental consent
   - Store consent forms securely

## Video Guidelines

### Technical Specifications

1. **Formats**
   - MP4 (H.264) for web compatibility
   - Maximum 1080p resolution
   - Keep under 100MB for self-hosted

2. **Platforms**
   - Descript: Professional video editing with easy embed options
   - YouTube: For public content, easy sharing
   - Vimeo: For higher quality, privacy options
   - Self-hosted: For sensitive content, full control

3. **Accessibility**
   - Add captions/subtitles when possible
   - Provide transcripts for important content
   - Use descriptive titles

### Descript Integration

1. **Getting Embed Code**
   - In Descript, publish your video
   - Click "Share" and select "Embed"
   - Copy the entire iframe code
   - Use with `type="embed"` in our Video component

2. **Direct Links**
   - Copy the share link from Descript
   - Use with `type="descript"` 
   - The component will create the iframe automatically

3. **Best Practices**
   - Use Descript's built-in captions for accessibility
   - Keep consistent aspect ratios (16:9 recommended)
   - Use descriptive titles in Descript for SEO

### Content Considerations

1. **Duration**
   - Keep videos under 5 minutes
   - Lead with most important content
   - Edit for clarity and engagement

2. **Style**
   - Minimal editing, authentic feel
   - Natural sound preferred
   - Avoid excessive music/effects

## Implementation Examples

### News Article with Media

```jsx
// With image gallery
const newsItem = {
  title: 'Spring Planting Festival Success',
  content: 'Over 100 community members joined us...',
  media: {
    type: 'gallery',
    images: [
      { src: 'news/spring-festival-1.jpg', alt: 'Families planting together' },
      { src: 'news/spring-festival-2.jpg', alt: 'Children with seedlings' },
      { src: 'news/spring-festival-3.jpg', alt: 'Community feast' }
    ]
  }
}

// With Descript video
const newsItemWithVideo = {
  title: 'Cath Manuel Discusses Therapeutic Programs',
  content: 'Our partner shares insights into the healing power of gardens...',
  media: {
    type: 'video',
    videoType: 'embed',
    embedCode: '<iframe src="https://share.descript.com/embed/abc123" width="640" height="360"></iframe>',
    caption: 'Interview recorded at the therapeutic garden site'
  }
}
```

### Program Page with Video

```jsx
<Section>
  <h2>Therapeutic Horticulture in Action</h2>
  <Video 
    src="https://www.youtube.com/watch?v=abc123"
    title="A day in the therapeutic garden"
    type="youtube"
    caption="See how our programs support mental health and wellbeing"
  />
</Section>
```

### About Page with Hero

```jsx
<HeroImage
  src="hero/heritage-barn-sunset.jpg"
  alt="Historic barn at sunset"
  title="Our Heritage"
  subtitle="138 years of agricultural tradition"
  height="medium"
/>
```

## Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component for automatic optimization
   - Provide appropriate sizes prop for responsive loading
   - Use priority prop for above-fold images

2. **Lazy Loading**
   - Images below fold load automatically as user scrolls
   - Videos load thumbnail first, full video on play

3. **Responsive Images**
   ```jsx
   <Image 
     src="example.jpg"
     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
   />
   ```

## Adding New Media

1. **Prepare Files**
   - Optimize images (TinyPNG, ImageOptim)
   - Convert videos to web formats
   - Create multiple sizes if needed

2. **Upload to Correct Directory**
   - Follow directory structure
   - Use consistent naming

3. **Implement in Code**
   - Import components as needed
   - Add alt text and captions
   - Test on multiple devices

4. **Document Usage**
   - Note any special considerations
   - Update this guide if needed

## Troubleshooting

### Common Issues

1. **Image not loading**
   - Check file path and name
   - Ensure file is in public directory
   - Verify file extension matches

2. **Video not playing**
   - Check video format compatibility
   - Verify URL for external videos
   - Test in different browsers

3. **Performance issues**
   - Compress images further
   - Use appropriate image sizes
   - Consider CDN for large files

### Browser Compatibility

- Test in major browsers (Chrome, Safari, Firefox)
- Ensure mobile responsiveness
- Check print styles for images

## Future Enhancements

- CDN integration for faster global delivery
- Automated image optimization pipeline
- Video transcription service integration
- 360° virtual tours of the site

---

For questions or issues, contact the development team or refer to the Next.js documentation for Image and Video optimization best practices.