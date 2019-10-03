const imageUrlBuilder = require( '@sanity/image-url' );
const MarkdownBemjson = require( 'markdown-bemjson' );

const builder = imageUrlBuilder(
  {
    projectId: '39dycnz5',
    dataset: 'develop',
  }
);

const markdownBemjson = new MarkdownBemjson( {
  isEscapeHtml: true,
  wrapper: false,
  markdown: {
    breaks: true,
  },
  rules: {
    br () {
      return {
        // block: 'br',
        tag: 'br',
      }
    },
  },
} );

block( 'root' ).replace()( ( node, ctx ) => {
  const level = ctx.level || 'desktop';
  const config = node.config = ctx.config;
  const data = node.data = ctx.data;


  if ( ctx.context ) return ctx.context;

  node._urlFor = source => builder.image( source );
  node._fromMarkdown = markdown => markdownBemjson.convert( markdown );

  return {
    block: 'page',
    doctype: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',
    title: data.title || config.appName,
    styles: { elem: 'css', url: `/assets/css/${ data.page }-${ level }.min.css` },
    head: [
      { elem: 'meta', attrs: { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' } },
      { html: '<!--', tag: false },
      { elem: 'meta', attrs: { name: 'format-detection', content: 'telephone=no' } },
      { elem: 'meta', attrs: { 'http-equiv': 'x-rim-auto-match', content: 'none' } },
      { html: '-->', tag: false },
    ],
    mods: { route: data.view || data.page },

  };
} );
