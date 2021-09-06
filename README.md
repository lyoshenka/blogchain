# Blogging via LBRY

A demo for how you can build a blog using LBRY. All the data is stored on LBRY. The frontend (Gatsby) pulls posts from 
the LBRY daemon to build the site.

Most of the magic is in [this source plugin](https://github.com/lyoshenka/gatsby-source-lbry).

---

Running locally

```bash
lbrynet start
yarn install
./dev.sh
```

Deploying

```bash
# first commit your changes. then
./deploy.sh
```
