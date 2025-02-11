import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Infotip from '@theme/Infotip';
import Tip from '@theme/Infotip/Tip';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Highlight>" tag to our Highlight component
    // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
    Infotip,
    Tip
};