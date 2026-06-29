import { useState, useEffect, useRef } from "react";

type TabData = {
  id: string;
  name: string;
  cards: { symbol: string; title: string; desc: string; color: string }[];
};

export function Markets() {
  const [activeTab, setActiveTab] = useState("indian");
  const [visibleTab, setVisibleTab] = useState("indian");
  const [fading, setFading] = useState(false);
  const pendingTab = useRef<string | null>(null);

  const switchTab = (id: string) => {
    if (id === activeTab || fading) return;
    pendingTab.current = id;
    setFading(true);
  };

  useEffect(() => {
    if (!fading || !pendingTab.current) return;
    const t = setTimeout(() => {
      setActiveTab(pendingTab.current!);
      setVisibleTab(pendingTab.current!);
      pendingTab.current = null;
      setFading(false);
    }, 180);
    return () => clearTimeout(t);
  }, [fading]);

  const tabs: TabData[] = [
    {
      id: "indian",
      name: "Indian Markets",
      cards: [
        { symbol: "N", color: "bg-blue-600", title: "NIFTY Options", desc: "11-regime composite scoring, VIX kill switches, delta-optimised strike selection, Tuesday expiry (65 lots), Telegram alerts via Dhan API." },
        { symbol: "BN", color: "bg-purple-600", title: "BANK NIFTY", desc: "OI flow analysis, premium velocity gates, EMA/HA composite signals, risk-managed options automation with live monitoring dashboards." },
        { symbol: "SX", color: "bg-green-600", title: "SENSEX", desc: "Thursday expiry automation (20 lots), composite regime scoring, options analytics and position management for SENSEX derivatives." },
        { symbol: "OA", color: "bg-orange-500", title: "Options Analytics", desc: "Greeks-based position management, IV analysis, OI tracking, PCR scoring and multi-strike monitoring." },
        { symbol: "MS", color: "bg-teal-500", title: "Market Scanner", desc: "Real-time NSE market scanners for momentum, breakout, options flow and intraday opportunity detection with alert delivery." },
        { symbol: "RA", color: "bg-red-500", title: "Risk Analytics", desc: "Position sizing calculators, drawdown monitors, VIX-based kill switches and portfolio risk dashboards." },
      ]
    },
    {
      id: "global",
      name: "Global Markets",
      cards: [
        { symbol: "SPY", color: "bg-blue-600", title: "SPY Automation", desc: "US equity index automation covering SPY options, trend-following strategies, earnings event filters via IBKR." },
        { symbol: "QQQ", color: "bg-teal-500", title: "QQQ Automation", desc: "NASDAQ-100 automation covering options strategies, sector rotation signals and risk-managed tech exposure via IBKR." },
        { symbol: "US", color: "bg-indigo-600", title: "US Stocks", desc: "Custom stock screening, options analytics and systematic trading automation via Interactive Brokers API." },
        { symbol: "TV", color: "bg-cyan-600", title: "TradingView", desc: "Pine Script strategy development, webhook alert-to-broker execution and multi-timeframe scanning." },
        { symbol: "RI", color: "bg-blue-400", title: "Research Automation", desc: "Automated market research, earnings analysis, economic calendar integration and AI-powered decision support." },
        { symbol: "RD", color: "bg-red-500", title: "Risk Dashboards", desc: "Portfolio-level risk monitoring, correlation analysis, drawdown alerts and position-level reporting." },
      ]
    },
    {
      id: "forex",
      name: "Forex & Gold",
      cards: [
        { symbol: "EU", color: "bg-blue-600", title: "EURUSD", desc: "Session-aware execution, Markov regime classification, multi-TP management and EV-based trade filtering on MT5 H1." },
        { symbol: "GU", color: "bg-red-600", title: "GBPUSD", desc: "Intraday automation with news event filters, volatility-adjusted position sizing and swing-range TP levels on MT5." },
        { symbol: "XAU", color: "bg-yellow-500", title: "XAUUSD Gold", desc: "Institutional Gold automation. Greek-based position management, Grade A/B regime filtering and multi-tier TP1/TP2/TP3 on MT5." },
        { symbol: "FX", color: "bg-green-600", title: "Forex Workflow", desc: "End-to-end forex trading workflows: signal generation, entry/exit automation, journal integration." },
        { symbol: "TA", color: "bg-purple-600", title: "Trade Analytics", desc: "Win rate analysis, expectancy scoring, drawdown monitoring, session performance breakdown." },
        { symbol: "NE", color: "bg-orange-600", title: "News & Events", desc: "Economic calendar integration, high-impact event kill switches, NFP/CPI session management." },
      ]
    },
    {
      id: "crypto",
      name: "Crypto Market Automation",
      cards: [
        { symbol: "BTC", color: "bg-orange-500", title: "Bitcoin Automation", desc: "Systematic BTC trading strategies with trend-following signals, volatility-adjusted position sizing and automated execution across major crypto exchanges." },
        { symbol: "ETH", color: "bg-indigo-500", title: "Ethereum Strategies", desc: "ETH options and spot automation, gas-aware execution logic, DeFi yield integration and multi-timeframe momentum systems." },
        { symbol: "ARB", color: "bg-teal-500", title: "Crypto Arbitrage", desc: "Cross-exchange arbitrage detection, latency-optimised execution, spread monitoring and automated opportunity capture across centralised and decentralised venues." },
        { symbol: "DeFi", color: "bg-purple-600", title: "DeFi Analytics", desc: "On-chain liquidity analysis, protocol yield tracking, smart contract interaction automation and DeFi portfolio monitoring dashboards." },
        { symbol: "OCH", color: "bg-blue-500", title: "On-Chain Signals", desc: "Wallet flow analysis, exchange inflow/outflow monitoring, whale alert integration and on-chain data pipelines feeding automated trading decisions." },
        { symbol: "CRM", color: "bg-red-500", title: "Crypto Risk Management", desc: "Drawdown controls, volatility kill switches, correlation-based position limits, funding rate monitoring and portfolio-level crypto risk dashboards." },
      ]
    },
    {
      id: "custom",
      name: "Custom Strategy Automation",
      cards: [
        { symbol: "BA", color: "bg-violet-600", title: "Bespoke Algorithm Development", desc: "End-to-end custom algorithm design tailored to your market, timeframe and risk profile — from concept and signal research through to production-ready code." },
        { symbol: "MA", color: "bg-blue-600", title: "Multi-Asset Automation", desc: "Unified automation frameworks spanning equities, forex, commodities and crypto — correlated position management, cross-asset hedging and consolidated reporting." },
        { symbol: "SE", color: "bg-emerald-600", title: "Signal Engine Design", desc: "Custom signal generation pipelines combining technical, fundamental and alternative data sources with configurable filters, confidence scoring and alert delivery." },
        { symbol: "BT", color: "bg-amber-600", title: "Backtesting & Optimisation", desc: "Rigorous historical testing with walk-forward validation, Monte Carlo simulation, parameter sensitivity analysis and overfitting controls for robust strategy development." },
        { symbol: "LD", color: "bg-cyan-600", title: "Live Deployment & Monitoring", desc: "Broker-connected live deployment with real-time monitoring dashboards, automated error recovery, performance logging and continuous health checks." },
        { symbol: "PA", color: "bg-rose-600", title: "Performance Analytics", desc: "Comprehensive strategy reporting covering returns, Sharpe ratio, max drawdown, win rate, expectancy and trade-level attribution for ongoing improvement." },
      ]
    },
    {
      id: "brokers",
      name: "Brokers & Platforms",
      cards: [
        { symbol: "MT5", color: "bg-blue-700", title: "MetaTrader 5", desc: "Custom MQL5 Expert Advisors, indicators and automation scripts. Full EA development from architecture to live broker deployment." },
        { symbol: "IB", color: "bg-red-700", title: "Interactive Brokers", desc: "IBKR Python API automation for portfolio management, options trading, scanner integration." },
        { symbol: "TV", color: "bg-black", title: "TradingView", desc: "Pine Script strategy development, webhook-based alert execution and broker integration." },
        { symbol: "MB", color: "bg-teal-600", title: "Multi-Broker", desc: "IC Markets, Zerodha, 5paisa, Upstox, Dhan, FYERS and other major Indian and global broker APIs supported." },
        { symbol: "TJ", color: "bg-indigo-600", title: "Trade Journal", desc: "Automated trade journal capture, performance analysis, pattern recognition and continuous improvement tracking." },
        { symbol: "MI", color: "bg-emerald-600", title: "Market Data", desc: "Real-time data pipeline design, historical data management, API integration and analytics infrastructure." },
      ]
    }
  ];

  const activeData = tabs.find(t => t.id === activeTab)!;

  return (
    <section id="markets" className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in fade-up">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Institutional-Grade Systems for Market Participants</h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            From NIFTY options to XAUUSD Gold to Interactive Brokers — production-ready automation systems for traders who take markets seriously.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-in fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gold text-navy-deep shadow-[0_0_15px_rgba(244,180,0,0.3)]"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Fixed-height container prevents layout shift */}
        <div
          className="transition-opacity duration-180 ease-in-out"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" style={{ minHeight: "420px" }}>
            {activeData.cards.map((card) => (
              <div
                key={`${activeTab}-${card.symbol}`}
                className="glassmorphism p-6 rounded-xl border border-white/10 hover-lift group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center text-white font-bold shadow-lg text-sm`}>
                    {card.symbol}
                  </div>
                  <svg className="w-16 h-8 text-white/20 group-hover:text-gold/50 transition-colors" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <polyline fill="none" stroke="currentColor" strokeWidth="2" points="0,25 20,20 40,28 60,10 80,15 100,5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-in fade-up">
            <a href="#contact" className="inline-block bg-transparent border-2 border-gold text-gold px-8 py-3 rounded font-bold hover:bg-gold hover:text-navy-deep transition-all gold-glow">
              Enquire about {activeData.name} Automation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
