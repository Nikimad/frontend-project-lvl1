#!/usr/bin/env node
import messages from '../src/cli.js';

messages.welcome();
messages.greetings(messages.getName());
