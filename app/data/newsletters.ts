import React from "react";

import { LaunchNewsletter } from "../../emails/launch-newsletter";

export interface Newsletter {
  id: string;
  title: string;
  date: string;
  description: string;
  Component: React.FunctionComponent<{
    previewText: string;
    unsubscribeUrl: string;
    web: boolean;
  }>;
}

export const newsletters: Newsletter[] = [
  {
    id: "001",
    title: "Issue #001 - Your Monthly EU Tech Digest",
    date: "June 2025",
    description:
      "Featuring 6 new EU services: Vivaldi Browser, Proton Drive, Mastodon, kDrive, Infomaniak Mail, and Filen. Plus our launch event recap and media coverage.",
    Component: LaunchNewsletter,
  },
];
