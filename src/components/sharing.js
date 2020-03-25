import React from "react"

export const Sharing = (props) => {
    return (
        <section id="sharing">
            <a className="twitter" href="https://twitter.com/intent/tweet?text={{ site.baseurl }}{{ page.url }} - {{page.title}} by @{{ site.authorTwitter }}">
                <span className="icon-twitter">Tweet</span>
            </a>

            <a className="facebook"
                href="#"
                onClick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'); return false;">
                <span className="icon-facebook-rect">Share</span>
            </a>
        </section>
    )
};
