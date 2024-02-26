import { Boundary } from '#/ui/boundary';
import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <Boundary labels={['dynamic-programming/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Dynamic Programming</h2>
        <ul>
          <li>
          The term dynamic programming describes the approach that breaks problems up into 
          overlapping sub-problems before solving them where {' '}
            <a href="https://en.wikipedia.org/wiki/Bellman_equation#/media/File:Bellman_flow_chart.png">
              Principle of Optimality
            </a>{' '} must apply. 
          
          </li>
          <li>
            The Principle of Optimality says that if the solution to every sub-problem is optimal, 
            then the overall solution built on those components is also optimal.
          </li>
          <li>
            Dynamic programming can be used in many areas of research including reinforcement learning
          </li>
          <li>
            Try using the browser&apos;s backwards and forwards navigation.
            Notice the browser&apos;s URL history state and active UI state is
            correctly synced.
          </li>
          <li>
            Try navigating to a tab in one parallel route and refreshing the
            browser. Notice you can choose what UI to show parallel routes that
            don&apos;t match the initial URL.
          </li>
        </ul>
        <div className="flex gap-2">
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes">
            Docs
          </ExternalLink>

          <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/parallel-routes">
            Code
          </ExternalLink>
        </div>
      </div>
    </Boundary>
  );
}
