# WorkGrid Component Documentation

## Table of Contents

* [1. Overview](#1-overview)
* [2. Component Structure](#2-component-structure)
* [3. State Management](#3-state-management)
* [4. Functions](#4-functions)
    * [4.1 `nextTestimonial()`](#41-nexttestimonial)
    * [4.2 `prevTestimonial()`](#42-prevtestimonial)
* [5. useEffect Hook](#5-useeffect-hook)


## 1. Overview

The `WorkGrid` component displays a grid layout featuring work experience details and a carousel of testimonials.  The design is responsive, adapting to different screen sizes.  A timer automatically cycles through the testimonials.

## 2. Component Structure

The component is structured as a grid (`grid grid-cols-1 md:grid-cols-[2fr_1fr]`) containing two main sections:

| Section             | Description                                                                |
|----------------------|----------------------------------------------------------------------------|
| Work Experience     | Displays the developer's work experience at Fibroid Centers of Texas. Includes a title, job title, year, and a bulleted list of accomplishments. |
| Testimonials        | Presents a carousel of testimonials. Includes navigation buttons and indicators to control the displayed testimonial. |


## 3. State Management

The component uses the `useState` hook to manage the currently displayed testimonial:

| State Variable       | Type     | Description                                                              |
|-----------------------|-----------|--------------------------------------------------------------------------|
| `currentTestimonial` | `number` | Index of the currently displayed testimonial in the `testimonials` array. |


## 4. Functions

### 4.1 `nextTestimonial()`

This function updates the `currentTestimonial` state to display the next testimonial in the array. It uses the modulo operator (`%`) to create a circular carousel effect, wrapping around to the beginning of the array after reaching the end.

```javascript
const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
};
```

### 4.2 `prevTestimonial()`

This function updates the `currentTestimonial` state to display the previous testimonial. Similar to `nextTestimonial()`, it utilizes the modulo operator to handle the circular navigation, wrapping around to the end of the array when going before the beginning.

```javascript
const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
};
```

## 5. useEffect Hook

The `useEffect` hook is used to implement an automatic slideshow for the testimonials.

```javascript
useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000); //Sets an interval to call nextTestimonial every 5000ms (5 seconds)
    return () => clearInterval(timer); // Clears the interval on unmount to prevent memory leaks.
}, []); // Empty dependency array ensures this runs only once after the component mounts.
```

This sets up an interval that calls the `nextTestimonial` function every 5 seconds. The cleanup function, returned from `useEffect`, clears this interval when the component unmounts, preventing potential memory leaks.
