import { useState } from "react";
import { Loader2, LogIn, Users, RefreshCw, AlertCircle, Shield } from "lucide-react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

interface Lead {
  id: number;
  createdAt: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message: string;
  sourcePage?: string;
  status?: string;
}

const STATUS_COLORS: Record<string, string> = {
  new: "bg-green-500/15 text-green-400 border-green-500/30",
  contacted: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  qualified: "bg-gold/15 text-gold border-gold/30",
  closed: "bg-gray-500/15 text-gray-400 border-gray-500/30",
};

export default function Admin() {
  const [token, setToken] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authErr, setAuthErr] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Lead | null>(null);

  const fetchLeads = async (t: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${BASE}/api/admin/leads`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      if (res.status === 401) {
        setAuthErr("Incorrect token. Please try again.");
        setAuthed(false);
        return;
      }
      if (!res.ok) throw new Error("Failed to fetch leads");
      const data = await res.json() as { leads: Lead[] };
      setLeads(data.leads);
      setAuthed(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthErr("");
    await fetchLeads(token);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-gold" />
            </div>
            <h1 className="font-serif text-2xl text-white">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Clarivo Advisory · Internal</p>
          </div>
          <form onSubmit={handleLogin} className="glassmorphism rounded-2xl p-8 border border-white/10 space-y-4">
            <div>
              <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Admin Token</label>
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
                placeholder="Enter admin token"
                className="w-full bg-navy-deep border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            {authErr && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                {authErr}
              </div>
            )}
            <button
              type="submit"
              disabled={loading || !token}
              className="w-full bg-gold text-navy-deep font-bold py-3 rounded flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogIn className="w-4 h-4" />}
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600 text-xs">
            <a href="/" className="hover:text-gray-400 transition-colors">← Back to website</a>
          </p>
        </div>
      </div>
    );
  }

  const newCount = leads.filter((l) => l.status === "new" || !l.status).length;

  return (
    <div className="min-h-screen bg-navy-deep text-white">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 bg-navy-deep/95 backdrop-blur z-10">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-gold" />
          <span className="font-serif text-lg">Clarivo Admin</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchLeads(token)}
            disabled={loading}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
          <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded">
            View Site
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: leads.length, icon: Users, color: "text-white" },
            { label: "New", value: newCount, icon: Users, color: "text-green-400" },
            { label: "This Week", value: leads.filter(l => new Date(l.createdAt) > new Date(Date.now() - 7*86400000)).length, icon: Users, color: "text-gold" },
            { label: "This Month", value: leads.filter(l => new Date(l.createdAt) > new Date(Date.now() - 30*86400000)).length, icon: Users, color: "text-blue-400" },
          ].map((stat) => (
            <div key={stat.label} className="glassmorphism rounded-xl p-5 border border-white/10">
              <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-red-900/20 border border-red-500/30 rounded-lg px-4 py-3 mb-6">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-300">{error}</span>
          </div>
        )}

        <div className={`grid gap-6 ${selected ? "lg:grid-cols-2" : "grid-cols-1"}`}>
          {/* Leads Table */}
          <div className="glassmorphism rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="font-semibold text-white">Recent Leads</h2>
              <span className="text-xs text-gray-400">{leads.length} total</span>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 text-gold animate-spin" />
              </div>
            ) : leads.length === 0 ? (
              <div className="py-16 text-center text-gray-500">No leads yet</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 text-xs uppercase tracking-wider border-b border-white/5">
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3 hidden md:table-cell">Project</th>
                      <th className="px-6 py-3 hidden lg:table-cell">Date</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {leads.map((lead) => (
                      <tr
                        key={lead.id}
                        onClick={() => setSelected(selected?.id === lead.id ? null : lead)}
                        className={`cursor-pointer hover:bg-white/5 transition-colors ${selected?.id === lead.id ? "bg-gold/5" : ""}`}
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-white">{lead.name}</div>
                          <div className="text-gray-400 text-xs">{lead.email}</div>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell text-gray-300">{lead.projectType ?? "—"}</td>
                        <td className="px-6 py-4 hidden lg:table-cell text-gray-400">
                          {new Date(lead.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_COLORS[lead.status ?? "new"] ?? STATUS_COLORS["new"]}`}>
                            {lead.status ?? "new"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Lead Detail */}
          {selected && (
            <div className="glassmorphism rounded-2xl border border-white/10 p-6 self-start sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-white">Lead Details</h3>
                <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-white text-xl leading-none">&times;</button>
              </div>
              <div className="space-y-4 text-sm">
                {([
                  ["Name", selected.name],
                  ["Email", selected.email],
                  ["Company", selected.company],
                  ["Phone", selected.phone],
                  ["Project Type", selected.projectType],
                  ["Budget", selected.budget],
                  ["Source", selected.sourcePage],
                  ["Date", new Date(selected.createdAt).toLocaleString("en-IN")],
                ] as [string, string | undefined][]).map(([label, value]) =>
                  value ? (
                    <div key={label} className="border-b border-white/5 pb-3">
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{label}</div>
                      <div className="text-white">{value}</div>
                    </div>
                  ) : null
                )}
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Message</div>
                  <div className="text-gray-200 bg-navy-deep rounded-lg p-3 leading-relaxed whitespace-pre-wrap">{selected.message}</div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={`mailto:${selected.email}?subject=Re: Your Clarivo Advisory Enquiry`}
                    className="flex-1 text-center bg-gold text-navy-deep font-bold py-2.5 rounded text-sm hover:bg-gold-dark transition-colors"
                  >
                    Reply by Email
                  </a>
                  {selected.phone && (
                    <a
                      href={`https://wa.me/${selected.phone.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(selected.name)}%2C%20this%20is%20Shiv%20from%20Clarivo%20Advisory%20following%20up%20on%20your%20enquiry.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-[#25D366] text-white font-bold py-2.5 rounded text-sm hover:bg-[#20bd5a] transition-colors"
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
