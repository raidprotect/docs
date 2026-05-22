import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="Last update: February 1, 2025"
      description="See our terms of use to understand our intellectual property rights, hypertext links, personal data management and our responsibility for the RaidProtect site and bot.">
      <section>
        <p>
          By adding RaidProtect to your Discord server, you acknowledge that you have read and
          agree to the Terms of Service. If you do not agree to any of these terms, you must stop
          using our services.
        </p>
      </section>
      <section>
        <h2>1. Intellectual property</h2>
        <p>
          This website, its general structure, the RaidProtect trademark, as well as the texts,
          images, animations, logos and any other element composing it, are the exclusive property
          of SAS French Community Agency or its partners and are protected by French and
          international laws relating to intellectual property. Any reproduction, representation,
          use or adaptation, in any form whatsoever, of all or part of these elements, including
          software, without the prior written authorization of SAS French Community Agency, is
          strictly prohibited and would constitute an infringement.
        </p>
        <p>
          The same provisions apply to the functionalities and source code of the Application,
          which are also protected by intellectual property rights. Any attempt to reproduce,
          modify or make unauthorized use of the Application's functionalities is prohibited and
          liable to legal action.
        </p>
      </section>
      <section>
        <h2>2. Hyperlinks</h2>
        <p>
          Any link to the Site must be authorized in writing in advance by{' '}
          <strong>SAS French Community Agency</strong>. In any event,{' '}
          <strong>SAS French Community Agency</strong> reserves the right to terminate this
          authorization at any time if it considers that the link established with the Site is
          likely to harm the interests of the latter.
        </p>
        <p>
          It is furthermore specified that sites presenting a hypertext link with the present Site
          (hypertext links targeting the Site or established from the Site) are not under the
          control of <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong> and
          its affiliates, who decline all responsibility for their content.
        </p>
      </section>
      <section>
        <h2>3. Using the service</h2>
        <p>
          Our services, including the Application, are free to use for personal or commercial
          purposes. We reserve the right to prohibit the use of our services in the event of use
          that we deem inappropriate or that may harm other Users.
        </p>
      </section>
      <section>
        <h2>4. Liability</h2>
        <h3>4.1. Website</h3>
        <p>
          <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong> and its
          affiliates shall not be liable for any direct or indirect damages resulting from the use
          of the Website or the information contained therein.{' '}
          <strong>SAS French Community Agency</strong> does not guarantee the accuracy or
          completeness of the information presented on the Site and reserves the right to modify
          or delete it at any time, without notice.
        </p>
        <h3>4.2. Application</h3>
        <p>
          The <strong>RaidProtect</strong> Application is provided as is, without warranty of any
          kind, either express or implied. <strong>SAS French Community Agency</strong> cannot be
          held responsible for the consequences of incorrect or improper use of the Application,
          nor for any damage resulting from temporary or permanent malfunction.
        </p>
        <p>
          Administrators of Discord servers using <strong>RaidProtect</strong> are solely
          responsible for configurations made and decisions taken as a result of the Application's
          automated actions (e.g. banning or deleting messages). In the event of any violation of
          Discord's terms of service or applicable laws, the administrators of the server
          concerned bear full responsibility.
        </p>
      </section>
      <section>
        <h2>5. Modification of the Terms of Service</h2>
        <p>
          These Terms of Service may be modified at any time to reflect changes in services or
          applicable regulations. Any changes will be published on the website and, if necessary,
          communicated via the Application. By continuing to use the services after the TOS has
          been updated, users accept the changes made.
        </p>
      </section>
      <section>
        <h2>6. Applicable law and jurisdiction</h2>
        <p>
          These Terms of Service are governed by French law. In the event of dispute, and after an
          attempt at amicable resolution, jurisdiction is attributed to the competent courts of
          Paris, unless otherwise provided by law.
        </p>
      </section>
    </LegalLayout>
  );
}
