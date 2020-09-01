[![TakeShape](https://img.shields.io/badge/cms-takeshape-brightgreen.svg?logoWidth=14&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYFpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/BtEYzZRZKNRLw8qIURMbZSSUpDHKr83MMz/U/Hi99yTZKtspSmz8WvAXsFXWShEpWVhZExum5zyjZpI5t3PP537vPad7zwVHJK1mjJoeyGRNPTwaUmbn5pW6Z5y04cFLS1Q1tKGpqQkq2scdVXa88du1Kp/71xqW4oYKVfXCg6qmm8JjwhOrpmbztrBXTUWXhE+Fu3S5oPCtrceK/GJzsshfNuuR8DA4PMJKsoxjZaym9IywvBxfJr2i/t7Hfokrnp2Zltgu3opBmFFCKIwzwjBBehmQOYifAN2yokJ+z0/+JDnJVWXWWENnmSQpTLpEXZHqcYkJ0eMy0qzZ/f/bVyPRFyhWd4Wg9smy3jqgbgsKecv6PLSswhFUP8JFtpSfO4D+d9HzJc23D+4NOLssabEdON+E5gctqkd/pGpxRyIBryfQOAdN1+BcKPbsd5/je4isy1ddwe4edMp59+I3T6Zn2yrilxMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAJVSURBVGiB7dm/b9NAGMbx70uBMnRhQyA6VMzsiBWJFQYWdthYEP9CN2aG8FdApQpYEBM7A0JCLDCwMVAJIUA8HeIrruPE97O2gx8pSi6SL+/Hd7F9NkyZMuW/jaTLku72XUeRVLhPmude3/VkTQOntUIuwa0HsgM3bqQnLjvSJD3I1Vkjb8zsnWtIugPsuGbtvf55E9it2vfN7GlyFZ57NDTPJJ2JqGUr+0gWwO1JOhtZSxOYjDzdaD8Hfif09xV4ZGa/JF0CrgMb1e9s1F719g8zm63ocyaJ6Ona2FvnozpZ7HNb/geUL7Xt2kYwbSRzAwNxIcA4ZE5gBC4UGI7MBYzExQCDkKdiQU0c8Jp/57nSmfkik4E94Fy8kEnAHnEuncho4ABwLiuRUcAB4VyWIoOBA8S5tCKDgAPGuSwgvYEjwLkcQ3oBR4RzOUI2VxMLkXSRceFcZpL++ozgN+Bj6WoK5AB43wk0s5/ALeBl8ZLy5QC4aWZvvf6DI0Me4SDgKDoS5DEcBJ4HB45cwEHElcxAka04iLwWHRhyKQ4SVhMDQa7EQeJ6sGdkJw4yrOh7QnrhINM9mRNGeuMgExBODBmEA4rc+D0n6UWB24bfJV2LKSgrMALpA4zDMX8+qFr7FWkPX/bN7IlDAlc8tvljZh+qbbaYT8N6wqdlPZ57OSQPowqhdQSjR64kMBrZAKbjmK/oH6d20pILkrbN7LP7QtJt4EbHdu7Badq07CPyP/BkGble4oEcL85lBXL8OJcW5PrgXGrI9cO5VMirfdcxZcqUcjkEtBb8Ina+cYEAAAAASUVORK5CYII=&longCache=true&colorB=5edeb3&colorA=5539d2&style=for-the-badge)](https://www.takeshape.io/)
[![Gatsby.js](https://img.shields.io/badge/ssg-gatsby-brightgreen.svg?logoWidth=14&logo=gatsby&longCache=true&colorB=333333&colorA=663399&style=for-the-badge)](https://www.gatsbyjs.com/)

# Gatsby Starter - TakeShape Portfolio

A [Gatsby](https://www.gatsbyjs.com/) starter for creating a portfolio website with [TakeShape](https://www.takeshape.io). You can see the sample project in action here: [https://shape-portfolio.takeshapesampleproject.com/](https://shape-portfolio.takeshapesampleproject.com/)

## Quickstart

1. First install the starter.

```console
$ npx gatsby new portfolio https://github.com/takeshape/gatsby-starter-takeshape-portfolio
```

> If you prefer you can simply
> [fork this template repository](https://github.com/takeshape/gatsby-starter-takeshape-portfolio/generate)
> and create your own repo. After you `git clone` it to your local computer, run
> `npm install` and follow these same steps.

2. Next, set up your TakeShape project. The following command will prompt you to
   import the pattern used in this starter.

```console
$ cd portfolio
$ npm run setup
```

3. Create an API Key with `Dev` permissions in your TakeShape project.

    - Click on the project name in the upper left > API Keys > New API Key. Save your
      new API key somewhere.  
    - Copy and save the project ID from the URL. It looks like this, the UUID
      value between `projects` and `api-keys`:
      `https://app.takeshape.io/projects/f5767c2f-debb-4af8-8966-4d4511d99a5c/api-keys`

4. Back in your Gatsby project, create a `.env` file in your project with following lines:

```inputrc
TAKESHAPE_PROJECT=<takeshape-project-id-from-url>
TAKESHAPE_TOKEN=<takeshape-api-key-you-copied>
```

5. Finally, start your local development site at `http://localhost:8000`

```console
$ npm start
```

## Developing

[Visual Studio Code](https://code.visualstudio.com/) is an excellent editor.
This project has some basic config and recommended extensions that will make
your development process easier.

## Deploy

Check our walkthrough for instructions on
[how to deploy this Gatsby site to Netlify](https://www.takeshape.io/docs/configuring-netlify/)
and trigger builds with TakeShape's webhooks.

## Reach out

If we can make your life easier we want to hear from you at
[support@takeshape.io](mailto:support@takeshape.io)

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives
[on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with this
    [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).**
    It starts with zero assumptions about your level of ability and walks
    through every step of the process.

-   **To dive straight into code samples, head
    [to the documentation](https://www.gatsbyjs.org/docs/).** In particular,
    check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections
    in the sidebar.

-   You can optionally set up
    [continuous deployment of your templates](https://www.takeshape.io/docs/continuous-deployment-of-templates/).
