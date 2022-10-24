> If you need a super-fast site and you want CMS features, what are your options? 



#### Google PageSpeed Insights

[pagespeed.web.dev](https://pagespeed.web.dev/)

PageSpeed Insights (PSI) reports on the performance of a page on both mobile and desktop devices, and provides suggestions on how that page may be improved.

- [amazon.com](https://pagespeed.web.dev/report?url=https%3A%2F%2Famazon.com%2F)
- [dt9affiliations](https://pagespeed.web.dev/report?url=https%3A%2F%2Fdt9affiliations.com%2Fen%2F)
- [divemalta](https://pagespeed.web.dev/report?url=https%3A%2F%2Fdivemalta.app%2F)
- [comparabet](https://pagespeed.web.dev/report?url=https%3A%2F%2Fcomparabet.it%2F)

PSI provides both lab and field data about a page. Lab data is useful for debugging performance issues, as it is collected in a controlled environment. However, it may not capture real-world bottlenecks. Field data is useful for capturing true, real-world user experience - but has a more limited set of metrics

#### Google Lighthouse

Lighthouse is an [open-source](https://github.com/GoogleChrome/lighthouse), automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.

You can run Lighthouse in Chrome DevTools, from the command line, or as a Node module. You give Lighthouse a URL to audit, it runs a series of audits against the page, and then it generates a report on how well the page did. From there, use the failing audits as indicators on how to improve the page. Each audit has a reference doc explaining why the audit is important, as well as how to fix it.

You can also use Lighthouse CI to prevent regressions on your sites.

If you like you can watch the video below from Google I/O to learn more about how to use and contribute to Lighthouse, but as useual with this kind of thing, it's not really aimed at the likes of us

<iframe width="560" height="315" src="https://www.youtube.com/embed/mLjxXPHuIJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### How the Fastest Site Ever might work

First thing, as the Irish say, is you don't want to start from here. You want to start from when the speed a site loaded was influenced by the number of bytes downloaded from the server. 

What defines it now is first meaningful paint and first interactivity as defined by the helpful folks at Google Inc with thier easy to use [lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) product.
