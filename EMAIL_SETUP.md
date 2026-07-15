# Email Setup Guide for Your Portfolio

## How to Enable Email Functionality

Your contact form is now connected to send emails! Follow these steps to make it work:

### Step 1: Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create an Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or any email provider)
4. Connect your Gmail account (alennelson2004@gmail.com)
5. Name it: `gmail_service` or similar
6. **Save the Service ID** (you'll need this)

### Step 3: Create an Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it: `portfolio_contact` or similar
4. Use this template:

```
From: {{from_email}}
Name: {{from_name}}
Subject: {{subject}}

Message:
{{message}}
```

5. **Save the Template ID** (you'll need this)

### Step 4: Get Your Public Key
1. Go to **Account** settings
2. Copy your **Public Key**

### Step 5: Update Your Code
Open `script.js` and find this line (around line 17):

```javascript
emailjs.init('YOUR_PUBLIC_KEY_HERE');
```

Replace `YOUR_PUBLIC_KEY_HERE` with your actual EmailJS public key.

Then find the fetch request (around line 281) and replace:
- `'service_your_service_id'` with your Service ID
- `'template_your_template_id'` with your Template ID
- `'your_public_key'` with your Public Key

Example:
```javascript
body: JSON.stringify({
  service_id: 'service_abc123xyz',
  template_id: 'template_xyz789abc',
  user_id: 'pub_xyz123abc789',
  template_params: {
    to_email: 'alennelson2004@gmail.com',
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  }
})
```

### Step 6: Test It!
1. Save the file
2. Reload your portfolio in the browser
3. Fill out the contact form and submit
4. Check your email at alennelson2004@gmail.com

## Troubleshooting

**Email not arriving?**
- Check spam/promotions folder
- Verify the Template ID matches exactly
- Check that your Gmail account is connected in EmailJS
- Make sure you've used the correct Public Key

**Getting errors in console?**
- Open Developer Tools (F12)
- Check the Console tab for error messages
- Verify all IDs (service, template, public key) are correct

**Rate Limiting?**
- EmailJS free tier allows 200 emails/month
- Consider upgrading if needed

Need help? Contact EmailJS support or check their documentation.
