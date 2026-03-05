import { visit } from 'unist-util-visit';

// Handles both escaped (\[button ...\]) and unescaped ([button ...]) shortcodes
const BUTTON_REGEX = /\\?\[button(.*?)\\?\](.*?)\\?\[\/button\\?\]/gis;

function parseAttrs(attrString) {
  const attrs = {};
  const re = /(\w+)="([^"]*)"/g;
  let match;
  while ((match = re.exec(attrString)) !== null) {
    attrs[match[1]] = match[2];
  }
  return attrs;
}

function buttonToHtml(attrString, text) {
  const attrs = parseAttrs(attrString);
  const href = attrs.link || '#';
  const isNewWindow = attrs.newwindow === 'yes';
  const targetAttrs = isNewWindow ? ' target="_blank" rel="noopener noreferrer"' : '';
  const style = 'display:inline-block;background:#7ed957;color:#0b1970;font-weight:700;padding:0.75rem 1.5rem;border-radius:0.5rem;text-decoration:none;';
  return `<a href="${href}" style="${style}"${targetAttrs}>${text.trim()}</a>`;
}

export default function remarkWpButtons() {
  return (tree, file) => {
    const source = String(file.value);

    visit(tree, 'paragraph', (node, index, parent) => {
      const rawText = source.slice(node.position.start.offset, node.position.end.offset);

      BUTTON_REGEX.lastIndex = 0;
      if (!BUTTON_REGEX.test(rawText)) return;

      BUTTON_REGEX.lastIndex = 0;
      const htmlContent = rawText.replace(BUTTON_REGEX, (_, attrString, text) =>
        buttonToHtml(attrString, text)
      );

      parent.children.splice(index, 1, {
        type: 'html',
        value: `<p>${htmlContent}</p>`,
      });
    });
  };
}
