import React from "react";

export default class Pagination extends React.Component {
    next() {
        this.props.setPage(this.props.page + 1);
        return false;
    }

    previous() {
        this.props.setPage(this.props.page - 1);
        return false;
    }

    render() {
        return (
            <div className="pager">
                <nav id="post-nav">
                    {this.props.page > 0 && (
                        <span className="prev">
                            <button type='button' title='Previous page' onClick={this.previous.bind(this)} style={{cursor: 'hand'}}>
                                <span className="arrow">←</span> Newer Posts
                            </button>
                        </span>
                    )}
                    {this.props && this.props.pages && (this.props.pages - 1) > this.props.page && (
                        <span className="next">
                            <button type='button' title='Previous page' onClick={this.next.bind(this)} style={{cursor: 'hand'}}>
                                Older Posts <span className="arrow">→</span>
                            </button>
                        </span>
                    )}
                </nav>
            </div>
        )
    }
}