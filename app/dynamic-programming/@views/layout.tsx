import { Boundary } from '#/ui/boundary';
import { TabGroup } from '#/ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['dynamic-programming/@views/layout.tsx']} size="small">
      <div className="space-y-8">
        <TabGroup
          path="/dynamic-programming"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Impressions',
              slug: 'impressions',
            },
            {
              text: 'View Duration',
              slug: 'view-duration',
            },
          ]}
        />
        {children}
      </div>
    </Boundary>
  );
}
