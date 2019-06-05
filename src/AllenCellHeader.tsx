import * as classNames from "classnames";
import * as React from "react";

import links, { Link } from "./links";

export interface AllenHeaderProps {
    className?: string;
    show: boolean;
}

interface HeaderLinkProps {
    link: Link;
}

const HeaderLink: React.FunctionComponent<HeaderLinkProps> = (props: HeaderLinkProps) => {
    return (
        <div className='link'>
            <a href={props.link.href}>{props.link.display}</a>
        </div>
    );
};

/**
 * Simplified version of the allencell.org showAllenCellHeader created in Weebly.
 */
export default function AllenCellHeader(props: AllenHeaderProps) {
    const { show } = props;
    return (
        <header
            className={classNames('header', {
                show: show,
            })}
        >
            <a className='logo-container' href="https://allencell.org">
                <img
                    className='logo'
                    src="https://s3-us-west-2.amazonaws.com/www.allencell.org/allencell-logo-white.png"
                    alt="Allen Cell Explorer Home Page"
                />
            </a>
            <div className='links-container'>
                {links.map((link) => (
                    <HeaderLink key={link.href} link={link} />
                ))}
            </div>
        </header>
    );
}
