import { Activity, CheckCircle2, GitBranch, Scale, Trophy } from "lucide-react";

const agents = [
  { name: "HackEval", status: "Running", icon: Trophy, progress: 94 },
  { name: "BitBenchmark", status: "Active", icon: Activity, progress: 78 },
  { name: "LexAI", status: "Ready", icon: Scale, progress: 100 },
  { name: "GitHub Agent", status: "Analyzing", icon: GitBranch, progress: 62 },
];

export function AgentDashboardMock() {
  return (
    <div className="w-full bg-gradient-to-br from-card via-background to-card/80 p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Live Console</p>
          <p className="mt-1 text-lg font-semibold">Agent Orchestration</p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          4 agents online
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="group rounded-xl border border-border/50 bg-background/60 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-glow"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <agent.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{agent.name}</p>
                  <p className="text-xs text-muted-foreground">{agent.status}</p>
                </div>
              </div>
              <CheckCircle2 className="h-4 w-4 text-primary opacity-60" />
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-secondary via-primary to-primary-glow transition-all"
                style={{ width: `${agent.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-primary/20 bg-primary/5 p-4 font-mono text-xs text-muted-foreground">
        <span className="text-primary">&gt;</span> deploy agent --target production --accuracy 95%+
      </div>
    </div>
  );
}
