import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const PrivacyPolicy = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <h1 className="text-2xl uppercase font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <div className="prose prose-base text-ce prose-zinc">
          <p className="text-sm leading-8">
            We take your online safety and the security of your information very
            seriously. This policy outlines how we handle that information.
          </p>
          <h4>What information do we collect?</h4>
          <p className="text-sm leading-8">
            Through this website you are able to order products. We DO NOT
            collect credit/debit card information. This data is handled securely
            by a third party payment processor. None of your credit/debit card
            information is stored anywhere on this site.
          </p>
          <h4>How do we use your information?</h4>
          <p className="text-sm leading-8">
            The information you provide about yourself when placing an order is
            used only to complete that order. This information is not shared
            with any third parties except where it is necessary to
            complete/deliver that order. We use email addresses provided to
            answer emails we receive. Your email address is not used for any
            other purpose and is not shared with any third parties. You can
            register for updates on new products, sales, restocked items,
            services and information. Information provided when registering for
            these updates will not be used for any other purpose other than to
            provide the requested information. You can unsubscribe from these
            updates at any time. We may use non-identifying aggregate
            information to better design our website and services but will never
            use or share the personally identifiable information provided to us
            in any other way without also providing you an opportunity to
            opt-out of such unrelated uses.
          </p>
          <h4>How can you access and edit your account information?</h4>
          <p className="text-sm leading-8">
            You can access all your personal information that we collect online
            and maintain by logging into your account with the email address and
            password you created when you registered with us. To ensure your
            privacy and security is protected at all times we take reasonable
            steps to verify your identity before granting access to certain
            parts of the site. In such cases you may be asked to log in a second
            time. If you have any questions or concerns at all regarding these
            privacy policies, please contact us through the inquiries form.
          </p>
          <h4>Disclosure of your information</h4>
          <p className="text-sm leading-8">
            Any personal information you provide to us will be stored on a trust
            worthy hosting provider DigitalOcean, LLC. We do not rent, sell or
            share personal information about you with other people or companies.
            We will use all reasonable efforts to ensure that your personal data
            is not disclosed to regional/national institutions and authorities,
            unless required by law or other regulations.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PrivacyPolicy;
