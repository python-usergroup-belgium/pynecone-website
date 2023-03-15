<div align="center"><img width="20%" src="https://raw.githubusercontent.com/python-usergroup-belgium/pynecone-website/main/assets/logo.png"/></div>

# Pynecone website

> Python-powered website for the Python User Group Belgium.

## Powered by

- Python 3.11 ⚡️
- Pynecone 🎍

## About

### Pynecone

[Pynecone](https://pynecone.io/) is a Python framework for building web apps. The code is transpiled to [Next.js](https://nextjs.org/), placed in the `.web/` directory.

### Hosting

The website is static, hosted on [GitHub Pages](https://pages.github.com/).

### Content

The content is pulled from the [`python-usergroup-belgium/.github`](https://github.com/python-usergroup-belgium/.github) as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules), updated daily. Changes should be made there.

### Dependencies

Dependencies and environments are tracked using [Poetry](https://python-poetry.org/).

### GitHub Actions (CICD)

Updates on the content ([`python-usergroup-belgium/.github`](https://github.com/python-usergroup-belgium/.github) repo) are updated and deployed daily. Pushing changes on `main` branch also triggers a rebuild and redeployment. See the [nextjs.yml](https://github.com/python-usergroup-belgium/pynecone-website/blob/main/.github/workflows/nextjs.yml) for more info.

## Get started

### Clone the repo

```commandline
git clone --recurse-submodules git@github.com:python-usergroup-belgium/pynecone-website.git
```

### Set up dependencies

```commandline
pip install poetry==1.2.2
cd pynecone-website/
poetry shell              # Make sure you have Python 3.11 installed
poetry install
pre-commit install        # Install the pre-commmit hooks
```
or copy and use this One-Liner: 

```commandline
git clone --recurse-submodules git@github.com:python-usergroup-belgium/pynecone-website.git && sudo apt-get install pip -y && pip install poetry==1.2.2 && pip install pre-commit && cd pynecone-website/ && poetry shell && poetry install && pre-commit install ```
