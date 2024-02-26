import { Boundary } from '#/ui/boundary';
import { TabGroup } from '#/ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['dynamic-programming/@audience/layout.tsx']} size="small">
      <div className="space-y-8">
        <TabGroup
          path="/dynamic-programming"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Description',
              slug: 'description',
            },
            {
              text: 'Examples',
              slug: 'examples',
            },
          ]}
        />

        {children}
      </div>
    </Boundary>
  );
}
