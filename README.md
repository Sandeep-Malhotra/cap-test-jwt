# Getting Started

Sample Code to read JWT token.

It contains these folders and files, following our recommended project layout:

| File or Folder | Purpose                              |
| -------------- | ------------------------------------ |
| `app/`         | content for UI frontends goes here   |
| `db/`          | your domain models and data go here  |
| `srv/`         | your service models and code go here |
| `package.json` | project metadata and configuration   |
| `readme.md`    | this getting started guide           |

## Git Branches

| Branch Name      | Purpose                                      | Output                 |
| ---------------- | -------------------------------------------- | ---------------------- |
| `without-uaa`    | App without XSUAA service                    | JWT token is undefined |
| `without-uaa`    | App with XSUAA service but without Approuter | JWT token is undefined |
| `with-approuter` | App without XSUAA service                    | JWT token is defined   |

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)

## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
