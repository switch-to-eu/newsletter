# 📧 Mailcoach Campaign Manager

A TypeScript script for managing Mailcoach email campaigns with a complete 3-step workflow: create, test, and send.

## 🚀 Features

- **Create Campaigns**: Automatically render React Email newsletters and create Mailcoach campaigns
- **Test Campaigns**: Send test emails to specific addresses using either a test list or test endpoint
- **Send Campaigns**: Send campaigns to all subscribers with safety confirmations
- **Full Workflow**: Complete automation from creation to testing to production
- **Campaign Management**: Check status, delete campaigns, and more
- **TypeScript**: Full type safety and excellent developer experience

## 📋 Prerequisites

1. **Mailcoach Account**: You need access to a Mailcoach instance (cloud or self-hosted)
2. **API Key**: Generate an API key from your Mailcoach settings
3. **Environment Variables**: Set up your configuration (see below)

## 🔧 Setup

### 1. Environment Variables

Create a `.env` file in your project root with:

```bash
# Mailcoach API Configuration
MAILCOACH_API_KEY=mc_YourApiKeyHere
MAILCOACH_URL=https://bandoco.mailcoach.app/api

# Email Lists
LIST_ID=95f2e6cc-fc67-42ee-b845-f1c47af7c55f
TEST_LIST_ID=6a434681-1c8e-45f7-a0d0-fc5b5cca0d48
```

### 2. Install Dependencies

```bash
npm install
```

## 🎯 Usage

The script provides several commands for different campaign management tasks:

### 📝 Create a Campaign

```bash
# Create a production campaign
npm run campaign create "June Newsletter" "🇪🇺 Your EU Tech Digest"

# Create a test campaign
npm run campaign create "June Newsletter" "🇪🇺 Your EU Tech Digest" --test
```

### 🧪 Send Test Emails

```bash
# Send test to single email
npm run campaign test <campaign-uuid> test@example.com

# Send test to multiple emails
npm run campaign test <campaign-uuid> test1@example.com test2@example.com
```

### 🚀 Send Campaign to All Subscribers

```bash
npm run campaign send <campaign-uuid> --confirm
```

**⚠️ Warning**: This sends to ALL subscribers on the list. The `--confirm` flag is required as a safety measure.

### 🔄 Full Workflow (Recommended)

The most efficient way to manage campaigns:

```bash
npm run campaign full "June Newsletter" "🇪🇺 Your EU Tech Digest" test@example.com
```

This command:

1. Renders the newsletter HTML
2. Creates a test campaign on your test list
3. Sends the test campaign to specified email(s)
4. Creates a production campaign (ready to send)

### 📊 Check Campaign Status

```bash
npm run campaign status <campaign-uuid>
```

Shows detailed information including:

- Campaign details (name, subject, status)
- Statistics (opens, clicks, unsubscribes)
- Send information (when sent, to how many subscribers)

### 🗑️ Delete Campaign

```bash
npm run campaign delete <campaign-uuid> --confirm
```

## 📧 Newsletter Templates

The script automatically renders your React Email newsletters. Currently supports:

- **launch-newsletter**: The main newsletter template (default)

To add new newsletters:

1. Create your React Email component in `emails/`
2. Update the script's newsletter selection logic
3. Reference the new newsletter in the `create` command

## 🔧 Configuration

### Email Lists

- **LIST_ID**: Your production email list UUID
- **TEST_LIST_ID**: Your test email list UUID (optional - uses production if not set)

### Campaign Settings

Default settings applied to all campaigns:

- **From Email**: `hello@switch-to.eu`
- **From Name**: `Switch-to.EU Team`
- **UTM Tags**: Enabled
- **Webview**: Enabled

You can modify these defaults in the `createCampaign` method.

## 💡 Best Practices

### 1. Always Test First

```bash
# Recommended workflow
npm run campaign full "Newsletter Title" "Subject Line" your-email@example.com
# Review the test email
npm run campaign send <production-uuid> --confirm
```

### 2. Use Descriptive Names

```bash
# Good
npm run campaign create "Newsletter June 2024 - EU Tech Updates" "🇪🇺 Your Monthly EU Tech Digest"

# Less ideal
npm run campaign create "newsletter" "newsletter"
```

### 3. Check Status Before Sending

```bash
npm run campaign status <campaign-uuid>
```

### 4. Keep Test and Production Separate

Use the `--test` flag or `TEST_LIST_ID` to ensure tests don't go to your main list.

## 🔍 Troubleshooting

### Missing Environment Variables

```
❌ Missing required environment variables
Required: MAILCOACH_API_KEY, MAILCOACH_URL, LIST_ID
```

**Solution**: Create a `.env` file with all required variables.

### API Authentication Errors

```
❌ API Request failed: HTTP 401: Unauthorized
```

**Solution**: Check your `MAILCOACH_API_KEY` is correct and has proper permissions.

### Campaign Not Found

```
❌ Failed to get campaign: HTTP 404: Not Found
```

**Solution**: Verify the campaign UUID is correct. Use `npm run campaign status <uuid>` to check.

### Newsletter Rendering Errors

```
❌ Failed to render newsletter: Cannot find module
```

**Solution**: Ensure your newsletter component is properly exported and the import path is correct.

## 🔗 API Reference

The script uses the official Mailcoach API endpoints:

- `POST /campaigns` - Create campaign
- `POST /campaigns/{uuid}/send-test` - Send test
- `POST /campaigns/{uuid}/send` - Send campaign
- `GET /campaigns/{uuid}` - Get campaign details
- `DELETE /campaigns/{uuid}` - Delete campaign

For more details, see the [Mailcoach API Documentation](https://www.mailcoach.app/api-documentation).

## 🚀 Advanced Usage

### Scheduling Campaigns

Currently not implemented via CLI, but you can extend the script to support:

```typescript
await manager.createCampaign({
  name: "Scheduled Newsletter",
  subject: "Coming Soon",
  html: htmlContent,
  scheduleAt: "2024-06-01 10:00:00",
});
```

### Custom Newsletter Props

Extend the `renderNewsletter` method to accept custom props:

```typescript
const html = await manager.renderNewsletter("launch-newsletter", {
  previewText: "Custom preview text",
  web: false,
});
```

### Programmatic Usage

Import the class for programmatic use:

```typescript
import { MailcoachCampaignManager } from "./scripts/campaign-manager";

const manager = new MailcoachCampaignManager();
const campaign = await manager.createCampaign({
  name: "API Campaign",
  subject: "Sent via API",
  html: "<h1>Hello World</h1>",
});
```

## 📞 Support

For issues related to:

- **Script functionality**: Check this documentation and the TypeScript code
- **Mailcoach API**: See [Mailcoach API Documentation](https://www.mailcoach.app/api-documentation)
- **React Email**: See [React Email Documentation](https://react.email)

## 🎉 Getting Started

1. Set up your `.env` file with API credentials
2. Run the full workflow to create and test your first campaign:
   ```bash
   npm run campaign full "My First Newsletter" "Welcome to our newsletter!" your-email@example.com
   ```
3. Check the test email and when ready, send to all subscribers:
   ```bash
   npm run campaign send <production-uuid> --confirm
   ```

Happy emailing! 📧✨
