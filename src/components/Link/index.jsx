/* eslint-disable react/jsx-props-no-spreading */
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    children: PropTypes.node,
    partiallyActive: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

const defaultProps = {
    activeClassName: null,
    children: null,
    className: null,
    partiallyActive: false,
};

const INTERNAL_LINK_PATTERN = /^\/(?!\/)/;
const FILE_LINK_PATTERN = /\.[0-9a-z]+$/i;

const Link = ({
    activeClassName,
    children,
    className,
    partiallyActive,
    to,
    ...rest
}) => {
    if (!INTERNAL_LINK_PATTERN.test(to)) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
                {children}
            </a>
        );
    }

    if (FILE_LINK_PATTERN.test(to)) {
        return (
            <a href={to} className={className} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            className={className}
            partiallyActive={partiallyActive}
            {...rest}
        >
            {children}
        </GatsbyLink>
    );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
