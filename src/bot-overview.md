# Bot overview

The bot source code is located in the [`raidprotect/raidprotect`](https://github.com/raidprotect/raidprotect)
repository, along with other Rust crates of the project. The bin crate is
located in the `raidprotect` folder.

Before diving into the bot code structure, I recommend you to take a look at the
[Discord Documentation](https://discord.com/developers/docs/intro) if you are
not familiar with bot development.

## Code structure

The following graph is a summary of the `raidprotect/raidprotect` file structure.
Only the most important files and folders are represented to keep the graph
simple to understand.

```
.
├── model/src/  # Models for Redis and MongoDB databases.
│   └── cache/  # Cache models and Discord events caching.
│
├── raidprotect/  # Bot binary
│   ├── locales/  # Localization files.
│   └── src/
│       ├── event/
│       │   ├── process.rs  # Process events and dispatch them to the correct handlers.
│       │   └── */  # Handlers for various events.
│       │
│       ├── interaction/  # Incoming interactions handlers.
│       │   ├── command/  # Command handlers.
│       │   ├── component/  # Component handlers.
│       │   ├── embed/  # Embeds used to respond to interactions.
│       │   └── handle.rs
│       │
│       ├── util/ # Utility functions and shared code.
│       └── cluster.rs  # Shards cluster management.
│
└── README.md, ...
```

## Interactions & slash commands

RaidProtect makes an extensive use of Discord interactions and [slash commands](https://discord.com/developers/docs/interactions/application-commands)
to provide an easy-to-use interface for users to interact with it. Command
parsing is done with the [`twilight-interactions`](https://github.com/baptiste0928/twilight-interactions)
crate.

Interactions that wait for a user action such as buttons and modals are stored
in Redis database to avoid their state to be lost if the bot is restarted during
an update.

## Localization

The bot is available in multiple language, thus all user facing strings are
stored in the `locales` folder in a simple JSON folder. The [`rosetta-i18n`](https://github.com/baptiste0928/rosetta/)
crate is used to generate functions to retrieve these strings at runtime without
dealing with `Result`s.
