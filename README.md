# ESPN MCP Server

**Real-time ESPN sports data for Claude Desktop, Claude Code & MCP-compatible AI assistants.**

[![Apify Actor](https://img.shields.io/badge/Apify-Actor-00C7B7?style=for-the-badge&logo=apify&logoColor=white)](https://apify.com/mrbridge/espn-mcp-server?fpr=mrbridge)
[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-5A67D8?style=for-the-badge)](https://modelcontextprotocol.io)
[![Tools](https://img.shields.io/badge/Tools-12-blue?style=flat-square)](#available-tools)
[![Leagues](https://img.shields.io/badge/Leagues-25%2B-green?style=flat-square)](#supported-leagues)

## What does it do?

ESPN MCP Server connects AI assistants directly to ESPN's real-time sports data. It exposes **12 specialized tools** covering live scores, standings, boxscores, betting odds, player stats, team rosters, schedules, rankings, and news - all accessible through natural language prompts.

**No ESPN API key required.** Just connect and ask.

## Available Tools

| Tool | Description |
|------|-------------|
| `espn_search` | Search ESPN for players, teams, and leagues |
| `espn_news` | Latest sports news headlines and articles |
| `espn_rankings` | College, UFC, and tennis rankings |
| `espn_scoreboard` | Live and recent scores for any sport/league |
| `espn_standings` | Current league standings with W/L records |
| `espn_teams` | List all teams or get detailed team info |
| `espn_team_roster` | Full team roster with player details |
| `espn_team_schedule` | Team game schedule (past & upcoming) |
| `espn_game_summary` | Full boxscore, player stats, venue, officials |
| `espn_game_odds` | Betting odds from multiple providers |
| `espn_athletes` | Athlete profiles, game logs, splits, career stats |
| `espn_live_scoreboard` | CDN-optimized live scoreboard with real-time updates |

## Supported Leagues

NFL, NBA, MLB, NHL, WNBA, College Football, College Basketball, Premier League, La Liga, Bundesliga, Serie A, Ligue 1, Champions League, MLS, F1, NASCAR, UFC, PGA, ATP, WTA, and more.

## Quick Start

### Connect to Claude Desktop / Claude Code

1. Get your [Apify API Token](https://console.apify.com/settings/integrations)
2. Add a custom MCP connector with this URL:

```
https://mrbridge--espn-mcp-server.apify.actor/mcp?token=YOUR_APIFY_TOKEN
```

3. Ask Claude: *"What are tonight's NBA scores?"*

### Example prompts

- "What were last night's NBA scores?"
- "Show me the Premier League standings"
- "Give me LeBron James' career stats"
- "What are the odds for tonight's NFL games?"

## Pricing

Pay-per-event on Apify:
- **Reads** (scores, standings, stats): $0.005/call
- **Actions** (search): $0.01/call
- **Free tier**: $5/month Apify credits (~1,000 queries)

## Links

- **Apify Store**: [ESPN MCP Server](https://apify.com/mrbridge/espn-mcp-server?fpr=mrbridge)
- **Full documentation**: See the Apify Store page for detailed README, output examples, and troubleshooting

## License

MIT
