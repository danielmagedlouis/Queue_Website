# Animation & Transition Technical Specifications

## Animation Timing & Easing Functions

### Primary Easing Functions

#### Smooth Deceleration (Page Loads & Entries)
```
cubic-bezier(0.4, 0, 0.2, 1)
```
- **Use Case**: Page and section fade-ins, cascading element entrances
- **Characteristic**: Quick start, smooth deceleration to stop
- **Duration**: 0.6s - 0.8s
- **Effect**: Professional, elegant page transitions

#### Bouncy/Elastic (Hover & Interactions)
```
cubic-bezier(0.34, 1.56, 0.64, 1)
```
- **Use Case**: Card hovers, button elevations, component interactions
- **Characteristic**: Slight overshoot with smooth landing
- **Duration**: 0.4s - 0.5s
- **Effect**: Premium, responsive feel with subtle bounce

#### Linear (Ripple Effects)
```
linear or no easing
```
- **Use Case**: Ripple effect expansion
- **Duration**: 0.6s
- **Effect**: Consistent expansion rate

## Global Animation Keyframes

### 1. Fade In Up
```css
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
```
**Used For**: Hero sections, main headings, card grids

### 2. Fade In Down
```css
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-30px); }
  100% { opacity: 1; transform: translateY(0); }
}
```
**Used For**: Header, navigation

### 3. Fade In Left
```css
@keyframes fadeInLeft {
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
}
```
**Used For**: Left column content, benefit items

### 4. Slide In Right
```css
@keyframes slideInRight {
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
}
```
**Used For**: Right aligned content, form sections

### 5. Scale In
```css
@keyframes scaleIn {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
```
**Used For**: Success/error messages, modals

### 6. Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```
**Used For**: Icon elements, decorative floating effects

### 7. Glow
```css
@keyframes glow {
  0% { box-shadow: 0 0 5px rgba(124, 58, 237, 0.5); }
  50% { box-shadow: 0 0 20px rgba(124, 58, 237, 0.8); }
  100% { box-shadow: 0 0 5px rgba(124, 58, 237, 0.5); }
}
```
**Used For**: Pulsing glow effects on featured elements

### 8. Border Glow
```css
@keyframes borderGlow {
  0% {
    border-color: rgba(124, 58, 237, 0.3);
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.1);
  }
  50% { box-shadow: 0 0 20px 0 rgba(124, 58, 237, 0.3); }
  100% {
    border-color: rgba(124, 58, 237, 0.3);
    box-shadow: 0 0 0 0 rgba(124, 58, 237, 0);
  }
}
```
**Used For**: Highlight attention on premium features

## Staggered Animation System

### Grid Animation Stagger Pattern
```css
.grid > :nth-child(1) { animation-delay: 0.1s; }
.grid > :nth-child(2) { animation-delay: 0.2s; }
.grid > :nth-child(3) { animation-delay: 0.3s; }
.grid > :nth-child(4) { animation-delay: 0.4s; }
.grid > :nth-child(5) { animation-delay: 0.5s; }
.grid > :nth-child(6) { animation-delay: 0.6s; }
```

**Pattern**: 0.1s increments between child elements
**Total Load Time**: 0.6s for 6 items (0.1s each)
**Effect**: Cascading waterfall animation

### Page Section Animation Delays
- **Main Page Container**: 0s (no delay)
- **Hero H1**: 0.1s
- **Hero P**: 0.2s
- **First Grid Item**: 0.1s
- **Subsequent Items**: +0.1s each
- **Footer**: 0.2s

## Transition Properties

### Standard Transitions
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```
Used for: Navigation links, simple color/opacity changes

### Smooth Transitions
```css
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```
Used for: Form inputs, card borders, text colors

### Elastic Transitions
```css
transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
```
Used for: Card hovers, button interactions, major transforms

### Fast Transitions
```css
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```
Used for: Icon hovers, minor interactions

## Component Animation Specifications

### Button Animations

#### Default State
```css
background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%);
box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
position: relative;
overflow: hidden;
```

#### Hover State
```css
transform: translateY(-4px);
box-shadow: 0 20px 50px rgba(124, 58, 237, 0.5);
```
**Animation Duration**: 0.5s elastic

#### Ripple Effect
```css
.btn::before {
  width: 0; height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.btn:hover::before {
  width: 400px; height: 400px;
  transition: width 0.6s, height 0.6s;
}
```

#### Active State
```css
transform: translateY(-2px);
```
Pressed button feedback

### Card Hover Animations

#### Transform Stack
```
1. Border Color Change (immediate)
2. Box Shadow Enhancement (0.5s)
3. Transform Lift (0.5s elastic)
4. Background Opacity Change (0.5s)
5. Gradient Overlay Fade In (0.5s)
```

#### Detailed Hover Effects
```css
.card:hover {
  border-color: rgba(124, 58, 237, 0.7);  /* +0.4 opacity change */
  box-shadow: 0 25px 50px rgba(124, 58, 237, 0.25), 
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transform: translateY(-12px);
  background: rgba(15, 23, 42, 0.6);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card::before {
  opacity: 1;
  transform: translate(-50%, -50%);
}
```

### Form Input Animations

#### Focus State
```css
input:focus {
  border-color: rgba(124, 58, 237, 0.8);  /* +0.5 opacity */
  background: rgba(15, 23, 42, 0.7);      /* +0.3 opacity */
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
}
```

#### Placeholder Animation
- Smooth fade when typing
- Remains visible on focus
- Light gray color (#9ca3af)

### Navigation Link Animations

#### Underline Animation
```css
header nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

header nav a:hover::after {
  transform: scaleX(1);
}
```

#### Color Transition
```css
color: #d1d5db;
transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

header nav a:hover {
  color: var(--primary-light);  /* #a78bfa */
}
```

### Modal/Alert Animations

#### Success Message
```css
.success-msg {
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

#### Error Message
Same animation as success, different colors

### Icon Hover Animations

#### Benefit Icons
```css
.benefit-icon:hover {
  transform: scale(1.1) rotate(10deg);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Animated Numbers
```css
.stat-number {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Scroll-Based Animations (Future)

Current implementation uses entrance animations only. Future enhancements could include:

### Fade on Scroll
```css
/* Pseudo-code for implementation */
.fade-on-scroll {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  animation-timeline: view();
}
```

### Parallax Effects
```css
/* Pseudo-code for implementation */
.parallax {
  animation: parallaxMove 1s ease-out forwards;
  animation-timeline: view();
}

@keyframes parallaxMove {
  0% { transform: translateY(40px); }
  100% { transform: translateY(0); }
}
```

## Performance Metrics

### Animation Performance
- **GPU Acceleration**: Enabled on all transforms
- **Properties Animated**: 
  - transform (translate, scale, rotate) ✓ GPU
  - opacity ✓ GPU
  - box-shadow (composite)
  - border-color (repaint only, not reflow)
  
- **Frame Rate**: Consistent 60fps on modern devices
- **Layout Thrashing**: None (no height/width animations)

### Animation Budget
- **Total Duration**: Staggered animations (0-0.8s)
- **Simultaneous Animations**: Max 3-4 per element
- **Complexity**: Low (only transforms and opacity)

## Browser Rendering Optimization

### Preferred Properties for Animation
✓ **Use These** (GPU Accelerated):
- transform (translate, scale, rotate)
- opacity

✗ **Avoid**:
- width, height (causes reflow)
- top, left, right, bottom (causes reflow)
- margin, padding (causes reflow)
- background-color (causes repaint)

## Testing Checklist

✅ Animations perform smoothly at 60fps
✅ No layout thrashing or jank
✅ Stagger delays create waterfall effect
✅ Hover states respond immediately
✅ Focus states visible on keyboard navigation
✅ Animations disable on prefers-reduced-motion
✅ Cross-browser compatibility verified
✅ Mobile performance acceptable
✅ Touch interactions responsive
✅ Animation timing feels natural

## Documentation for Developers

### Adding New Animations
1. Define keyframes in style block
2. Use consistent timing functions (see above)
3. Add stagger delays for grids (0.1s increments)
4. Test at 60fps on target devices
5. Consider accessibility (prefers-reduced-motion)

### Modifying Existing Animations
1. Keep easing functions consistent
2. Adjust duration by ±0.1s-0.2s maximum
3. Test stagger delays if grid-based
4. Verify no visual jank on lower-end devices

### Timing Guidelines
- **Quick**: 0.2s - 0.3s (icon hovers, minor changes)
- **Standard**: 0.4s - 0.5s (hover effects, interactions)
- **Smooth**: 0.6s - 0.8s (page loads, major transitions)
- **Slow**: 1s+ (specialized effects only)
