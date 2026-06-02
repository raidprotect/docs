import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Privacy(): ReactNode {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="Last update: February 1, 2025"
      description="Learn how RaidProtect protects your personal data and ensures the security of your privacy by using our services. Detailed privacy policy.">
      <section>
        <p>
          The present Privacy Policy describes the methods of collection, use and protection of
          personal data within the framework of the services offered by the Discord{' '}
          <strong>RaidProtect</strong> application and the associated website.
        </p>
        <p>
          By using these services, you accept the practices described in this Privacy Policy.{' '}
          <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong>, is committed
          to respecting and protecting your privacy in accordance with applicable law, including
          the General Data Protection Regulation (GDPR) and the French Data Protection Act (
          <em>loi informatique et libertés</em>).
        </p>
      </section>
      <section>
        <h2>1. Collected data</h2>
        <p>
          In order to ensure the operation of the services offered, the Discord{' '}
          <strong>RaidProtect</strong> application and website collect and process the following
          categories of data:
        </p>
        <h3>1.1. Data collected by the Application</h3>
        <ul>
          <li>
            <strong>Discord server configuration</strong>: information on the settings of servers
            using <strong>RaidProtect</strong> (e.g. roles, permissions, configured channels).
          </li>
          <li>
            <strong>Text messages</strong>: any message sent by a user can be collected
            temporarily, as part of moderation services.
          </li>
          <li>
            <strong>Discord events</strong>: events transmitted by Discord, such as the arrival or
            departure of new members, role modifications or message deletions.
          </li>
        </ul>
        <h3>1.2. Data collected by the website</h3>
        <ul>
          <li>
            <strong>Identification data</strong>: information provided by users when registering or
            using online services (e.g. e-mail address, Discord identifiers).
          </li>
          <li>
            <strong>Browsing data</strong>: information on interaction with the website, such as IP
            address, browser type or cookies.
          </li>
        </ul>
      </section>
      <section>
        <h2>2. Purposes of processing</h2>
        <p>The data collected is used exclusively for:</p>
        <ol>
          <li>
            Ensuring the smooth operation of our services (e.g. moderation of Discord servers,
            analysis of community events).
          </li>
          <li>Guaranteeing an optimal, personalized user experience.</li>
          <li>Securing Discord servers by applying administrator-defined rules.</li>
          <li>Maintaining and improving services by analyzing usage.</li>
        </ol>
        <p>Data is not used for commercial or advertising purposes.</p>
      </section>
      <section>
        <h2>3. Data retention</h2>
        <p>
          The personal data collected is kept only for as long as is necessary to achieve the
          purposes defined above. Once this period has elapsed, it is deleted or anonymized.
        </p>
        <ul>
          <li>
            <strong>Text messages</strong>: retained temporarily for processing, then permanently
            deleted.
          </li>
          <li>
            <strong>Server configuration data</strong>: retained for as long as the server uses{' '}
            <strong>RaidProtect</strong> services.
          </li>
          <li>
            <strong>Navigation data</strong>: stored in accordance with applicable legal
            provisions.
          </li>
        </ul>
      </section>
      <section>
        <h2>4. Data sharing</h2>
        <p>
          The data collected is <strong>never shared with third parties</strong>, except in the
          following cases:
        </p>
        <ol>
          <li>
            <strong>Technical partners</strong>: partners required to provide services (e.g.
            hosting or cloud service providers).
          </li>
          <li>
            <strong>Legal obligations</strong>: if the disclosure of data is required by law or by
            a judicial or regulatory authority.
          </li>
        </ol>
      </section>
      <section>
        <h2>5. Data security</h2>
        <p>
          <strong>RaidProtect</strong> implements all technical and organizational measures
          necessary to protect personal data against unauthorized access, loss, destruction or
          alteration. The main measures include:
        </p>
        <ul>
          <li>Encryption of sensitive data.</li>
          <li>Strict control of data access (authentication and logging).</li>
          <li>An infrastructure hosted on secure servers.</li>
        </ul>
      </section>
      <section>
        <h2>6. User rights</h2>
        <p>
          In accordance with the GDPR, users have the following rights over their personal data:
        </p>
        <ul>
          <li>
            <strong>Right of access</strong>: obtain a copy of processed personal data.
          </li>
          <li>
            <strong>Right of rectification</strong>: correct inaccurate or incomplete data.
          </li>
          <li>
            <strong>Right to erasure</strong>: request the deletion of data under certain
            conditions.
          </li>
          <li>
            <strong>Right to restriction</strong>: limit the processing of their data.
          </li>
          <li>
            <strong>Right to object</strong>: to refuse the processing of their data for legitimate
            reasons.
          </li>
          <li>
            <strong>Right to portability</strong>: receive personal data in a structured format.
          </li>
        </ul>
        <p>
          To exercise these rights or ask questions about data management, users can contact the
          Data Protection Officer (DPO) at{' '}
          <a href="mailto:dpo@raidprotect.bot">
            <strong>dpo@raidprotect.bot</strong>
          </a>
          .
        </p>
      </section>
      <section>
        <h2>7. Modification of the Privacy Policy</h2>
        <p>
          This Privacy Policy may be updated at any time to reflect changes in the Services or in
          applicable regulations. Any changes will be published on the website and, if necessary,
          communicated via the Application. By continuing to use the services after the policy has
          been updated, users accept the changes made.
        </p>
      </section>
      <section>
        <h2>8. Contact</h2>
        <p>
          If you have any questions or concerns about our privacy policy or how we protect your
          personal data, please feel free to contact us at{' '}
          <a href="mailto:dpo@raidprotect.bot">
            <strong>dpo@raidprotect.bot</strong>
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
