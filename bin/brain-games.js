#!/usr/bin/env node
import messages from '../src/cli.js';

messages.default.welcome();
messages.default.greetings(messages.ask.name());
