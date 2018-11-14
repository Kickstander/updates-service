# Kickstarter (Updates Service)

## Screenshot
![screenshot](/screenShots/updates.png)

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

```
// New terminal at each step
npm run start
npm run build
mysql.server start THEN mysql -u root

```

## Endpoints
| Action    | Method | Endpoint                                                       | Purpose           |
|-----------|--------|----------------------------------------------------------------|-------------------|
| Create    | POST   | /api/projects/:projectId/updates                               | Insert new update |
| Read(All) | GET    | /api/projects/:projectId/updates                               | Get all updates   |
| Read(One) | GET    | /api/projects/:projectId/updates[/:updateId, ?name=updateName] | Get one update    |
| Update    | PUT    | /api/projects/:projectId/updates/:updateId                     | Update one update |
| Delete    | DELETE | /api/projects/:projectId/updates/:updateId                     | Delete an update  |


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.12.0
- MySQL v5.7.23

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

