# Issue https://github.com/mikro-orm/mikro-orm/issues/1984

## env (pnpx)
- ts-node: v10.1.0
- tsc: 4.3.5
- node: 16.6.1
- pnpm: 6.12.1
- OS: MacOS 11.2.2

## also (global)
- node: 16.6.1
- tsc: 4.0.5

## Pre
1. `install node`
2. `install docker & docker-compose`
3. `install pnpm`

## Start
1. `run docker-compose up -d`
2. `run pnpm i & pnpm db:m:u`
3. `run pnpm start`
