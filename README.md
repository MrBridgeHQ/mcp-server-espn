# ESPN MCP Server

Real-time ESPN sports data for Claude Desktop, Claude Code, ChatGPT and other MCP-compatible assistants.

[![Apify Actor](https://img.shields.io/badge/Apify-Actor-00C7B7?style=for-the-badge&logo=apify&logoColor=white)](https://apify.com/mrbridge/espn-mcp-server?fpr=mrbridge)
[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-5A67D8?style=for-the-badge)](https://modelcontextprotocol.io)
[![Tools](https://img.shields.io/badge/Tools-13-blue?style=flat-square)](#available-tools)
[![Leagues](https://img.shields.io/badge/Leagues-25%2B-green?style=flat-square)](#supported-leagues)

## What does it do?

ESPN MCP Server connects AI assistants to ESPN sports data. It exposes **13 tools** covering live scores, standings, boxscores, play-by-play, betting odds, athlete stats, team rosters, schedules, rankings and news, all reachable through natural language prompts.

No ESPN API key is required.

This repository only holds the tool declarations, so directories can index them. The server itself runs on Apify.

## Available Tools

| Tool | Description |
|------|-------------|
| `espn_search` | Search ESPN for players, teams, and leagues |
| `espn_news` | Latest sports news articles for a sport and league |
| `espn_rankings` | College, UFC, and tennis rankings |
| `espn_scoreboard` | Live and recent scores for any sport and league |
| `espn_standings` | Current league standings with win/loss records |
| `espn_teams` | List all teams or get detailed team info |
| `espn_team_roster` | Full team roster with player details |
| `espn_team_schedule` | Team schedule (past and upcoming games) |
| `espn_game_summary` | Full boxscore, player stats, venue, officials, scoring summary |
| `espn_game_odds` | Betting odds and predictions from multiple providers |
| `espn_athletes` | Athlete profiles, game logs, splits, career stats |
| `espn_live_scoreboard` | Live scoreboard for real-time game tracking |
| `espn_play_by_play` | Play-by-play for a game, filterable by period or last N plays |

## Supported Leagues

NFL, NBA, MLB, NHL, WNBA, College Football, College Basketball, Premier League, La Liga, Bundesliga, Serie A, Ligue 1, Champions League, MLS, F1, NASCAR, UFC, PGA, LPGA, ATP and WTA.

## Quick Start

1. Sign in to [Apify](https://console.apify.com/sign-up?fpr=mrbridge). Claude Desktop uses this account when you connect the server.
2. In Claude Desktop, open Settings, then Connectors, then Add custom connector. Paste this as the Remote MCP server URL:

```
https://mrbridge--espn-mcp-server.apify.actor/mcp
```

3. Click Connect, approve access in the Apify page that opens, then ask: "What are tonight's NBA scores?"

Other clients (Claude Code, ChatGPT, Codex, Cursor, Windsurf, VS Code) use the same endpoint with an Apify API token. The setup steps for each are in the [Store README](https://apify.com/mrbridge/espn-mcp-server?fpr=mrbridge).

### Example prompts

- "What were last night's NBA scores?"
- "Show me the Premier League standings"
- "Give me LeBron James' career stats"
- "What are the odds for tonight's NFL games?"

## Pricing

Pay-per-event on Apify. See the Pricing tab on the [Store page](https://apify.com/mrbridge/espn-mcp-server?fpr=mrbridge) for the current rates.

## Links

- [ESPN MCP Server on the Apify Store](https://apify.com/mrbridge/espn-mcp-server?fpr=mrbridge)
- [ESPN MCP server page on mr-bridge.com](https://mr-bridge.com/solutions/espn-mcp-server)
- [All MrBridge MCP servers](https://mr-bridge.com/mcp-servers)

## License

MIT
