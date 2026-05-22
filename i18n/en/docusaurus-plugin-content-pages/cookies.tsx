import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Cookie Policy"
      lastUpdated="Last update: February 1, 2025"
      description="Learn how RaidProtect protects your privacy by not using cookies for secure and private browsing. See our policy.">
      <section>
        <p>
          At RaidProtect, we are committed to protecting the privacy and data of our users. As
          part of this commitment, we would like to inform you of our policy regarding the use of
          cookies on our website.
        </p>
      </section>
      <section>
        <h2>1. Use of cookies</h2>
        <p>
          We want to be transparent about the technologies we use. To this end, we would like to
          inform you that our website <strong>does not use cookies</strong>. Cookies are small
          text files that can be used by websites to make the user experience more efficient.
          However, in order to protect the privacy of our users as much as possible, we have
          chosen not to use cookies on our platform.
        </p>
      </section>
      <section>
        <h2>2. What does this mean for you?</h2>
        <p>
          The absence of cookies means that you can browse our website without any information
          about your visit being recorded or analyzed. This is to ensure a private and secure
          browsing experience for all our users.
        </p>
      </section>
      <section>
        <h2>3. How do we protect your privacy?</h2>
        <p>
          In addition to our no cookie policy, we take other measures to protect your privacy and
          personal data. We comply strictly with applicable data protection laws and regulations,
          and implement state-of-the-art information security practices to prevent unauthorized
          access, modification, disclosure or destruction of your personal information.
        </p>
      </section>
      <section>
        <h2>4. Changes to the cookie policy</h2>
        <p>
          We reserve the right to modify this cookie policy at any time. Any changes will be
          effective immediately upon posting on our website. We encourage you to visit this page
          regularly to stay informed about our cookie policy.
        </p>
      </section>
      <section>
        <h2>5. Contact</h2>
        <p>
          If you have any questions or concerns about our cookie policy or how we protect your
          personal data, please contact us at{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
