#!/usr/bin/env node

import { config } from "dotenv";
import { render } from "@react-email/render";
import { newsletters, type Newsletter } from "../app/data/newsletters";
import * as React from "react";

// Load environment variables
config();

const MAILCOACH_API_KEY = process.env.MAILCOACH_API_KEY;
const MAILCOACH_URL = process.env.MAILCOACH_URL;
const LIST_ID = process.env.LIST_ID;

if (!MAILCOACH_API_KEY || !MAILCOACH_URL || !LIST_ID) {
  console.error("❌ Missing required environment variables");
  console.error("Required: MAILCOACH_API_KEY, MAILCOACH_URL, LIST_ID");
  process.exit(1);
}

// Type definitions
interface MailcoachApiResponse<T> {
  data: T;
  links?: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

interface Campaign {
  uuid: string;
  name: string;
  email_list_uuid: string;
  from_email: string;
  from_name: string;
  subject?: string;
  status: "draft" | "sent" | "scheduled";
  html?: string;
  structured_html?: string;
  email_html?: string;
  webview_html?: string;
  mailable_class?: string;
  sent_to_number_of_subscribers: string;
  segment_class?: string;
  segment_description: string;
  open_count: string;
  unique_open_count: string;
  open_rate: number;
  click_count: string;
  unique_click_count: string;
  click_rate: number;
  unsubscribe_count: string;
  unsubscribe_rate: string;
  bounce_count: string;
  bounce_rate: string;
  sent_at?: string;
  statistics_calculated_at?: string;
  scheduled_at?: string;
  last_modified_at: string;
  summary_mail_sent_at?: string;
  created_at: string;
  updated_at: string;
}

interface CreateCampaignRequest {
  name: string;
  subject: string;
  html: string;
  email_list_uuid: string;
  from_email?: string;
  from_name?: string;
  template_uuid?: string;
  segment_uuid?: string;
  mailable_class?: string;
  schedule_at?: string;
  utm_tags?: boolean;
  add_subscriber_tags?: boolean;
  add_subscriber_link_tags?: boolean;
  disable_webview?: boolean;
  fields?: Record<string, string>;
}

interface SendTestRequest {
  email: string;
}

interface CreateCampaignOptions {
  name: string;
  subject: string;
  html: string;
  listId?: string;
  fromEmail?: string;
  fromName?: string;
  scheduleAt?: string;
}

interface NewsletterProps {
  previewText: string;
  unsubscribeUrl: string;
  web: boolean;
}

class MailcoachCampaignManager {
  private baseURL: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseURL = MAILCOACH_URL!;
    this.headers = {
      Authorization: `Bearer ${MAILCOACH_API_KEY}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  async apiRequest<T>(
    method: string,
    endpoint: string,
    data: any = null
  ): Promise<T | null> {
    const url = `${this.baseURL}${endpoint}`;

    const options: RequestInit = {
      method,
      headers: this.headers,
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    console.log(`🔄 ${method} ${url}`);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      // Handle empty responses (like 204 for test/send)
      if (
        response.status === 204 ||
        response.headers.get("content-length") === "0"
      ) {
        return null;
      }

      return (await response.json()) as T;
    } catch (error) {
      console.error(
        `❌ API Request failed: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }

  async renderNewsletter(
    newsletterId: string = "001"
  ): Promise<string> {
    console.log(`📧 Rendering newsletter: ${newsletterId}`);

    try {
      // Find the newsletter by ID
      const newsletter = newsletters.find((n) => n.id === newsletterId);
      if (!newsletter) {
        throw new Error(
          `Newsletter with ID "${newsletterId}" not found. Available newsletters: ${newsletters.map((n) => n.id).join(", ")}`
        );
      }

      // Default props for the newsletter
      const defaultProps: NewsletterProps = {
        previewText: newsletter.title,
        unsubscribeUrl: "{{unsubscribeUrl}}",
        web: false,
      };

      // Ensure all required props are defined
      const finalProps = {
        previewText: defaultProps.previewText!,
        unsubscribeUrl: defaultProps.unsubscribeUrl!,
        web: defaultProps.web!,
      };

      // Render the React email component to HTML
      const html = await render(<newsletter.Component {...finalProps} />);

      console.log(
        `✅ Newsletter "${newsletter.title}" rendered successfully (${html.length} characters)`
      );
      return html;
    } catch (error) {
      console.error(
        `❌ Failed to render newsletter: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }

  listNewsletters(): Newsletter[] {
    return newsletters;
  }

  async createCampaign(options: CreateCampaignOptions): Promise<Campaign> {
    const {
      name,
      subject,
      html,
      listId = LIST_ID!,
      fromEmail = "hello@switch-to.eu",
      fromName = "Switch-to.EU Team",
      scheduleAt = undefined,
    } = options;

    console.log(`📝 Creating campaign: ${name}`);

    const campaignData: CreateCampaignRequest = {
      name,
      subject,
      html,
      email_list_uuid: listId,
      from_email: fromEmail,
      from_name: fromName,
      utm_tags: true,
      add_subscriber_tags: false,
      add_subscriber_link_tags: false,
      disable_webview: false,
    };

    if (scheduleAt) {
      campaignData.schedule_at = scheduleAt;
    }

    try {
      const response = await this.apiRequest<MailcoachApiResponse<Campaign>>(
        "POST",
        "/campaigns",
        campaignData
      );
      if (!response) {
        throw new Error("No response data received");
      }
      console.log(`✅ Campaign created successfully`);
      console.log(`   UUID: ${response.data.uuid}`);
      console.log(`   Status: ${response.data.status}`);
      return response.data;
    } catch (error) {
      console.error(
        `❌ Failed to create campaign: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }

  async sendTest(
    campaignUuid: string,
    testEmails: string | string[]
  ): Promise<void> {
    const emailList = Array.isArray(testEmails)
      ? testEmails.join(",")
      : testEmails;

    console.log(`🧪 Sending test campaign to: ${emailList}`);

    try {
      await this.apiRequest("POST", `/campaigns/${campaignUuid}/send-test`, {
        email: emailList,
      } as SendTestRequest);
      console.log(`✅ Test campaign sent successfully`);
    } catch (error) {
      console.error(
        `❌ Failed to send test campaign: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }

  async sendCampaign(campaignUuid: string): Promise<void> {
    console.log(`🚀 Sending campaign to all subscribers`);

    try {
      await this.apiRequest("POST", `/campaigns/${campaignUuid}/send`);
      console.log(`✅ Campaign sent successfully`);
    } catch (error) {
      console.error(
        `❌ Failed to send campaign: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }

  async getCampaign(campaignUuid: string): Promise<Campaign> {
    try {
      const response = await this.apiRequest<MailcoachApiResponse<Campaign>>(
        "GET",
        `/campaigns/${campaignUuid}`
      );
      if (!response) {
        throw new Error("No response data received");
      }
      return response.data;
    } catch (error) {
      console.error(
        `❌ Failed to get campaign: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }

  async deleteCampaign(campaignUuid: string): Promise<void> {
    console.log(`🗑️ Deleting campaign: ${campaignUuid}`);

    try {
      await this.apiRequest("DELETE", `/campaigns/${campaignUuid}`);
      console.log(`✅ Campaign deleted successfully`);
    } catch (error) {
      console.error(
        `❌ Failed to delete campaign: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      throw error;
    }
  }
}

// CLI interface
async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0];

  const manager = new MailcoachCampaignManager();

  try {
    switch (command) {
      case "create":
        await handleCreate(manager, args);
        break;
      case "test":
        await handleTest(manager, args);
        break;
      case "send":
        await handleSend(manager, args);
        break;
      case "status":
        await handleStatus(manager, args);
        break;
      case "delete":
        await handleDelete(manager, args);
        break;
      case "list":
        handleList(manager);
        break;
      default:
        showHelp();
    }
  } catch (error) {
    console.error(
      `❌ Command failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
    process.exit(1);
  }
}

async function handleCreate(
  manager: MailcoachCampaignManager,
  args: string[]
): Promise<void> {
  const newsletterId = args[1];
  const testEmail = args[2];

  if (!newsletterId) {
    console.error(
      "❌ Usage: npm run campaign create <newsletter-id> [test-email]"
    );
    console.error("\nAvailable newsletters:");
    manager.listNewsletters().forEach((n) => {
      console.error(`   ${n.id}: ${n.title}`);
    });
    process.exit(1);
  }

  // Get newsletter details to use title as default
  const newsletter = manager.listNewsletters().find(n => n.id === newsletterId);
  if (!newsletter) {
    console.error(`❌ Newsletter with ID "${newsletterId}" not found`);
    console.error("\nAvailable newsletters:");
    manager.listNewsletters().forEach((n) => {
      console.error(`   ${n.id}: ${n.title}`);
    });
    process.exit(1);
  }

  // Use newsletter title as default, or custom values if provided
  const name = newsletter.title;
  const subject = newsletter.title;

  const html = await manager.renderNewsletter(newsletterId);

  const campaign = await manager.createCampaign({
    name,
    subject,
    html,
    listId: LIST_ID!,
  });

  console.log(`\n📋 Campaign Details:`);
  console.log(`   UUID: ${campaign.uuid}`);
  console.log(`   Name: ${campaign.name}`);
  console.log(`   Subject: ${campaign.subject || "Not set"}`);
  console.log(`   Newsletter: ${newsletterId} (${newsletter.title})`);
  console.log(`   Status: ${campaign.status}`);

  if (testEmail) {
    await manager.sendTest(campaign.uuid, testEmail);
  }
}

async function handleTest(
  manager: MailcoachCampaignManager,
  args: string[]
): Promise<void> {
  const campaignUuid = args[1];
  const testEmails = args.slice(2);

  if (!campaignUuid || testEmails.length === 0) {
    console.error(
      "❌ Usage: npm run campaign test <campaign-uuid> <email1> [email2] [email3]..."
    );
    process.exit(1);
  }

  await manager.sendTest(campaignUuid, testEmails);
}

async function handleSend(
  manager: MailcoachCampaignManager,
  args: string[]
): Promise<void> {
  const campaignUuid = args[1];
  const confirmed = args.includes("--confirm");

  if (!campaignUuid) {
    console.error("❌ Usage: npm run campaign send <campaign-uuid> --confirm");
    process.exit(1);
  }

  if (!confirmed) {
    console.error(
      "❌ You must add --confirm to send the campaign to all subscribers"
    );
    process.exit(1);
  }

  // Get campaign details first
  const campaign = await manager.getCampaign(campaignUuid);
  console.log(`\n⚠️  About to send campaign to ALL subscribers:`);
  console.log(`   Name: ${campaign.name}`);
  console.log(`   Subject: ${campaign.subject}`);
  console.log(`   List: ${campaign.email_list_uuid}`);

  await manager.sendCampaign(campaignUuid);
}

async function handleStatus(
  manager: MailcoachCampaignManager,
  args: string[]
): Promise<void> {
  const campaignUuid = args[1];

  if (!campaignUuid) {
    console.error("❌ Usage: npm run campaign status <campaign-uuid>");
    process.exit(1);
  }

  const campaign = await manager.getCampaign(campaignUuid);

  console.log(`\n📋 Campaign Status:`);
  console.log(`   UUID: ${campaign.uuid}`);
  console.log(`   Name: ${campaign.name}`);
  console.log(`   Subject: ${campaign.subject || "Not set"}`);
  console.log(`   Status: ${campaign.status}`);
  console.log(`   List UUID: ${campaign.email_list_uuid}`);
  console.log(
    `   Sent to: ${campaign.sent_to_number_of_subscribers} subscribers`
  );
  console.log(
    `   Opens: ${campaign.unique_open_count} (${campaign.open_rate}%)`
  );
  console.log(
    `   Clicks: ${campaign.unique_click_count} (${campaign.click_rate}%)`
  );
  console.log(
    `   Unsubscribes: ${campaign.unsubscribe_count} (${campaign.unsubscribe_rate}%)`
  );

  if (campaign.sent_at) {
    console.log(`   Sent at: ${campaign.sent_at}`);
  }

  if (campaign.scheduled_at) {
    console.log(`   Scheduled at: ${campaign.scheduled_at}`);
  }
}

async function handleDelete(
  manager: MailcoachCampaignManager,
  args: string[]
): Promise<void> {
  const campaignUuid = args[1];
  const confirmed = args.includes("--confirm");

  if (!campaignUuid) {
    console.error(
      "❌ Usage: npm run campaign delete <campaign-uuid> --confirm"
    );
    process.exit(1);
  }

  if (!confirmed) {
    console.error("❌ You must add --confirm to delete the campaign");
    process.exit(1);
  }

  await manager.deleteCampaign(campaignUuid);
}

function handleList(manager: MailcoachCampaignManager): void {
  console.log(`\n📧 Available Newsletters:`);
  console.log(`${"ID".padEnd(8)} ${"Title".padEnd(50)} Date`);
  console.log(`${"—".repeat(8)} ${"—".repeat(50)} ${"—".repeat(15)}`);

  manager.listNewsletters().forEach((newsletter) => {
    console.log(
      `${newsletter.id.padEnd(8)} ${newsletter.title.padEnd(50)} ${newsletter.date}`
    );
    console.log(`         ${newsletter.description}`);
    console.log("");
  });
}

function showHelp(): void {
  console.log(`
📧 Mailcoach Campaign Manager

Usage:
  npm run campaign <command> [options]

Commands:
  create <newsletter-id> [custom-name] [custom-subject] [--test]  Create a new campaign
  test <campaign-uuid> <email1> [email2]...        Send test emails
  send <campaign-uuid> --confirm                    Send campaign to all subscribers
  full <newsletter-id> <test-email1> [test-email2]...  Complete workflow: create test + prod campaigns
  status <campaign-uuid>                            Show campaign status
  delete <campaign-uuid> --confirm                  Delete a campaign
  list                                              List available newsletters

Examples:
  # List available newsletters
  npm run campaign list

  # Create campaign using newsletter title (simplest)
  npm run campaign create 001

  # Create test campaign using newsletter title
  npm run campaign create 001 --test

  # Create campaign with custom name and subject
  npm run campaign create 001 "Custom Campaign Name" "Custom Subject Line"

  # Send test emails
  npm run campaign test abc-123-def test@example.com

  # Full workflow (recommended) - uses newsletter title automatically
  npm run campaign full 001 test@example.com

  # Send production campaign
  npm run campaign send abc-123-def --confirm

  # Check campaign status
  npm run campaign status abc-123-def

Environment Variables Required:
  MAILCOACH_API_KEY     Your Mailcoach API key
  MAILCOACH_URL         Your Mailcoach API URL (e.g., https://bandoco.mailcoach.app/api)
  LIST_ID               Production email list UUID
  TEST_LIST_ID          Test email list UUID (optional, uses production if not set)
`);
}

// Run the CLI - Check if this file is being executed directly
if (
  process.argv[1].endsWith("campaign-manager.tsx") ||
  process.argv[1].endsWith("campaign-manager.js")
) {
  main().catch(console.error);
}

export {
  MailcoachCampaignManager,
  type Campaign,
  type CreateCampaignOptions,
  type NewsletterProps,
};