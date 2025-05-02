import MembersClient from './page.client';

export default function MembersPage({ params }: { params: { organizationId: string } }) {
  return <MembersClient organizationId={params.organizationId} />;
} 