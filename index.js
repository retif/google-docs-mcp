#!/usr/bin/env node

// Entry point for the Google Docs MCP Server
// This imports and runs the compiled server from the dist directory

// Handle broken pipe gracefully (exit instead of spinning)
process.on('SIGPIPE', () => process.exit(0));
process.on('uncaughtException', (err) => {
  if (err.code === 'EPIPE' || err.code === 'ERR_STREAM_DESTROYED') {
    process.exit(0);
  }
  console.error('Uncaught exception:', err);
  process.exit(1);
});

import './dist/server.js';
