---
sidebar_position: 1
---

# Firebase Github Actions

Firebase has its own workflow for setting a project up for deployment. You can find the [official documentation here](https://firebase.google.com/docs/hosting/quickstart) for how to push a project with the CLI, but we want to set it up to work automatically.

## Setting up Github Actions

[Official Docs](https://firebase.google.com/docs/hosting/github-integration)

1. Install the CLI (Follow the [official docs](https://firebase.google.com/docs/cli#install_the_firebase_cli))
2. Use the Firebase CLI to initialize the project for hosting [docs](https://firebase.google.com/docs/cli#install_the_firebase_cli)
   - If you've NOT set up Hosting, run `firebase init hosting` from the root of your project
   - If you have already set up Hosting, run `firebase init hosting:github` and select Hosting
3. Commit the new files to a new branch and push to Github. Make sure the `.github/workflows` files and folders are committed.
4. Go to the Actions tab in your repository and you should see the new workflow.
5. Merge the branch. The actions should run and deploy your site.

On all subsequent merges to the main branch, the actions will run and deploy. There should be a "preview URL" in each PR from now on.

## Setting up a custom domain

Follow the tutorial under Firebase -> [Hosting](/firebase/subdomains-and-multisite/intro.md) to set up a custom domain.
