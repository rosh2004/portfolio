interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div>
    <h1>From: {name}</h1>
    <h2>From: {email}</h2>
    <p>{message}</p>
  </div>
);