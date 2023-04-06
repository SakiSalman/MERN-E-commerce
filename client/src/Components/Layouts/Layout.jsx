import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};


 Layout.defaultProps = {
  title : 'Ecommerce App', description : 'Mern Stack Projects', keywords : 'mernstack, MERN, fullstack', author : 'developer salman'
 }
export default Layout;
