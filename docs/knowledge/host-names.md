# Host Names

MassEnergize's development workflow has three stages:

1. **Local**: This is where developers will spend most of the time making changes, fixing bugs, and adding new features.

2. **Dev**: Similar to local but instead of running database and API locally, they are available on the cloud.

3. **Canary** (aka staging): This is a replica of the production site where new changes are being tested before pushing to production.

4. **Production**: This is an actual version that users and admins will see.

:::note
There is an extra stage called **Dev** but there is no used to it for the moment.
:::

These domain names are taken from [`views.py`](https://github.com/massenergize/api/blob/development/src/website/views.py)

## Local

If you run the API and community portal locally

### Community Portal

`http://massenergize.test:3000`

### API

`http://communities.massenergize.test:8000`

## Canary

:::info important
Notice the difference in the subdomain of the domain names.
:::

### Community Portal

`https://community-canary.massenergize.org`

### API

`https://communities-canary.massenergize.org`

## Production

### Community Portal

`https://community.massenergize.org`

### API

`https://communities.massenergize.org`

## Dev

### Community Portal

`https://community.massenergize.dev`

### API

`https://communities.massenergize.dev`
