/* String constants. */
const selectors = 'link[rev=canonical],link[rel=shorturl],link[rel=shortlink]';


/** Find short URL in the page */
on('click', function(node, data) {
    let short = document.querySelector(selectors),
        link;
    if (short && (link = short.href)) {
        postMessage({short: true, url: link});
        return;
    } else {
        // use canonical URL if it exists, current URL otherwise.
        let canonical = document.querySelector('link[rel=canonical]');
        if (!(canonical && (link = canonical.href)))
            link = document.location.href;

        postMessage({short: false, url: link});
    }
});
