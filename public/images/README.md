# Image Organization Guide

## Directory Structure

- `/hero/` - Hero images for page headers and main sections
- `/programs/` - Images for each program area (therapeutic, community, tourism, etc.)
- `/community/` - Community events, volunteer activities, people
- `/news/` - News and event photos
- `/gallery/` - General photo collections
- `/partners/` - Partner organization logos and photos

## Naming Convention

Use descriptive, SEO-friendly names:
- `therapeutic-garden-raised-beds.jpg`
- `community-harvest-festival-2025.jpg`
- `witta-valley-sunrise.jpg`

## Image Guidelines

1. **Formats**: Use .jpg for photos, .png for logos/graphics
2. **Sizes**: 
   - Hero images: 1920x1080 max
   - Content images: 1200x800 max
   - Thumbnails: 400x300
3. **Optimization**: Compress images before uploading (aim for <500KB)
4. **Alt Text**: Always provide descriptive alt text for accessibility

## Usage Examples

```jsx
// In components
<Image 
  src="hero/harvest-garden-aerial.jpg" 
  alt="Aerial view of The Harvest therapeutic gardens"
  width={1200}
  height={800}
/>

// With caption
<Image 
  src="community/volunteer-planting-day.jpg" 
  alt="Volunteers planting seedlings"
  caption="Monthly volunteer garden day"
  credit="Jane Smith"
/>
```