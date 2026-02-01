# Google AdSense Setup Guide for FinanceWise

This document explains how to properly set up Google AdSense on the FinanceWise website to meet all approval requirements.

## Files That Need Modification

### 1. `/app/layout.tsx` - Add Your Publisher ID

Replace the placeholder AdSense script tag with your actual publisher ID:

```tsx
// Current (placeholder):
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
  crossOrigin="anonymous"
/>

// Replace with your actual publisher ID:
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID_HERE"
  crossOrigin="anonymous"
/>
```

### 2. `/public/ads.txt` - Add Your Publisher Information

Replace the placeholder with your actual AdSense publisher information:

```
// Current (placeholder):
google.com, pub-xxxxxxxxxxxxxxxx, DIRECT, f08c47fec0942fa0

// Replace with:
google.com, pub-YOUR_PUBLISHER_ID_HERE, DIRECT, f08c47fec0942fa0
```

The `ads.txt` file is automatically served from the root domain (example.com/ads.txt) and helps verify your ad inventory.

## AdSense Ad Placements

The website includes ad placeholders in strategic locations:

### 1. Home Page (`/app/page.tsx`)
- **Location**: Below the featured articles section
- **Format**: Horizontal banner ad
- **Purpose**: High-visibility placement for monetization

### 2. Blog Index (`/app/blog/page.tsx`)
- **Location**: Below all blog articles listing
- **Format**: Horizontal banner ad
- **Purpose**: Secondary monetization

### 3. Individual Article Pages (`/app/blog/[slug]/page.tsx`)
- **Locations**: Two placements
  - After article disclaimer
  - Below related articles section
- **Format**: Horizontal banner ads
- **Purpose**: In-content monetization for engaged readers

## Ad Unit Setup in AdSense

After your AdSense account is approved, follow these steps:

1. **Login to Google AdSense**: https://www.google.com/adsense/
2. **Go to Ads** → **Ad Units**
3. **Create New Display Ad** with these settings:
   - **Name**: FinanceWise Homepage
   - **Size**: 728x90 (Leaderboard) or Responsive
   - **Type**: Display Ad

4. **Insert Ad Code** into the placeholder `<ins>` elements:

```tsx
// Replace the placeholder in ads:
<ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
  data-ad-slot="YOUR_AD_SLOT_ID"
  data-ad-format="horizontal"
/>
```

## Google AdSense Approval Requirements

Your website meets these critical approval requirements:

### ✅ Content Quality
- **16 high-quality, original articles** (600+ words each)
- All articles properly formatted and valuable
- No "thin" or under-construction content
- Finance & investment niche clearly defined

### ✅ Legal & Compliance
- **Privacy Policy**: `/legal/privacy-policy`
  - Mentions Google AdSense and DART cookies
  - Explains data collection and usage
  - Provides opt-out options
- **Terms & Conditions**: `/legal/terms-conditions`
  - Defines acceptable use
  - Includes financial disclaimer
- **Disclaimer**: `/legal/disclaimer`
  - Educational content notice
  - No professional advice claim
- **About Us Page**: `/about`
  - Site mission and values
  - Expert team information

### ✅ Website Structure
- **Professional Design**: Clean, mobile-responsive layout
- **Navigation**: Clear menu with Home, Blog, About, Contact, Legal
- **Contact Page**: Functional form for user inquiries
- **Contact Information**: Email, phone, location on footer
- **Footer**: Links to all legal pages

### ✅ Domain Requirements
- Published on a public domain
- Accessible to Google crawler
- No blocked resources
- Proper robots.txt configuration

### ✅ User Experience
- Mobile-responsive design (tested)
- Fast loading times
- Clear navigation
- Professional appearance
- No excessive ads or pop-ups

## Best Practices for AdSense Success

1. **Original Content**: All content is original and valuable
   - No copied content from competitors
   - Unique perspective on finance topics
   - Practical, actionable information

2. **Update Regularly**: 
   - Keep content current
   - Update older articles periodically
   - Add new articles regularly

3. **Build Audience**: 
   - Promote content on social media
   - Use SEO best practices
   - Build organic traffic

4. **Monitor Performance**: 
   - Check AdSense performance regularly
   - Optimize ad placements based on CTR
   - Analyze earnings and traffic patterns

5. **Follow AdSense Policies**:
   - No clicking your own ads
   - No encouraging clicks on ads
   - Proper disclosure of ads
   - No invalid traffic sources

## Common AdSense Rejection Reasons & How This Site Avoids Them

❌ **Low Quality Content**
✅ Solution: 16+ high-quality, original articles with depth

❌ **Insufficient Content**
✅ Solution: Comprehensive blog with 600+ word articles

❌ **Missing Legal Pages**
✅ Solution: Complete Privacy Policy, Terms, and Disclaimer

❌ **Unclear Site Purpose**
✅ Solution: Clear finance & investing focus throughout

❌ **Policy Violations**
✅ Solution: All content complies with AdSense policies

❌ **Poor User Experience**
✅ Solution: Mobile-responsive, fast-loading design

## Deployment Checklist

Before deploying to production for AdSense approval:

- [ ] Replace placeholder publisher ID in `layout.tsx`
- [ ] Replace placeholder in `public/ads.txt`
- [ ] Deploy to production domain
- [ ] Verify all pages are accessible and loading
- [ ] Test responsive design on mobile
- [ ] Verify all legal pages are live
- [ ] Check Google Search Console setup
- [ ] Submit sitemap to Google
- [ ] Apply for Google AdSense
- [ ] Wait 5-15 days for approval decision

## Verification Links

Test these URLs after deployment:

1. **Main Site**: `https://yourdomain.com/`
2. **Blog Index**: `https://yourdomain.com/blog`
3. **Sample Article**: `https://yourdomain.com/blog/index-funds-guide`
4. **Privacy Policy**: `https://yourdomain.com/legal/privacy-policy`
5. **Terms**: `https://yourdomain.com/legal/terms-conditions`
6. **ads.txt**: `https://yourdomain.com/ads.txt`

## After Approval

Once AdSense is approved:

1. **Replace Ad Placeholders**: Add your ad unit codes
2. **Monitor Performance**: Watch earnings and traffic
3. **Optimize Placements**: Move ads based on performance
4. **Continue Adding Content**: Keep adding 1-2 articles monthly
5. **Follow Best Practices**: Maintain quality and compliance

## Important Notes

- **DART Cookie**: Properly disclosed in Privacy Policy
- **Tax Reporting**: Save earnings reports for tax purposes
- **Payment Threshold**: $100 minimum before payout
- **Consistency**: Maintain regular traffic for sustained earnings
- **Quality Over Quantity**: Focus on helpful, valuable content

## Troubleshooting

### Ads Not Showing
- Verify publisher ID is correct
- Check that site is publicly accessible
- Ensure ads.txt is accessible at root
- Wait 24-48 hours after adding code

### Low Earnings
- Increase blog traffic through SEO and promotion
- Optimize ad placements for visibility
- Add more high-quality content
- Build audience engagement

### Account Issues
- Check AdSense status regularly
- Review policy compliance
- Contact AdSense support for account issues
- Keep personal information updated

## Support

For AdSense help, visit: https://support.google.com/adsense/

For website deployment questions, refer to your hosting provider's documentation.

---

**Last Updated**: January 2024
**Website**: FinanceWise - Finance & Investment Blog
