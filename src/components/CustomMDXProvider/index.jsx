/* eslint-disable react/no-danger */
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import PropTypes from '../../utils/PropTypes';
import Link from '../Link';
import List from '../List';
import { warning } from './mdx_style.css'
import './mdx_style.css'

const basicPropTypes = {
  children: PropTypes.node,
};
const basicDefaultProps = {
  children: null,
};

const Heading2 = ({ children }) => (
  <h2 className="typo-h2 mt-12">
    {children}
  </h2>
);
Heading2.propTypes = basicPropTypes;
Heading2.defaultProps = basicDefaultProps;

const Heading3 = ({ children }) => (
  <h3 className="typo-h3 mt-12">
    {children}
  </h3>
);
Heading3.propTypes = basicPropTypes;
Heading3.defaultProps = basicDefaultProps;

const Heading4 = ({ children }) => (
  <h4 className="typo-h4 mt-12">
    {children}
  </h4>
);
Heading4.propTypes = basicPropTypes;
Heading4.defaultProps = basicDefaultProps;

const Heading5 = ({ children }) => (
  <h5 className="typo-h5 mt-12">
    {children}
  </h5>
);
Heading5.propTypes = basicPropTypes;
Heading5.defaultProps = basicDefaultProps;

const Heading6 = ({ children }) => (
  <h6 className="typo-h6 mt-12">
    {children}
  </h6>
);
Heading6.propTypes = basicPropTypes;
Heading6.defaultProps = basicDefaultProps;

const Paragraph = ({ children }) => (
  <p className="mt-4">
    {children}
  </p>
);
Paragraph.propTypes = basicPropTypes;
Paragraph.defaultProps = basicDefaultProps;

const CustomList = ({ children }) => (
  <List className="mt-4" type="check">
    {children}
  </List>
);
CustomList.propTypes = basicPropTypes;
CustomList.defaultProps = basicDefaultProps;

const CustomListItem = ({ children }) => (
  <List.Item>
    <p className="typo-body">
      {children}
    </p>
  </List.Item>
);
CustomListItem.propTypes = basicPropTypes;
CustomListItem.defaultProps = basicDefaultProps;

const CustomTable = ({ children }) => (
  <table className="mt-8">
    {children}
  </table>
);
CustomTable.propTypes = basicPropTypes;
CustomTable.defaultProps = basicPropTypes;

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const CustomLink = ({ children, href, ...rest }) => (
  <Link className="text-yellow-400" to={href} {...rest}>
    {children}
  </Link>
);

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

const Url = ({ children, href }) => (
  <div className="mt-8">
    <Link className="text-yellow-400 text-xl" to={href}>{children}</Link>
  </div>
);

Url.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

Url.defaultProps = {
  children: null,
  href: '',
};

const Source = ({ children, href }) => (
  <Link className="underline colors.coolGray-50" to={href}>{children}</Link>
);

Source.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

Source.defaultProps = {
  children: null,
  href: '',
};

const Warning = ({children}) => (
  <aside className="warning">
    {children}
  </aside>
);

Warning.propTypes = {
  children: PropTypes.node
};

Warning.defaultProps = {
  children: null
};

const CustTable = ({ children }) => (
    <table class="styled-table">
      {children}
    </table>
);
CustTable.propTypes = basicPropTypes;
CustTable.defaultProps = basicDefaultProps;

const Interesting = ({ children }) => (
  <aside className="interesting">
    {children}
  </aside>
);
Interesting.propTypes = basicPropTypes;
Interesting.defaultProps = basicDefaultProps;

const Stat = ({ children }) => (
  <aside className="stat">
    {children}
  </aside>
);
Stat.propTypes = basicPropTypes;
Stat.defaultProps = basicDefaultProps;

const CustomMDXProvider = ({ children }) => (
  <>
    <MDXProvider
      components={{
        h1: Heading2,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        h5: Heading5,
        h6: Heading6,
        p: Paragraph,
        ul: CustomList,
        li: CustomListItem,
        a: CustomLink,
        Table: CustomTable,
        Url: Url,
        Warning: Warning,
        table: CustTable,
        Interesting: Interesting,
        Stat: Stat,
        Source: Source
      }}
    >
      {children}
    </MDXProvider>
  </ >
);

CustomMDXProvider.propTypes = propTypes;
CustomMDXProvider.defaultProps = defaultProps;

export default CustomMDXProvider;
