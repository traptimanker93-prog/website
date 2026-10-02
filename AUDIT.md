# GDG AITR Portal Review & Suggestions

**Website:** https://gdgocaitr.vercel.app/
**Review type:** UI/UX, Responsiveness, Navigation and Accessibility
**Review date:** 2 October 2026

## 1. Overview

The purpose of this review is to evaluate the GDG AITR portal from a user experience perspective and suggest practical improvements to make the website easier to navigate, more responsive, and more accessible.

Note: The website could not be accessed through my review environment, so the points below are recommendations and verification items rather than confirmed bugs.

## 2. Desktop Review

### Areas to Check

* Verify that the navigation bar is properly aligned.
* Check that headings, paragraphs, buttons, and images have consistent spacing.
* Ensure content sections have a clear visual hierarchy.
* Check that buttons and navigation links lead to the correct destinations.
* Verify that the layout looks consistent across different desktop screen sizes.

### Suggestions

* Maintain consistent spacing and typography throughout the website.
* Use clear headings and section labels to improve readability.
* Provide visible hover and focus states for interactive elements.
* Ensure that important calls to action are easy to identify.
* Use consistent button styles, colors, and border radii.

## 3. Mobile Review

### Areas to Check

* Verify that the navigation menu works on smaller screens.
* Check whether text, images, and cards fit within the viewport.
* Ensure buttons are easy to tap.
* Check for horizontal scrolling or overlapping elements.
* Verify that forms remain usable on mobile devices.

### Suggestions

* Use responsive CSS with Flexbox, Grid, and suitable media queries.
* Make images responsive using `max-width: 100%`.
* Allow navigation items and content cards to adapt to narrow screens.
* Use readable font sizes and sufficient spacing between interactive elements.
* Test the layout on common mobile widths, including 320px, 375px, and 430px.

## 4. Navigation and Functionality

The following items should be tested manually:

* All navigation links open the intended pages.
* Buttons and calls to action perform their expected actions.
* Registration links open the correct registration page.
* External links work correctly.
* Forms display appropriate validation and feedback.
* No links lead to missing pages or unexpected destinations.

**Recommendation:** Use meaningful link text and provide clear feedback when an action succeeds or fails.

## 5. Accessibility and Readability

### Suggestions

* Maintain sufficient contrast between text and background colors.
* Use semantic HTML elements such as `header`, `nav`, `main`, and `footer`.
* Add descriptive alternative text to meaningful images.
* Provide visible keyboard focus indicators.
* Associate form labels with their respective inputs.
* Use a logical heading structure from `h1` to `h6`.

## 6. Performance and Technical Checks

* Compress large images to improve loading speed.
* Avoid unnecessary animations and heavy visual effects.
* Check browser console errors.
* Verify that the page loads correctly on Chrome and other commonly used browsers.
* Check for missing images, stylesheets, scripts, or fonts.
* Ensure that external resources load reliably.

## 7. Suggested Improvements and New Features

1. **Upcoming Events Section:** Display upcoming workshops, technical sessions, and hackathons with dates and registration links.
2. **Event Archive:** Provide access to past events, photos, and project highlights.
3. **Member Showcase:** Highlight student projects, achievements, and community contributions.
4. **FAQ Section:** Answer common questions about membership, events, and registration.
5. **Improved Mobile Navigation:** Make important pages and registration actions easy to reach on mobile.
6. **Clear Call-to-Action Buttons:** Use consistent labels such as “Register Now,” “Explore Events,” and “Join the Community.”
7. **Accessibility Improvements:** Support keyboard navigation, readable contrast, and descriptive labels.



## 9. Conclusion

The GDG AITR portal can benefit from consistent visual design, reliable navigation, mobile responsiveness, accessibility improvements, and clearly presented community activities.

The recommended approach is to test the existing website on both desktop and mobile, document any reproducible issues with screenshots, and prioritize fixes according to their impact on usability.

**Review status:** Recommendations prepared; live website verification pending.
