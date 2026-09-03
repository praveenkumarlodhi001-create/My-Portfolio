const stack = [
  {
    category: 'Mobile',
    note: 'shipped apps, not just prototypes',
    items: ['React Native', 'Expo', 'Android Studio & Play Console', 'Cross-platform UI'],
  },
  {
    category: 'Backend',
    note: 'services that stay up',
    items: ['Node.js', 'Express', 'REST & WebSocket APIs', 'Auth & session handling'],
  },
  {
    category: 'Real-time & AI',
    note: 'intelligent and reactive systems',
    items: ['Google Generative AI (Gemini)', 'WebSockets / Socket.io', 'Prompt design', 'Streaming responses'],
  },
  {
    category: 'Tools & Workflow',
    note: 'developer environment',
    items: ['Git & GitHub', 'Vercel', 'VS Code', 'Rapid Prototyping'],
  },
];

export default function Skills() {
  return (
    <section id="stack" className="py-24 sm:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight">What I build with</h2>
          <span className="font-mono text-xs text-ink-faint">stack.config</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {stack.map((group) => (
            <div key={group.category} className="border-l-2 border-accent pl-6">
              <h3 className="font-display font-semibold text-lg text-ink mb-1">{group.category}</h3>
              <p className="font-mono text-xs text-ink-faint mb-4">{group.note}</p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-ink-soft text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}