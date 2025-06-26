# Icon Implementation Options for The Harvest

## Option 1: Text-Only Approach (Most Minimal)

Replace all emoji icons with descriptive text labels:

```jsx
// Instead of emoji in circles
<div className="text-center">
  <div className="mb-4">
    <h3 className="font-serif text-xl text-heritage-green">Therapeutic Gardens</h3>
  </div>
  <p className="text-stone/70">Professional horticultural therapy programs...</p>
</div>

// Or with subtle numbering
<div className="flex items-start space-x-4">
  <span className="font-serif text-2xl text-sage-gray/50">01</span>
  <div>
    <h3 className="font-serif text-lg text-heritage-green mb-2">Garden Maintenance</h3>
    <p className="text-stone/70">Help maintain our therapeutic gardens...</p>
  </div>
</div>
```

## Option 2: Simple SVG Icons (Recommended)

Use the Icon component with minimal, hand-drawn style icons:

```jsx
import Icon from '@/components/Icon'

// In feature sections
<div className="text-center">
  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
    <Icon name="leaf" className="text-sage-gray" size="lg" />
  </div>
  <h3 className="font-serif text-xl text-heritage-green mb-3">
    Therapeutic Impact
  </h3>
  <p className="text-stone/70">
    Professional horticultural therapy programs...
  </p>
</div>

// Available icons:
// leaf, sprout, hands, people, wheat, sun, home, tool, book, arrow, circle, plus
```

## Option 3: Decorative Borders/Shapes

Use simple geometric shapes or borders instead of icons:

```jsx
// Circular border only
<div className="text-center">
  <div className="w-20 h-20 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
  <h3 className="font-serif text-xl text-heritage-green">
    Community Hub
  </h3>
</div>

// Or simple line decoration
<div className="text-center">
  <div className="w-16 h-0.5 bg-sage-gray/30 mx-auto mb-4" />
  <h3 className="font-serif text-xl text-heritage-green">
    Farm Stay
  </h3>
</div>
```

## Option 4: Typography-Based Design

Use large initial letters or typographic elements:

```jsx
// Large initial letter
<div className="flex items-start space-x-4">
  <span className="font-serif text-5xl text-sage-gray/20 leading-none">T</span>
  <div>
    <h3 className="font-serif text-lg text-heritage-green mb-2">
      Therapeutic Gardens
    </h3>
    <p className="text-stone/70">Healing soil, healing souls...</p>
  </div>
</div>
```

## Option 5: Custom Hand-Drawn Illustrations

For special sections, commission simple line drawings:

```jsx
// Placeholder for custom illustrations
<div className="text-center">
  <div className="w-32 h-32 mx-auto mb-4 bg-sage-gray/5 rounded" />
  <!-- Custom SVG illustration would go here -->
  <h3 className="font-serif text-xl text-heritage-green">
    Our Programs
  </h3>
</div>
```

## Implementation Recommendations

### For The Harvest, I recommend:

1. **Primary**: Use Option 2 (Simple SVG icons) for consistency
2. **Secondary**: Use Option 1 (Text-only) for lists and detailed content
3. **Accent**: Use Option 3 (Decorative borders) for special sections

### Benefits of this approach:
- Maintains authentic, human-made aesthetic
- Consistent visual language
- Fast loading (SVGs are lightweight)
- Accessible (icons have semantic meaning)
- Scalable without quality loss

### To implement across the site:

1. Replace emoji circles with Icon components
2. Use consistent icon sizes (sm, md, lg)
3. Maintain sage-gray color for icons
4. Add hover states for interactive elements

Would you like me to:
1. Update all pages to remove emojis and implement your preferred option?
2. Create additional custom SVG icons?
3. Show specific examples for each page?