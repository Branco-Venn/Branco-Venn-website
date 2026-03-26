# Branco Venn Contact Backend

A simple Node.js backend for handling contact form submissions and sending emails to brancovenn@gmail.com.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Gmail App Password
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to "App passwords" section
4. Generate a new app password for this application
5. Update the `.env` file with your app password:

```
EMAIL_PASS=your_generated_app_password_here
```

### 3. Start the Server
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We will get back to you soon."
}
```

### GET /api/health
Health check endpoint.

## Features

- ✅ Rate limiting (5 messages per 15 minutes per IP)
- ✅ Input validation and sanitization
- ✅ HTML email templates
- ✅ Automatic confirmation email to sender
- ✅ CORS enabled for frontend
- ✅ Error handling and logging
- ✅ Environment variable configuration

## Security

- Rate limiting prevents spam
- Input validation prevents malicious content
- CORS restricts origins
- Environment variables keep credentials secure
