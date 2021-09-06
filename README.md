# Blogging via LBRY

A demo for how you can build a blog using LBRY. All the data is stored on LBRY. The frontend (Gatsby) pulls posts from 
the LBRY daemon to build the site.

```bash
lbrynet start
yarn install
./dev.sh
```

To deploy

```bash
# FIRST commit any changes. then
npx gatsby build && ./deploy.sh
```
