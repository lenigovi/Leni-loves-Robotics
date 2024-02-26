import { Boundary } from '#/ui/boundary';

export default function Page() {
  return (
    <Boundary labels={['@audience/description/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">What is Dynamic Programming?</h2>
      </div>
      <div className="prose prose-sm prose-invert max-w-none">
      <li>
        The term dynamic programming describes the approach that breaks problems up into 
        overlapping sub-problems before solving them where {' '}
        <a href="https://en.wikipedia.org/wiki/Bellman_equation#/media/File:Bellman_flow_chart.png">
        Principle of Optimality
        </a>{' '} must apply.
      </li>
      </div>
    </Boundary>
  );
}
