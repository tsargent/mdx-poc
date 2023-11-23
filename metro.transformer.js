const upstreamTransformer = require('metro-react-native-babel-transformer');

async function mdxCompile(src) {
  const mdx = await import('@mdx-js/mdx');
  return mdx.compile(src);
}

module.exports.transform = async props => {
  if (props.filename.endsWith('.mdx')) {
    const mdxResult = await mdxCompile(props.src);
    return upstreamTransformer.transform({...props, src: mdxResult.value});
  }
  return upstreamTransformer.transform(props);
};
