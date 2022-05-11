# Delbin — Tailwind CSS website template for a product/startup

![Screenshot of the website template](/assets/screen.jpg)

## Introduction

This is a free website template created for a product or a startup. It has a bold/confident design with an easily extensible & configurable design system thanks to the flexible API that Tailwind CSS provides.

See the [live project preview](https://hungry-einstein-624473.netlify.app/).

Visit the [project page on Gumrad](https://creatorx64.gumroad.com/l/xeno-template).

## Lighthouse scores

![Screenshot of Lighthouse score](/assets/benchmark.jpg)

The project was developed with the best web practices & standards in mind.

Page loading performance is improved by the usage of SVG files where makes sense. In addition, Tailwind CSS's purge feature and Vite's production pipeline make the project lightweight & production ready.

## Stack

This project uses [Vite](https://vitejs.dev/) as a build tool which takes care of transpilation, bundling, minification, and other tasks that make development faster & predictable.

Frontend frameworks like React or Vue haven't been used. This makes the template accessible to anyone regardless of their framework of choice.

## Project structure

The folder structure of the project looks like below, including short descriptions of what each folder contains:

- **/**
  - _configuration files for tooling & the website entry point (index.html)_
- **assets/**
  - _includes project-level assets, like the screenshot above_
- **public/**
  - _public assets consumed by the template_
- **src/**
  - _source code for styles & scripts_

## Usage without frameworks

The template consists of a single page and that page is `index.html` which is located at the root level. If you'd like to keep the existing structure of the project, which would be the fastest way to utilize the template, then you can continue to build on the same `index.html` page & extract style components into the `/src/styles/globals.css` as you see fit.

## Usage with frameworks (React, Vue, etc.)

Usage with frameworks is pretty straightforward as far as the HTML & styling parts go. You can extract components as you see fit, then re-construct the page in a parent component.

Mind that porting the swiper logic will require you to use [custom components that Swiper provides](https://swiperjs.com/react) rather than using classes & vanilla JS to achieve the swiper logic (which is the case in the current state of the project).

## Support

If you have a problem setting up the project or if you encounter an error which I didn't foresee, please don't hesitate to send a PR. I'll make sure to remedy the issue as soon as I can.

You can also reach out to me via email or Twitter:

- [creatorX64 at Twitter](https://twitter.com/creatorX64)
- <creatorX64@gmail.com>
