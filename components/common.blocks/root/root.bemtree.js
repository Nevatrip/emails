const imageUrlBuilder = require( '@sanity/image-url' );

const builder = imageUrlBuilder(
  {
    projectId: '39dycnz5',
    dataset: 'develop',
  }
);

block( 'root' ).replace()( ( node, ctx ) => {
  const level = ctx.level || 'desktop';
  const config = node.config = ctx.config;
  const data = node.data = ctx.data;

  if ( ctx.context ) return ctx.context;

  node._urlFor = source => builder.image( source );

  return {
    block: 'page',
    doctype: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',
    title: data.title || config.appName,
    styles: { elem: 'css', url: `/assets/css/${ data.page }-${ level }.min.css` },
    scripts: { elem: 'js', url: `/assets/js/${ data.page }-${ level }.min.js` },
    mods: { route: data.view || data.page },
  };
} );
