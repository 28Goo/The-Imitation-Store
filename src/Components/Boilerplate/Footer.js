import React from 'react';

export default function Footer() {
    return(
        <div className="footer">
            <span id='copyright'>Copyright © </span>
            <a href="https://github.com/28Goo" target='_blank' rel='noreferrer'>
                <span id='github'>
                    28Goo <i className="devicon-github-original"/>
                </span>
            </a>
        </div>
    )
}