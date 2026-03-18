// External articles from authress.io and dev.to
// Deduplicated: authress.io is canonical when the same article exists on both platforms
export const externalPosts = [
  // ── 2026 ──────────────────────────────────────────────────────────────────
  { title: 'Actually Fixing AWS S3', url: 'https://authress.io/knowledge-base/articles/2026/03/14/how-aws-can-fix-s3', date: '2026-03-14', source: 'authress' },
  { title: 'Securing CI/CD Access to AWS', url: 'https://authress.io/knowledge-base/articles/2026/03/03/securing-aws-accounts-access', date: '2026-03-03', source: 'authress' },

  // ── 2025 ──────────────────────────────────────────────────────────────────
  { title: 'Slow and boring? Secrets to building reliable software', url: 'https://authress.io/knowledge-base/articles/2025/12/03/secrets-building-reliable-software', date: '2025-12-03', source: 'authress' },
  { title: 'How when AWS was down, we were not', url: 'https://authress.io/knowledge-base/articles/2025/11/01/how-we-prevent-aws-downtime-impacts', date: '2025-11-01', source: 'authress' },
  { title: 'AWS Auth Caching Strategies', url: 'https://dev.to/aws-builders/aws-auth-caching-strategies-4121', date: '2025-06-17', source: 'devto' },
  { title: 'API Gateway Authorizers: Vulnerable By Design', url: 'https://authress.io/knowledge-base/articles/2025/05/25/api-gateway-authorizers-vulnerable-by-design', date: '2025-05-25', source: 'authress' },
  { title: 'What the @#!? is Auth', url: 'https://authress.io/knowledge-base/articles/2025/05/26/what-the-heck-is-auth', date: '2025-05-26', source: 'authress' },
  { title: 'The Blog Post Release Automation', url: 'https://dev.to/aws-builders/the-blog-post-release-automation-3kbd', date: '2025-05-19', source: 'devto' },
  { title: 'Meeting Impossible SLAs: How we made our uptime 99.999%', url: 'https://authress.io/knowledge-base/articles/2025/03/18/meeting-impossible-slas', date: '2025-03-18', source: 'authress' },
  { title: 'Unintended consequences of well-meaning changes', url: 'https://authress.io/knowledge-base/articles/2025/03/13/using-systems-thinking-to-understand-unintended-consequences', date: '2025-03-13', source: 'authress' },
  { title: 'Your source code is not that special', url: 'https://authress.io/knowledge-base/articles/2025/02/03/your-source-code-is-not-that-special', date: '2025-02-03', source: 'authress' },
  { title: 'The Risks of User Impersonation', url: 'https://dev.to/authress/the-risks-of-user-impersonation-58nf', date: '2025-01-24', source: 'devto' },
  { title: 'Migrating CloudFormation to TF', url: 'https://dev.to/aws-builders/migrating-cloudformation-to-tf-bo9', date: '2025-01-21', source: 'devto' },
  { title: 'Your security team\'s job is not security', url: 'https://authress.io/knowledge-base/articles/2025/01/20/your-security-teams-job-is-not-security', date: '2025-01-20', source: 'authress' },
  { title: 'Magic links and Passwordless login', url: 'https://authress.io/knowledge-base/articles/magic-links-passwordless-login', date: '2025-01-15', source: 'authress' },
  { title: 'Are millions of accounts vulnerable due to Google\'s OAuth Flaw?', url: 'https://authress.io/knowledge-base/articles/2025/01/15/google-oauth-workspace-vulnerability', date: '2025-01-15', source: 'authress' },
  { title: 'AWS Advanced: The Quota Monitor Review', url: 'https://dev.to/aws-builders/aws-advanced-improving-the-quota-monitor-3e6l', date: '2025-01-09', source: 'devto' },
  { title: 'Forget the checkboxes, make your security BLISS', url: 'https://authress.io/knowledge-base/articles/2025/01/03/bliss-security-framework', date: '2025-01-03', source: 'authress' },

  // ── 2024 ──────────────────────────────────────────────────────────────────
  { title: 'Idempotency in DynamoDB', url: 'https://dev.to/aws-builders/idempotency-in-dynamodb-4leh', date: '2024-11-22', source: 'devto' },
  { title: 'Security or Convenience — Why Not Both?', url: 'https://authress.io/knowledge-base/articles/2024/11/19/security-or-convenience-why-not-both', date: '2024-11-19', source: 'authress' },
  { title: 'OAuth Login should be standardized — and this is why it cannot be', url: 'https://authress.io/knowledge-base/articles/oauth-identity-login-trust-relationship', date: '2024-10-27', source: 'authress' },
  { title: 'Ensuring the reliability of Authress', url: 'https://authress.io/knowledge-base/articles/2024/09/04/aws-ensuring-reliability-of-authress', date: '2024-09-04', source: 'authress' },
  { title: 'AWS Advanced: Getting SES Production Access', url: 'https://dev.to/aws-builders/aws-advanced-getting-ses-production-access-177j', date: '2024-08-25', source: 'devto' },
  { title: 'Securing your secrets in AWS', url: 'https://dev.to/aws-builders/securing-your-secrets-in-aws-kh5', date: '2024-07-24', source: 'devto' },
  { title: 'Challenges building solutions for user sharable resources', url: 'https://authress.io/knowledge-base/articles/2024/07/21/user-resource-sharing-challenges', date: '2024-07-21', source: 'authress' },
  { title: 'Why you should check your secrets into git', url: 'https://authress.io/knowledge-base/articles/2024/07/02/devweek-why-you-should-check-your-secrets-into-git', date: '2024-07-02', source: 'authress' },
  { title: 'How to estimate ROI on Security', url: 'https://authress.io/knowledge-base/articles/2024/06/18/estimating-roi-on-security', date: '2024-06-18', source: 'authress' },
  { title: 'Build, buy, or use open source', url: 'https://authress.io/knowledge-base/articles/2024/06/14/build-versus-buy-versus-open-source', date: '2024-06-14', source: 'authress' },
  { title: 'Building a Security-First API', url: 'https://authress.io/knowledge-base/articles/2024/05/10/techspot-building-security-first-apis', date: '2024-05-10', source: 'authress' },
  { title: 'Adding Security to your Architecture', url: 'https://authress.io/knowledge-base/articles/2024/03/08/decompiled-adding-security-to-your-architecture', date: '2024-03-08', source: 'authress' },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  { title: 'How does machine to machine authentication work?', url: 'https://dev.to/authress/how-does-machine-to-machine-authentication-work-569d', date: '2023-12-06', source: 'devto' },
  { title: 'AWS Advanced: Serverless Prometheus in Action', url: 'https://dev.to/authress/aws-advanced-serverless-prometheus-in-action-j1h', date: '2023-08-22', source: 'devto' },
  { title: 'AWS Metrics: Advanced', url: 'https://dev.to/authress/aws-metrics-advanced-40f8', date: '2023-08-22', source: 'devto' },
  { title: 'AWS VPC: Private Subnets Increase Risk', url: 'https://dev.to/wparad/aws-vpc-private-subnets-increase-risk-4147', date: '2023-07-23', source: 'devto' },
  { title: 'Marketing your Product effectively', url: 'https://dev.to/wparad/marketing-your-product-effectively-3l89', date: '2023-07-10', source: 'devto' },
  { title: 'The Devastating Failure of Technical Leadership', url: 'https://dev.to/wparad/the-devastating-failure-of-technical-leadership-3d1d', date: '2023-07-10', source: 'devto' },
  { title: 'Denylists and Invaliding user access', url: 'https://dev.to/authress/denylists-and-invaliding-user-access-1cgl', date: '2023-07-05', source: 'devto' },
  { title: 'Myths about API HTTP clients', url: 'https://dev.to/authress/myths-about-api-http-clients-ecc', date: '2023-06-29', source: 'devto' },
  { title: 'Auth situation report', url: 'https://authress.io/knowledge-base/articles/auth-situation-report', date: '2023-05-28', source: 'authress' },
  { title: 'You are probably testing wrong', url: 'https://dev.to/wparad/you-are-probably-testing-wrong-4il3', date: '2023-02-02', source: 'devto' },

  // ── 2022 ──────────────────────────────────────────────────────────────────
  { title: 'Measuring team success', url: 'https://dev.to/standup-and-prosper/measuring-team-success-onf', date: '2022-09-05', source: 'devto' },
  { title: 'The Required team meetings', url: 'https://dev.to/standup-and-prosper/the-required-team-meetings-5a3f', date: '2022-09-05', source: 'devto' },
  { title: 'Breaking up the monolith: Breaking changes', url: 'https://dev.to/authress/breaking-up-the-monolith-breaking-changes-14dd', date: '2022-08-05', source: 'devto' },
  { title: 'AWS CloudWatch: How to scale your logging infrastructure', url: 'https://dev.to/authress/aws-cloudwatch-how-to-scale-your-logging-infrastructure-8j0', date: '2022-05-30', source: 'devto' },
  { title: 'Step-up authorization', url: 'https://dev.to/authress/step-up-authorization-5fbf', date: '2022-05-24', source: 'devto' },
  { title: 'Breaking up the monolith: Zero downtime migrations', url: 'https://dev.to/authress/breaking-up-the-monolith-zero-downtime-migrations-57ap', date: '2022-05-24', source: 'devto' },
  { title: 'Adding Custom Domains to your SaaS', url: 'https://dev.to/authress/adding-custom-domains-to-your-saas-4hci', date: '2022-02-25', source: 'devto' },
  { title: 'AWS Cognito: Don\'t go to production', url: 'https://dev.to/authress/aws-cognito-dont-go-to-production-38h3', date: '2022-01-23', source: 'devto' },
  { title: 'My DNS doesn\'t work', url: 'https://dev.to/authress/my-dns-doesnt-work-52el', date: '2022-01-21', source: 'devto' },

  // ── 2021 ──────────────────────────────────────────────────────────────────
  { title: 'AWS Step Functions: Advanced', url: 'https://dev.to/wparad/aws-step-functions-advanced-30k2', date: '2021-12-20', source: 'devto' },
  { title: 'I got a CORS error, now what?', url: 'https://dev.to/authress/i-got-a-cors-error-now-what-hpb', date: '2021-11-12', source: 'devto' },
  { title: 'Breaking up the monolith: Magic identifiers', url: 'https://dev.to/authress/breaking-up-the-monolith-magic-identifiers-3082', date: '2021-10-20', source: 'devto' },
  { title: 'Can\'t connect to service running in EC2', url: 'https://dev.to/wparad/can-t-connect-to-service-running-in-ec2-1280', date: '2021-09-21', source: 'devto' },
  { title: 'JWT access token misconceptions', url: 'https://authress.io/knowledge-base/articles/authorization-token-access-token-jwt-myths', date: '2021-08-10', source: 'authress' },
  { title: 'When to use AWS Credentials', url: 'https://dev.to/authress/when-to-use-aws-credentials-2ki4', date: '2021-08-22', source: 'devto' },
  { title: 'The Punishment of Building a Slack App', url: 'https://dev.to/standup-and-prosper/the-punishment-of-building-a-slack-app-2agp', date: '2021-08-22', source: 'devto' },
  { title: 'Handling security of long running transactions', url: 'https://authress.io/knowledge-base/articles/security-of-long-running-transactions', date: '2021-07-23', source: 'authress' },
  { title: 'AWS + Gitlab — Leveling up security of your CICD platform', url: 'https://authress.io/knowledge-base/articles/aws-gitlab-cicd-login-authentication', date: '2021-06-14', source: 'authress' },
  { title: 'Creating resources in custom AWS accounts', url: 'https://dev.to/wparad/creating-resources-in-custom-aws-accounts-50b0', date: '2021-06-14', source: 'devto' },
  { title: 'AWS DynamoDB: Single or Multitable', url: 'https://dev.to/wparad/aws-dynamodb-single-or-multitable-54np', date: '2021-06-07', source: 'devto' },
  { title: 'To message bus or not to message bus', url: 'https://dev.to/wparad/to-message-bus-or-not-to-message-bus-gb1', date: '2021-06-07', source: 'devto' },
  { title: 'Things that are wrong with Terraform', url: 'https://dev.to/wparad/things-that-are-wrong-with-terraform-g87', date: '2021-06-07', source: 'devto' },
  { title: 'Making an infinite CSS carousel', url: 'https://dev.to/wparad/making-an-infinite-css-carousel-2dek', date: '2021-04-11', source: 'devto' },
  { title: 'Security for deleting resources', url: 'https://dev.to/authress/security-for-deleting-resources-273l', date: '2021-02-06', source: 'devto' },
  { title: 'The Wolf Pack Team', url: 'https://dev.to/standup-and-prosper/the-wolf-pack-team-4hfa', date: '2021-02-04', source: 'devto' },
  { title: 'Breach — Enabling emergency data protection', url: 'https://dev.to/authress/breach-enabling-emergency-data-protection-44jn', date: '2021-01-08', source: 'devto' },
  { title: 'Promotion in Action: What everyone should know to get to the next level', url: 'https://dev.to/wparad/promotion-in-action-what-everyone-should-know-to-get-to-the-next-level-n85', date: '2021-01-08', source: 'devto' },
  { title: 'API Authentication: Creating service client API keys', url: 'https://dev.to/authress/api-authentication-creating-service-client-api-keys-25i6', date: '2021-01-03', source: 'devto' },

  // ── 2020 ──────────────────────────────────────────────────────────────────
  { title: 'Setup user authentication with any identity provider', url: 'https://dev.to/authress/setup-user-authentication-with-any-identity-provider-31kg', date: '2020-11-13', source: 'devto' },
  { title: 'Validating JWTs in Web APIs', url: 'https://authress.io/knowledge-base/articles/how-to-verify-jwt-in-web-app', date: '2020-11-08', source: 'authress' },
  { title: 'How to secure a multitenant application architecture', url: 'https://authress.io/knowledge-base/articles/creating-a-multitenant-application', date: '2020-07-12', source: 'authress' },
  { title: 'Choosing the right error code: 401, 403, or 404', url: 'https://authress.io/knowledge-base/articles/choosing-the-right-http-error-code-401-403-404', date: '2020-07-01', source: 'authress' },
  { title: 'To authenticate or to authorize — what is the difference?', url: 'https://authress.io/knowledge-base/articles/authn-vs-authz', date: '2020-06-09', source: 'authress' },
  { title: 'Zoommodbombing — a case study of data protection', url: 'https://authress.io/knowledge-base/articles/zoom-case-study', date: '2020-06-08', source: 'authress' },
  { title: 'So you want to build your own authorization?', url: 'https://authress.io/knowledge-base/articles/so-you-want-your-own-authorization', date: '2020-05-29', source: 'authress' },
  { title: 'Why companies gamble on user data privacy', url: 'https://authress.io/knowledge-base/articles/companies-gamble-on-privacy', date: '2020-05-27', source: 'authress' },
  { title: 'Securely store client IDs and secret access keys', url: 'https://authress.io/knowledge-base/articles/securely-store-client-key-secret', date: '2020-02-10', source: 'authress' },
].sort((a, b) => {
  if (!a.date && !b.date) return 0;
  if (!a.date) return 1;
  if (!b.date) return -1;
  return b.date.localeCompare(a.date);
});
