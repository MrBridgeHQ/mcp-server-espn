import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

// ESPN MCP Server - Tool declarations
// Full implementation runs on Apify Standby: https://apify.com/mrbridge/espn-mcp-server?fpr=mrbridge

const server = new McpServer({
  name: "espn-mcp-server",
  version: "0.2.3",
});

const tz = z.string().optional().describe("IANA timezone, for example Europe/Paris. Defaults to America/New_York.");
const entityId = z.number().int().positive();
const eventId = z.string().regex(/^[1-9]\d*$/, "eventId must be a positive integer");

server.tool("espn_search", "Search ESPN globally for players, teams, leagues. Results are fuzzy and cross-type by default (a query for \"Hawks\" returns basketball, football, hockey teams). STRONGLY RECOMMENDED: pass type parameter (\"player\", \"team\", or \"league\") for reliable agent chaining. Tip: use single keywords for best results.", {
  query: z.string().describe("Search query, single keywords work best"),
  limit: z.number().optional().default(10),
  type: z.enum(["player", "team", "league"]).optional().describe("Filter results by type"),
});

server.tool("espn_news", "Get the latest sports news articles for a specific sport and league.", {
  sport: z.string(),
  league: z.string(),
  limit: z.number().optional().default(10),
});

server.tool("espn_rankings", "Get rankings for college sports, UFC divisions, or tennis ATP/WTA rankings.", {
  sport: z.string(),
  league: z.string(),
});

server.tool("espn_scoreboard", "Get live and recent scores for any sport and league. Returns game details including teams, scores, status, and venue.", {
  sport: z.string(),
  league: z.string(),
  date: z.string().optional().describe("Date in YYYYMMDD format"),
  week: z.number().optional(),
  seasonType: z.number().optional().describe("1=preseason, 2=regular, 3=postseason"),
  timezone: tz,
});

server.tool("espn_standings", "Get current league standings with win/loss records. Default sort: by win percentage descending within each group. Use sortBy=\"division\" for ESPN native division order.", {
  sport: z.string(),
  league: z.string(),
  season: z.number().optional(),
  sortBy: z.enum(["record", "division"]).optional().default("record").describe("Sort: \"record\" (default, by win% desc) or \"division\" (ESPN native)"),
});

server.tool("espn_teams", "List all teams in a league or get detailed info about a specific team including logo, colors, and location.", {
  sport: z.string(),
  league: z.string(),
  teamId: entityId.optional(),
  enableRoster: z.boolean().optional(),
});

server.tool("espn_team_roster", "Get the full roster of a specific team with player details, positions, and jersey numbers.", {
  sport: z.string(),
  league: z.string(),
  teamId: entityId,
});

server.tool("espn_team_schedule", "Get the schedule of upcoming and past games for a specific team.", {
  sport: z.string(),
  league: z.string(),
  teamId: entityId,
  season: z.number().optional(),
  timezone: tz,
});

server.tool("espn_game_summary", "Get detailed game analysis: full boxscore with all team and player stats, venue info, attendance, officials, scoring summary, and game leaders. For full play-by-play, use espn_play_by_play.", {
  sport: z.string(),
  league: z.string(),
  eventId,
  timezone: tz,
});

server.tool("espn_game_odds", "Get betting odds and predictions for a game: spread, over/under, moneyline, win percentages from multiple providers.", {
  sport: z.string(),
  league: z.string(),
  eventId,
});

server.tool("espn_athletes", "Get detailed athlete profiles including overview, game log, splits, and career stats.", {
  sport: z.string(),
  league: z.string(),
  athleteId: entityId,
  view: z.enum(["overview", "gamelog", "splits", "stats"]).optional().default("overview"),
  timezone: tz,
});

server.tool("espn_live_scoreboard", "Get live scoreboard data. Best for real-time game tracking.", {
  league: z.string().describe("Short league slug: nfl, nba, mlb, nhl"),
  timezone: tz,
});

server.tool("espn_play_by_play", "Get play-by-play data for a game event. Structured play-by-play available for: NBA, NFL, NHL, MLB, soccer, college basketball, college football. Other sports (tennis, golf, MMA, F1, NASCAR) return a fallback message. NFL uses drive-based format; all others use play-based format. Tip: combine with period filter for specific quarters/periods/innings, or lastN for live tracking.", {
  sport: z.string(),
  league: z.string(),
  eventId,
  period: z.number().optional().describe("Filter to specific period/quarter/inning"),
  lastN: z.number().optional().describe("Return only last N plays AFTER period filter is applied. Use lastN alone for live tracking of overall match recency."),
});
