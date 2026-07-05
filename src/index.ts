import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

// ESPN MCP Server - Tool declarations
// Full implementation runs on Apify Standby: https://apify.com/mrbridge/espn-mcp-server?fpr=mrbridge

const server = new McpServer({
  name: "espn-mcp-server",
  version: "0.1.0",
});

server.tool("espn_search", "Search ESPN for players, teams, and leagues", {
  query: z.string().describe("Search query"),
  sport: z.string().optional().describe("Sport filter (football, basketball, baseball, hockey, soccer, mma, racing, tennis, golf)"),
});

server.tool("espn_news", "Latest sports news headlines and articles from ESPN", {
  sport: z.string().optional().describe("Sport filter"),
  league: z.string().optional().describe("League filter (nfl, nba, mlb, nhl, etc.)"),
  limit: z.number().optional().describe("Number of articles to return"),
});

server.tool("espn_rankings", "College, UFC, and tennis rankings", {
  sport: z.string().describe("Sport (football, basketball, mma, tennis)"),
  league: z.string().optional().describe("League"),
});

server.tool("espn_scoreboard", "Live and recent scores for any sport/league", {
  sport: z.string().describe("Sport"),
  league: z.string().describe("League (nfl, nba, mlb, nhl, eng.1, esp.1, etc.)"),
  date: z.string().optional().describe("Date in YYYYMMDD format"),
});

server.tool("espn_standings", "Current league standings with W/L records", {
  sport: z.string().describe("Sport"),
  league: z.string().describe("League"),
  season: z.number().optional().describe("Season year"),
});

server.tool("espn_teams", "List all teams or get detailed team info", {
  sport: z.string().describe("Sport"),
  league: z.string().describe("League"),
  teamId: z.string().optional().describe("Specific team ID"),
});

server.tool("espn_team_roster", "Full team roster with player details", {
  sport: z.string().describe("Sport"),
  league: z.string().describe("League"),
  teamId: z.string().describe("Team ID"),
});

server.tool("espn_team_schedule", "Team game schedule (past & upcoming)", {
  sport: z.string().describe("Sport"),
  league: z.string().describe("League"),
  teamId: z.string().describe("Team ID"),
  season: z.number().optional().describe("Season year"),
});

server.tool("espn_game_summary", "Full boxscore, player stats, venue, officials, attendance and scoring summary", {
  sport: z.string().describe("Sport"),
  league: z.string().describe("League"),
  gameId: z.string().describe("Game/event ID"),
});

server.tool("espn_game_odds", "Betting odds from multiple providers", {
  sport: z.string().describe("Sport"),
  league: z.string().describe("League"),
  gameId: z.string().describe("Game/event ID"),
});

server.tool("espn_athletes", "Athlete profiles, game logs, splits, career stats", {
  sport: z.string().describe("Sport"),
  league: z.string().describe("League"),
  athleteId: z.string().describe("Athlete ID"),
});

server.tool("espn_live_scoreboard", "CDN-optimized live scoreboard with real-time updates", {
  sport: z.string().describe("Sport"),
  league: z.string().describe("League"),
});
